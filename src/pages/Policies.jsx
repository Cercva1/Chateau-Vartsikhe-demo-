import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { policiesPage } from "../i18n/policies";

export default function Policies() {
  const { locale } = useLanguage();
  const t = policiesPage[locale];

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/stable.png")',
          minHeight: "34vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="policy-grid">
            {t.cards.map((card) => (
              <Reveal className="policy-card" key={card.title}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ maxWidth: 700, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.cta.eyebrow}</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                margin: "14px 0 22px",
              }}
            >
              {t.cta.heading}
            </h2>
            <Link to="/contact" className="btn btn-primary">
              {t.cta.button}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
