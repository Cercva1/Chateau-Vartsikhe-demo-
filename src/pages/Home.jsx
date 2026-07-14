import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import HeroSlideshow from "../components/HeroSlideshow";
import { useLanguage } from "../i18n/LanguageContext";
import { home } from "../i18n/home";

const TILE_IMAGES = [
  "/assets/cottages.png",
  "/assets/stable.png",
  "/assets/grove.png",
];
const TILE_ANCHORS = ["/rooms#cottages", "/rooms#stable", "/rooms#grove"];
const ON_ESTATE_IMAGES = [
  "/assets/pool-indoor-2.png",
  "/assets/dining-hall.png",
  "/assets/toast.png",
];

export default function Home() {
  const { locale } = useLanguage();
  const t = home[locale];

  return (
    <>
      <HeroSlideshow taglineNode={t.heroTagline} scrollLabel={t.scroll} />

      <section id="after-hero">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{t.whereToStay.eyebrow}</span>
            <h2>{t.whereToStay.heading}</h2>
            <p>{t.whereToStay.body}</p>
          </Reveal>
          <div className="grid-3">
            {t.tiles.map((tile, i) => (
              <Reveal className="tile" key={tile.title}>
                <div
                  className="img"
                  style={{ backgroundImage: `url("${TILE_IMAGES[i]}")` }}
                />
                <div className="body">
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                  <div className="price">{tile.price}</div>
                  <Link to={TILE_ANCHORS[i]} className="more">
                    {tile.link}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="split">
            <img
              src="/assets/pool-outdoor.png"
              alt="Outdoor pool and loungers at Chateau Vartsikhe"
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

      <section>
        <div className="wrap">
          <Reveal className="split reverse">
            <img src="/assets/grove.png" alt="Grove cabin lit at dusk" />
            <div>
              <span className="eyebrow">{t.afterDark.eyebrow}</span>
              <h2>{t.afterDark.heading}</h2>
              <p>{t.afterDark.body}</p>
              <Link to="/rooms" className="btn btn-outline">
                {t.afterDark.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{t.onEstate.eyebrow}</span>
            <h2>{t.onEstate.heading}</h2>
            <p>{t.onEstate.body}</p>
          </Reveal>
          <div className="grid-3">
            {t.onEstateTiles.map((tile, i) => (
              <Reveal className="tile" key={tile.title}>
                <div
                  className="img"
                  style={{ backgroundImage: `url("${ON_ESTATE_IMAGES[i]}")` }}
                />
                <div className="body">
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
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
