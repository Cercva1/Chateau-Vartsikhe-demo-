import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { chrome } from "../i18n/chrome";

const LOCALES = ["en", "ka"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const t = chrome[locale];

  return (
    <header className="site">
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
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
