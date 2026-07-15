import { Link, useParams, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { roomsPage } from "../i18n/rooms";
import { CARDS, getCardIndexById } from "../data/roomsCatalog";

export default function RoomDetail() {
  const { roomId } = useParams();
  const { locale } = useLanguage();
  const t = roomsPage[locale];

  const cardIndex = getCardIndexById(roomId);

  // Unknown room id in the URL -> just send them back to the listing rather
  // than showing a broken page.
  if (cardIndex === -1) return <Navigate to="/rooms" replace />;

  const card = CARDS[cardIndex];
  const copy = t.cards[cardIndex];

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: `url("${card.img}")`,
          minHeight: "44vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Link
            to="/rooms"
            style={{
              display: "inline-block",
              marginBottom: 28,
              color: "var(--forest-deep)",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            {t.backToRooms}
          </Link>

          <Reveal>
            {/* Single image for now — swap for a real gallery once more
                photos per room exist. */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                backgroundImage: `url("${card.img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: 32,
              }}
            />

            <p
              style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 20 }}
            >
              {copy.body}
            </p>

            <div className="facts" style={{ marginBottom: 8 }}>
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

            <div className="price" style={{ margin: "24px 0 40px" }}>
              {card.price} ₾ <small>{copy.priceNote}</small>
            </div>

            <div style={{ textAlign: "center" }}>
              <a
                href={card.otelmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.reserve}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
