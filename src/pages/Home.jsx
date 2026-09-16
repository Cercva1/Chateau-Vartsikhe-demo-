import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import HeroSlideshow from "../components/HeroSlideshow";
import Slideshow from "../components/Slideshow";
import { useLanguage } from "../i18n/LanguageContext";
import { home } from "../i18n/home";

// One slideshow per "Discover" tile — Book a Room / Activities / Events & Meetings.
const TILE_SLIDES = [
  [
    "/assets/bedroom-suite.png",
    "/assets/rooms/lux.jpg",
    "/assets/rooms/otskhanuri-villa.jpg",
    "/assets/bathroom.png",
  ],
  [
    "/assets/photos/activities/aerial-padel-court.jpg",
    "/assets/photos/activities/horse-riding.jpg",
    "/assets/photos/activities/padel-court-detail.jpg",
  ],
  [
    "/assets/photos/events/wedding-arch-couple.jpg",
    "/assets/photos/events/banquet-hall-2.jpg",
    "/assets/photos/events/wedding-guests.jpg",
    "/assets/photos/events/aerial-wedding-marquee.jpg",
  ],
];

const KITCHEN_IMAGES = [
  "/assets/photos/dining/veranda-dining-bright.jpg",
  "/assets/photos/dining/veranda-dining-1.jpg",
  "/assets/photos/dining/veranda-dining-2.jpg",
  "/assets/photos/dining/veranda-dining-group.jpg",
  "/assets/photos/dining/veranda-dining-golden-hour.jpg",
];

export default function Home() {
  const { locale } = useLanguage();
  const t = home[locale];

  return (
    <>
      <HeroSlideshow taglineNode={t.heroTagline} scrollLabel={t.scroll} />

      {/* Discover section — 3 tiles */}
      <section id="after-hero">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{t.whereToStay.eyebrow}</span>
            <h2>{t.whereToStay.heading}</h2>
          </Reveal>
          <div className="grid-3">
            {t.tiles.map((tile, i) => (
              <Reveal className="tile" key={tile.title}>
                <Slideshow images={TILE_SLIDES[i]} className="img" />
                <div className="body">
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                  <Link to={t.tileLinks[i]} className="more">
                    {tile.link}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ajameti forest section */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="split">
            <img
              src="/assets/rooms/forest-cabin.jpg"
              alt="Forest cabin at Chateau Vartsikhe"
            />
            <div>
              <span className="eyebrow">{t.grounds.eyebrow}</span>
              <h2>{t.grounds.heading}</h2>
              <p>{t.grounds.body}</p>
              <Link to="/about" className="btn btn-outline">
                {t.grounds.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Restaurant section */}
      <section>
        <div className="wrap">
          <Reveal className="split reverse">
            <Slideshow images={KITCHEN_IMAGES} className="split-media" />
            <div>
              <span className="eyebrow">{t.restaurant.eyebrow}</span>
              <h2>{t.restaurant.heading}</h2>
              <p>{t.restaurant.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.readyWhenYouAre.eyebrow}</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
                margin: "14px 0 26px",
              }}
            >
              {t.readyWhenYouAre.heading}
            </h2>
            <Link to="/rooms" className="btn btn-primary">
              {t.readyWhenYouAre.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
