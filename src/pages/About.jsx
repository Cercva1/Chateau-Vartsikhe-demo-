import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { aboutPage } from "../i18n/about";

export default function About() {
  const { locale } = useLanguage();
  const t = aboutPage[locale];

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/toast.png")',
          minHeight: "36vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="split">
            <img src="/assets/cottages.png" alt={t.where.imgAlt} />
            <div>
              <span className="eyebrow">{t.where.eyebrow}</span>
              <h2>{t.where.heading}</h2>
              <p>{t.where.body1}</p>
              <p>{t.where.body2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="split reverse">
            <img src="/assets/stable.png" alt={t.grounds.imgAlt} />
            <div>
              <span className="eyebrow">{t.grounds.eyebrow}</span>
              <h2>{t.grounds.heading}</h2>
              <p>{t.grounds.body}</p>
              <Link to="/rooms" className="btn btn-outline">
                {t.grounds.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="split">
            <img src="/assets/toast.png" alt={t.evenings.imgAlt} />
            <div>
              <span className="eyebrow">{t.evenings.eyebrow}</span>
              <h2>{t.evenings.heading}</h2>
              <p>{t.evenings.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{t.legal.eyebrow}</span>
            <h2>{t.legal.heading}</h2>
          </Reveal>
          <Reveal className="legal-box">
            <div>
              <strong>{t.legal.nameLabel}</strong>
              {t.legal.nameValue}
            </div>
            <div>
              <strong>{t.legal.regLabel}</strong>
              {t.legal.regValue}
            </div>
            <div>
              <strong>{t.legal.addressLabel}</strong>
              {t.legal.addressValue}
            </div>
            <div>
              <strong>{t.legal.contactLabel}</strong>
              info@chateauvartsikhe.ge · +995 558 33 33 93
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
