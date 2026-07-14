import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { roomsPage } from "../i18n/rooms";

// Real OtelMS hosted booking page (confirmed working). Not yet deep-linkable
// per specific room, so every Reserve button points here for now.
const OTELMS_BOOKING_URL = "https://booking-114241.otelms.com/booking/rooms";

// Everything language-independent lives here, indexed the same way as
// roomsPage[locale].cards — so translations only ever touch the i18n file.
const CARDS = [
  {
    id: "cottages",
    anchor: "cottages",
    img: "/assets/cottages.png",
    price: 240,
    reverse: false,
  },
  {
    id: "stable",
    anchor: "stable",
    img: "/assets/stable.png",
    price: 195,
    reverse: true,
  },
  {
    id: "grove",
    anchor: "grove",
    img: "/assets/grove.png",
    price: 150,
    reverse: false,
  },
  {
    id: "main",
    anchor: "main-house",
    img: "/assets/bedroom-suite.png",
    price: 310,
    reverse: true,
    miniImg: "/assets/bathroom.png",
  },
];

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
                  className={`room-card${card.reverse ? " reverse" : ""}`}
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
                      <a
                        href={OTELMS_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        {t.reserve}
                      </a>
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
            <a
              href={OTELMS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.cta.button}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
