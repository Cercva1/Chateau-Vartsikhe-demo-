const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "http://localhost:4173";
const issues = [];
const log = (msg) => console.log(msg);

// Routes as they actually exist in src/App.jsx today. (The old version of
// this script tested a `/booking` route with a price-breakdown form that no
// longer exists in App.jsx — Booking.jsx is orphaned/unrouted now that
// "Reserve" links out to OtelMS directly. Removed those checks; flagged the
// orphaned file separately instead of failing the run on it.)
const ROUTES = [
  { path: "/", name: "home" },
  { path: "/rooms", name: "rooms" },
  { path: "/rooms/lux", name: "room-detail" },
  { path: "/activities", name: "activities" },
  { path: "/events", name: "events" },
  { path: "/gallery", name: "gallery" },
  { path: "/policies", name: "policies" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
];

const VIEWPORTS = [
  { name: "mobile-375", width: 375, height: 812 }, // iPhone SE/13 mini class
  { name: "mobile-390", width: 390, height: 844 }, // iPhone 14/15 class
  { name: "mobile-414", width: 414, height: 896 }, // iPhone Plus/Max class
  { name: "tablet-768", width: 768, height: 1024 }, // iPad portrait
];

const SCREEN_DIR = path.join(__dirname, "mobile-check-screens");
fs.mkdirSync(SCREEN_DIR, { recursive: true });

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

  // ---- 1. Desktop baseline: every real route loads, has a real title ----
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const r of ROUTES) {
    await page.goto(BASE + r.path, { waitUntil: "networkidle" });
    const title = await page.title();
    log(`[route] ${r.path} -> title="${title}"`);
    if (!title || title === "chateau-react") issues.push(`${r.path}: bad/default title`);
  }

  // ---- 2. Nav links from home page ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const navLinks = await page.$$eval("nav.main a", (as) => as.map((a) => a.textContent.trim()));
  log(`[nav] links found: ${navLinks.join(", ")}`);
  const expectedNav = ["Home", "Rooms", "Activities", "Events & Meetings", "Gallery", "Policies", "About", "Contact"];
  for (const t of expectedNav) {
    if (!navLinks.includes(t)) issues.push(`Nav missing link: ${t}`);
  }

  // ---- 3. Locale switcher ----
  await page.click('.locale button:text("KA")');
  const kaActive = await page.$eval('.locale button:text("KA")', (b) => b.className.includes("active"));
  log(`[locale] KA active after click: ${kaActive}`);
  if (!kaActive) issues.push("Locale switcher: KA did not become active on click");
  await page.click('.locale button:text("EN")');

  // ---- 4. Footer links present on every route ----
  for (const r of ROUTES) {
    await page.goto(BASE + r.path, { waitUntil: "networkidle" });
    const footerLinks = await page.$$eval("footer.site a", (as) => as.length);
    if (footerLinks < 5) issues.push(`${r.path}: footer seems to be missing links (found ${footerLinks})`);
  }

  // ---- 5. Hero slideshow cycles on home page ----
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const activeBg1 = await page
    .$eval(".hero-slideshow .slide.active", (el) => el.style.backgroundImage)
    .catch(() => null);
  if (activeBg1) {
    await page.waitForTimeout(3300);
    const activeBg2 = await page.$eval(".hero-slideshow .slide.active", (el) => el.style.backgroundImage);
    if (activeBg1 === activeBg2) issues.push("Hero slideshow did not advance after 3s");
  }

  // ---- 6. Contact form submit (desktop) ----
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await page.fill("#c-name", "Test Guest");
  await page.fill("#c-email", "test@example.com");
  await page.fill("#c-message", "Hello, testing the form.");
  await page.click('button:text("Send message")');
  await page.waitForTimeout(300);
  const contactConfirm = await page.$eval(".confirm-msg", (el) => el.className.includes("show"));
  if (!contactConfirm) issues.push("Contact form submit did not reveal confirmation message");

  // =========================================================
  // ---- 7. RESPONSIVENESS SWEEP: every route x every breakpoint ----
  // =========================================================
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const r of ROUTES) {
      await page.goto(BASE + r.path, { waitUntil: "networkidle" });
      await page.waitForTimeout(250); // let reveal animations / images settle

      // Scroll-reveal (.reveal/.in via IntersectionObserver) only fires on
      // real scroll events. A plain fullPage screenshot doesn't scroll the
      // way a user does, so below-the-fold content can be captured mid
      // fade-in (or fully opacity:0) and look like a blank-page bug that
      // isn't real. Walk down first so every section has already revealed,
      // then reset to top before capturing.
      const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < fullHeight; y += 500) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(60);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(150);

      // -- horizontal overflow check --
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        if (scrollWidth <= docWidth + 1) return null;
        const all = document.querySelectorAll("body *");
        const offenders = [];
        for (const el of all) {
          const rect = el.getBoundingClientRect();
          if (rect.right > docWidth + 2 || rect.left < -2) {
            offenders.push({
              tag: el.tagName,
              cls: (el.className && el.className.toString()) || "",
              right: Math.round(rect.right),
              left: Math.round(rect.left),
            });
          }
        }
        offenders.sort((a, b) => b.right - a.right);
        return { docWidth, scrollWidth, offenders: offenders.slice(0, 5) };
      });
      if (overflow) {
        const offStr = overflow.offenders.map((o) => `${o.tag}.${o.cls}(right=${o.right})`).join(", ");
        issues.push(
          `[${vp.name}] ${r.path}: HORIZONTAL OVERFLOW — scrollWidth ${overflow.scrollWidth} > viewport ${overflow.docWidth}. Offenders: ${offStr}`
        );
        log(`  !! overflow at ${vp.name} ${r.path}: ${offStr}`);
      }

      // -- tap target size check for visible links/buttons --
      // WCAG 2.5.8 (AA) sets a 24x24 CSS-px minimum but explicitly exempts
      // inline text links with adequate spacing — a wide "Learn more →"
      // link that's only ~20px tall is normal and fine. What actually
      // catches real bugs is a target that's small in BOTH dimensions
      // (an icon-only button, a zero-padding element, etc).
      const smallTargets = await page.evaluate(() => {
        const MIN = 24;
        const els = document.querySelectorAll("a, button");
        const small = [];
        for (const el of els) {
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          if (style.display === "none" || style.visibility === "hidden" || rect.width === 0 || rect.height === 0)
            continue;
          if (rect.width < MIN && rect.height < MIN) {
            small.push({
              tag: el.tagName,
              text: (el.textContent || "").trim().slice(0, 30),
              w: Math.round(rect.width),
              h: Math.round(rect.height),
            });
          }
        }
        return small;
      });
      if (smallTargets.length) {
        const s = smallTargets
          .slice(0, 6)
          .map((t) => `${t.tag}"${t.text}"(${t.w}x${t.h})`)
          .join(", ");
        issues.push(`[${vp.name}] ${r.path}: ${smallTargets.length} tap target(s) under 32px — ${s}`);
      }

      // -- screenshot for manual visual review --
      const shotName = `${vp.name}__${r.name}.png`;
      await page.screenshot({ path: path.join(SCREEN_DIR, shotName), fullPage: true });
    }

    // -- hamburger menu check at this breakpoint --
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const toggleVisible = await page
      .$eval(".menu-toggle", (el) => getComputedStyle(el).display !== "none")
      .catch(() => false);
    if (toggleVisible) {
      const navBefore = await page.$eval("nav.main", (n) => n.className);
      await page.click(".menu-toggle");
      await page.waitForTimeout(250);
      const navAfter = await page.$eval("nav.main", (n) => n.className);
      if (!navAfter.includes("open") && navAfter === navBefore) {
        issues.push(`[${vp.name}] Mobile menu toggle did not open nav`);
      } else {
        const navLinkRects = await page.$$eval("nav.main a", (as) =>
          as.map((a) => {
            const r = a.getBoundingClientRect();
            return { text: a.textContent.trim(), visible: r.width > 0 && r.height > 0 };
          })
        );
        const hidden = navLinkRects.filter((l) => !l.visible);
        if (hidden.length) issues.push(`[${vp.name}] Open mobile nav has hidden links: ${hidden.map((h) => h.text).join(", ")}`);
      }
      await page.click(".menu-toggle").catch(() => {});
    } else {
      log(`  (no .menu-toggle visible at ${vp.name} — desktop nav still active at this width)`);
    }

    // -- contact form usability check at this breakpoint --
    await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
    const formCheck = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const inputs = document.querySelectorAll("#c-name, #c-email, #c-message");
      const bad = [];
      inputs.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.right > docWidth + 2) bad.push(el.id);
      });
      return bad;
    });
    if (formCheck.length) issues.push(`[${vp.name}] Contact form field(s) clipped/zero-width: ${formCheck.join(", ")}`);
  }

  await page.setViewportSize({ width: 1280, height: 900 });

  // ---- Console error check across the whole run ----
  if (consoleErrors.length) {
    const uniq = [...new Set(consoleErrors)];
    log("\n[console errors / failed requests detected]");
    uniq.forEach((e) => log("  " + e));
    issues.push(`${uniq.length} distinct console error(s)/failed request(s) detected during run`);
  }

  await browser.close();

  log("\n================ SUMMARY ================");
  log(`Screenshots saved to: ${SCREEN_DIR}`);
  if (issues.length === 0) {
    log("ALL CHECKS PASSED — no issues found.");
  } else {
    log(`${issues.length} ISSUE(S) FOUND:`);
    issues.forEach((i, idx) => log(`  ${idx + 1}. ${i}`));
    process.exitCode = 1;
  }
})();
