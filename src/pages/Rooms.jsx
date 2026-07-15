import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { roomsPage } from "../i18n/rooms";
import { CARDS } from "../data/roomsCatalog";

export default function Rooms() {
  const { locale } = useLanguage();
  const t = roomsPage[locale];

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/cottages.png")',
          minHeight: "38vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="rooms-list">
            {CARDS.map((card, i) => {
              const copy = t.cards[i];
              return (
                <Reveal
                  as="div"
                  className={`room-card${i % 2 === 1 ? " reverse" : ""}`}
                  id={card.anchor}
                  key={card.id}
                >
                  <div
                    className="img"
                    style={{ backgroundImage: `url("${card.img}")` }}
                  />
                  <div className="body">
                    <span className="eyebrow">{copy.eyebrow}</span>
                    <h3>{copy.title}</h3>
                    <p>{copy.body}</p>
                    <div className="facts">
                      {copy.facts.map((fact) => (
                        <span key={fact}>{fact}</span>
                      ))}
                    </div>

                    {card.miniImg && (
                      <div className="mini-gallery">
                        <div
                          className="mini-shot"
                          style={{ backgroundImage: `url("${card.miniImg}")` }}
                        />
                        <span className="mini-label">{copy.miniLabel}</span>
                      </div>
                    )}

                    <div className="price-row">
                      <div className="price">
                        {card.price} ₾ <small>{copy.priceNote}</small>
                      </div>
                      <Link
                        to={`/rooms/${card.id}`}
                        className="btn btn-primary"
                      >
                        {t.viewDetails}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.cta.eyebrow}</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)",
                margin: "14px 0 26px",
              }}
            >
              {t.cta.heading}
            </h2>
            <p style={{ color: "var(--ink-soft)" }}>
              {locale === "ka"
                ? "აირჩიეთ ოთახი ზემოთ — დეტალები და დაჯავშნის ღილაკი იმ გვერდზეა."
                : "Pick a room above to see photos and details, then reserve from there."}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
