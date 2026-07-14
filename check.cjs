const { chromium } = require("playwright");

const BASE = "http://localhost:4173";
const issues = [];
const log = (msg) => console.log(msg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" && !msg.text().includes("Failed to load resource")) {
      consoleErrors.push(msg.text());
    }
  });
  page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));
  page.on("response", (res) => {
    if (res.status() >= 400 && !res.url().includes("fonts.googleapis.com")) {
      consoleErrors.push(`HTTP ${res.status()} on ${res.url()}`);
    }
  });

  // ---- 1. Visit every route directly, check it renders and no console errors ----
  const routes = ["/", "/rooms", "/booking", "/policies", "/about", "/contact"];
  for (const route of routes) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    const title = await page.title();
    log(`[route] ${route} -> title="${title}"`);
    if (!title || title === "chateau-react") issues.push(`${route}: bad/default title`);
  }

  // ---- 2. Header nav links from home page ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const navLinks = await page.$$eval("nav.main a", (as) => as.map((a) => a.textContent.trim()));
  log(`[nav] links found: ${navLinks.join(", ")}`);
  const expectedNav = ["Home", "Rooms", "Booking", "Policies", "About", "Contact"];
  for (const t of expectedNav) {
    if (!navLinks.includes(t)) issues.push(`Nav missing link: ${t}`);
  }

  for (const label of ["Rooms", "Booking", "Policies", "About", "Contact"]) {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click(`nav.main a:text("${label}")`);
    await page.waitForLoadState("networkidle");
    const url = page.url();
    log(`[nav-click] clicked "${label}" -> ${url}`);
  }

  // ---- 3. Mobile menu toggle ----
  await page.setViewportSize({ width: 500, height: 900 });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const navBefore = await page.$eval("nav.main", (n) => n.className);
  await page.click(".menu-toggle");
  await page.waitForTimeout(200);
  const navAfter = await page.$eval("nav.main", (n) => n.className);
  log(`[mobile-menu] before="${navBefore}" after="${navAfter}"`);
  if (!navAfter.includes("open")) issues.push("Mobile menu toggle did not add 'open' class");
  await page.setViewportSize({ width: 1280, height: 900 });

  // ---- 4. Language switcher buttons ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.click('.locale button:text("KA")');
  const kaActive = await page.$eval('.locale button:text("KA")', (b) => b.className.includes("active"));
  log(`[locale] KA active after click: ${kaActive}`);
  if (!kaActive) issues.push("Locale switcher: KA did not become active on click");

  // ---- 5. Home page tile links to rooms anchors ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.click('a:text("View details →") >> nth=0');
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(400);
  const url1 = page.url();
  log(`[anchor-link] cottages tile -> ${url1}`);
  if (!url1.includes("/rooms#cottages")) issues.push("Home cottages tile did not link to /rooms#cottages");

  // ---- 6. Rooms page: Reserve buttons carry correct room param ----
  await page.goto(BASE + "/rooms", { waitUntil: "networkidle" });
  const reserveHrefs = await page.$$eval('a:text("Reserve")', (as) => as.map((a) => a.getAttribute("href")));
  log(`[rooms] Reserve hrefs: ${reserveHrefs.join(", ")}`);
  const expectedRoomParams = ["cottage", "stable", "grove", "main"];
  expectedRoomParams.forEach((r, i) => {
    if (!reserveHrefs[i] || !reserveHrefs[i].includes(`room=${r}`)) {
      issues.push(`Rooms page Reserve #${i} does not link with room=${r} (got ${reserveHrefs[i]})`);
    }
  });

  // ---- 7. THE BIG ONE: Booking page pre-selects correct room from URL, and price updates ----
  for (const r of expectedRoomParams) {
    await page.goto(`${BASE}/booking?room=${r}`, { waitUntil: "networkidle" });
    const selected = await page.$eval("#room", (el) => el.value);
    log(`[booking-preselect] ?room=${r} -> dropdown selected="${selected}"`);
    if (selected !== r) issues.push(`Booking page: ?room=${r} did NOT preselect dropdown (got "${selected}")`);
  }

  // ---- 8. Dynamic price calculation ----
  await page.goto(`${BASE}/booking?room=cottage`, { waitUntil: "networkidle" });
  // No dates yet -> should show 1-night placeholder pricing (240), not the old hardcoded 480
  let subtotalText = await page.$eval(".price-breakdown .row.total span:nth-child(2)", (el) => el.textContent);
  log(`[pricing] cottage, no dates -> total shown = ${subtotalText}`);
  if (subtotalText.trim() !== "240 ₾") issues.push(`Expected default total "240 ₾" for cottage w/ no dates, got "${subtotalText}"`);

  await page.fill("#arrive", "2026-08-01");
  await page.fill("#depart", "2026-08-04"); // 3 nights
  await page.waitForTimeout(200);
  subtotalText = await page.$eval(".price-breakdown .row.total span:nth-child(2)", (el) => el.textContent);
  log(`[pricing] cottage, 3 nights -> total shown = ${subtotalText}`);
  if (subtotalText.trim() !== "720 ₾") issues.push(`Expected total "720 ₾" for cottage x3 nights, got "${subtotalText}"`);

  // switch room mid-form, verify price recalculates
  await page.selectOption("#room", "main"); // 310/night x 3 nights = 930
  await page.waitForTimeout(200);
  subtotalText = await page.$eval(".price-breakdown .row.total span:nth-child(2)", (el) => el.textContent);
  log(`[pricing] switched to main, 3 nights -> total shown = ${subtotalText}`);
  if (subtotalText.trim() !== "930 ₾") issues.push(`Expected total "930 ₾" for main x3 nights, got "${subtotalText}"`);

  // ---- 9. Booking form full submit flow ----
  await page.fill("#name", "Test Guest");
  await page.fill("#email", "test@example.com");
  const confirmVisibleBefore = await page.$eval(".confirm-msg", (el) => el.className.includes("show"));
  await page.click('button:text("Continue to payment")');
  await page.waitForTimeout(300);
  const confirmVisibleAfter = await page.$eval(".confirm-msg", (el) => el.className.includes("show"));
  log(`[booking-submit] confirm shown before=${confirmVisibleBefore} after=${confirmVisibleAfter}`);
  if (!confirmVisibleAfter) issues.push("Booking form submit did not reveal confirmation message");

  // ---- 10. Contact form submit ----
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await page.fill("#c-name", "Test Guest");
  await page.fill("#c-email", "test@example.com");
  await page.fill("#c-message", "Hello, testing the form.");
  await page.click('button:text("Send message")');
  await page.waitForTimeout(300);
  const contactConfirm = await page.$eval(".confirm-msg", (el) => el.className.includes("show"));
  log(`[contact-submit] confirm shown=${contactConfirm}`);
  if (!contactConfirm) issues.push("Contact form submit did not reveal confirmation message");

  // ---- 11. Footer links present on every page ----
  for (const route of routes) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    const footerLinks = await page.$$eval("footer.site a", (as) => as.length);
    if (footerLinks < 5) issues.push(`${route}: footer seems to be missing links (found ${footerLinks})`);
  }

  // ---- 12. Hero slideshow actually cycles on home page ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const activeBg1 = await page.$eval(".hero-slideshow .slide.active", (el) => el.style.backgroundImage);
  await page.waitForTimeout(3300);
  const activeBg2 = await page.$eval(".hero-slideshow .slide.active", (el) => el.style.backgroundImage);
  log(`[slideshow] bg1=${activeBg1.slice(0, 40)} bg2=${activeBg2.slice(0, 40)}`);
  if (activeBg1 === activeBg2) issues.push("Hero slideshow did not advance after 3s");

  // ---- Console error check across the whole run ----
  if (consoleErrors.length) {
    log("\n[console errors detected]");
    consoleErrors.forEach((e) => log("  " + e));
    issues.push(`${consoleErrors.length} console error(s) detected during run`);
  }

  await browser.close();

  log("\n================ SUMMARY ================");
  if (issues.length === 0) {
    log("ALL CHECKS PASSED — no issues found.");
  } else {
    log(`${issues.length} ISSUE(S) FOUND:`);
    issues.forEach((i, idx) => log(`  ${idx + 1}. ${i}`));
    process.exitCode = 1;
  }
})();
