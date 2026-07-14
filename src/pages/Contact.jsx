import { useState } from "react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { contactPage } from "../i18n/contact";

export default function Contact() {
  const { locale } = useLanguage();
  const t = contactPage[locale];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/grove.png")',
          minHeight: "32vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="item">
                <span className="eyebrow">{t.info.addressLabel}</span>
                <p>
                  {t.info.addressLine1}
                  <br />
                  {t.info.addressLine2}
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">{t.info.phoneLabel}</span>
                <p>
                  <a href="tel:+995558333393">+995 558 33 33 93</a>
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">{t.info.emailLabel}</span>
                <p>
                  <a href="mailto:info@chateauvartsikhe.ge">
                    info@chateauvartsikhe.ge
                  </a>
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">{t.info.hoursLabel}</span>
                <p>{t.info.hoursValue}</p>
              </div>
            </Reveal>

            <Reveal as="form" onSubmit={handleSubmit}>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-name">{t.form.nameLabel}</label>
                <input
                  id="c-name"
                  type="text"
                  placeholder={t.form.namePlaceholder}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-email">{t.form.emailLabel}</label>
                <input
                  id="c-email"
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-message">{t.form.messageLabel}</label>
                <textarea
                  id="c-message"
                  placeholder={t.form.messagePlaceholder}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {t.form.submit}
              </button>
              <div className={`confirm-msg${submitted ? " show" : ""}`}>
                {t.form.confirm}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
