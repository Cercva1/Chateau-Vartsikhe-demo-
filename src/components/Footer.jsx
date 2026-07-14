import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { chrome } from "../i18n/chrome";

export default function Footer() {
  const { locale } = useLanguage();
  const t = chrome[locale];

  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              Chateau Vartsikhe<span>.</span>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 280 }}>{t.footer.tagline}</p>
          </div>
          <div className="col">
            <h4>{t.footer.exploreHeading}</h4>
            <Link to="/rooms">{t.nav.rooms}</Link>
            <Link to="/policies">{t.nav.policies}</Link>
            <Link to="/about">{t.nav.about}</Link>
          </div>
          <div className="col">
            <h4>{t.footer.contactHeading}</h4>
            <Link to="/contact">{t.footer.getInTouch}</Link>
            <a href="tel:+995558333393">+995 558 33 33 93</a>
            <a href="mailto:info@chateauvartsikhe.ge">
              info@chateauvartsikhe.ge
            </a>
          </div>
          <div className="col">
            <h4>{t.footer.bookingHeading}</h4>
            <p>{t.footer.bookingNote}</p>
            <p>{t.footer.currencies}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.registration}</span>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
