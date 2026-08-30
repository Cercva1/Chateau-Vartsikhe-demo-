import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { aboutPage } from "../i18n/about";

export default function About() {
  const { locale } = useLanguage();
  const t = aboutPage[locale];
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/rooms/otskhanuri-villa.jpg")',
          minHeight: "36vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      {/* History — expand/collapse */}
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <span className="eyebrow">{t.history.eyebrow}</span>
            <h2 style={{ margin: "12px 0 18px" }}>{t.history.heading}</h2>
            <p>{t.history.shortText}</p>
            {historyOpen && (
              <div style={{ marginTop: 16 }}>
                {t.history.fullText.split("\n\n").map((para, i) => (
                  <p key={i} style={{ marginBottom: 14 }}>
                    {para}
                  </p>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => setHistoryOpen((v) => !v)}
              style={{
                marginTop: 16,
                background: "none",
                border: "none",
                color: "var(--forest-deep)",
                fontWeight: 600,
                cursor: "pointer",
                padding: 0,
                fontSize: "0.95rem",
                textDecoration: "underline",
              }}
            >
              {historyOpen ? t.history.readLess : t.history.readMore}
            </button>
          </Reveal>
        </div>
      </section>

      {/* Where we are */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="split">
            <img src="/assets/rooms/vineyard-house.jpg" alt={t.where.imgAlt} />
            <div>
              <span className="eyebrow">{t.where.eyebrow}</span>
              <h2>{t.where.heading}</h2>
              <p>{t.where.body1}</p>
              <p style={{ marginTop: 12 }}>{t.where.body2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grounds */}
      <section>
        <div className="wrap">
          <Reveal className="split reverse">
            <img src="/assets/rooms/lake-house.jpg" alt={t.grounds.imgAlt} />
            <div>
              <span className="eyebrow">{t.grounds.eyebrow}</span>
              <h2>{t.grounds.heading}</h2>
              <p>{t.grounds.body}</p>
              <Link
                to="/rooms"
                className="btn btn-outline"
                style={{ marginTop: 24, display: "inline-block" }}
              >
                {t.grounds.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Activities */}
      <section className="alt">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Reveal className="section-head">
            <span className="eyebrow">{t.experiences.eyebrow}</span>
            <h2>{t.experiences.heading}</h2>
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.1rem", margin: "8px 0 14px" }}>
              {t.experiences.facilitiesHeading}
            </h3>
            <div className="facts" style={{ marginBottom: 36 }}>
              {t.experiences.facilities.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
            <h3 style={{ fontSize: "1.1rem", margin: "8px 0 14px" }}>
              {t.experiences.activitiesHeading}
            </h3>
            <div className="policy-grid" style={{ marginBottom: 20 }}>
              <div className="policy-card">
                <ul>
                  {t.experiences.activities.slice(0, 5).map((a) => (
                    <li key={a.name}>
                      {a.name} — <strong>{a.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="policy-card">
                <ul>
                  {t.experiences.activities.slice(5).map((a) => (
                    <li key={a.name}>
                      {a.name} — <strong>{a.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              {t.experiences.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Evenings */}
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

      {/* Legal */}
      <section className="alt">
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
