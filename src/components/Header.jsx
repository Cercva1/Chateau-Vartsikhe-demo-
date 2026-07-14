import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LOCALES = ["en", "ka", "ru"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState("en");

  return (
    <header className="site">
      <div className="bar">
        <Link to="/" className="logo">
          Chateau Vartsikhe<span>.</span>
        </Link>

        <nav className={`main${menuOpen ? " open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </NavLink>
          <NavLink to="/booking" onClick={() => setMenuOpen(false)}>
            Booking
          </NavLink>
          <NavLink to="/policies" onClick={() => setMenuOpen(false)}>
            Policies
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
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
          <Link to="/booking" className="btn btn-primary">
            Book now
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
