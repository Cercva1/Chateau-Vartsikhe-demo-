import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { chrome } from "../i18n/chrome";

const LOCALES = ["en", "ka"];

// Routes whose first section is a full-bleed hero image — on these the header
// floats transparently over the photo until you scroll. Anything else (404)
// gets the solid bar immediately, plus a spacer so content isn't hidden under
// the now-fixed header.
const HERO_ROUTES = ["/", "/rooms", "/policies", "/about", "/contact"];

// How far down the page before the header condenses into its compact state.
const SCROLL_THRESHOLD = 60;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale } = useLanguage();
  const { pathname } = useLocation();
  const t = chrome[locale];

  const overHero = HERO_ROUTES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // handle a mid-page reload / restored scroll position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Opaque once scrolled, on non-hero pages, or while the mobile dropdown is
  // open (the dropdown needs an opaque bar above it). Shrinking to the little
  // header, though, is purely a scroll thing — opening the menu shouldn't
  // collapse the bar under your finger.
  const solid = scrolled || !overHero || menuOpen;
  const compact = scrolled;

  return (
    <>
      <header
        className={`site${solid ? " solid" : ""}${compact ? " compact" : ""}`}
      >
        <div className="bar">
          <Link to="/" className="logo">
            Chateau Vartsikhe<span>.</span>
          </Link>

          <nav className={`main${menuOpen ? " open" : ""}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/rooms" onClick={() => setMenuOpen(false)}>
              {t.nav.rooms}
            </NavLink>
            <NavLink to="/policies" onClick={() => setMenuOpen(false)}>
              {t.nav.policies}
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="header-right">
            <div className="locale">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={locale === code ? "active" : ""}
                  onClick={() => setLocale(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to="/rooms" className="btn btn-primary">
              {t.bookNow}
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {!overHero && <div className="header-spacer" />}
    </>
  );
}
