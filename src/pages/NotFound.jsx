import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { notFoundPage } from "../i18n/contact";

export default function NotFound() {
  const { locale } = useLanguage();
  const t = notFoundPage[locale];

  return (
    <section>
      <div className="wrap" style={{ textAlign: "center", padding: "60px 0" }}>
        <span className="eyebrow">404</span>
        <h1 style={{ fontStyle: "italic", margin: "16px 0 24px" }}>
          {t.heading}
        </h1>
        <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>{t.body}</p>
        <Link to="/" className="btn btn-primary">
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
