import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import HeroSlideshow from "../components/HeroSlideshow";

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <section id="after-hero">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Where to stay</span>
            <h2>Four kinds of quiet</h2>
            <p>
              Each room type keeps its own character — pick the one that
              matches your visit.
            </p>
          </Reveal>
          <div className="grid-3">
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/cottages.png")' }}
              />
              <div className="body">
                <h3>Veranda Cottages</h3>
                <p>
                  Timber houses on stilts with lace-iron trim, set inside the
                  Ajameti forest with a private porch onto the trees.
                </p>
                <div className="price">from 240 ₾ / night</div>
                <Link to="/rooms#cottages" className="more">
                  View details →
                </Link>
              </div>
            </Reveal>
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/stable.png")' }}
              />
              <div className="body">
                <h3>Stable House</h3>
                <p>
                  Rooms above the horses, with riding out at dawn included for
                  guests who want it.
                </p>
                <div className="price">from 195 ₾ / night</div>
                <Link to="/rooms#stable" className="more">
                  View details →
                </Link>
              </div>
            </Reveal>
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/grove.png")' }}
              />
              <div className="body">
                <h3>Grove Cabins</h3>
                <p>
                  Set back among the trees, lamp-lit after dark, built for
                  guests who want distance.
                </p>
                <div className="price">from 150 ₾ / night</div>
                <Link to="/rooms#grove" className="more">
                  View details →
                </Link>
              </div>
            </Reveal>
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
              <span className="eyebrow">The grounds</span>
              <h2>A pool, a private lake, and 120 hectares to explore</h2>
              <p>
                The main house looks out over a swimming pool and an
                artificial lake where guests go boating and fishing.
                Basketball and volleyball courts, a working wine cellar, and
                even a small snail farm round out the estate.
              </p>
              <Link to="/about" className="btn btn-outline">
                More about the estate
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
              <span className="eyebrow">After dark</span>
              <h2>Evenings are slower in the forest</h2>
              <p>
                No streetlights, no traffic — just lamplight through the
                Ajameti trees. Bar and restaurant on site, with wine from the
                estate's own cellar.
              </p>
              <Link to="/rooms" className="btn btn-outline">
                See all rooms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">On the estate</span>
            <h2>More than a place to sleep</h2>
            <p>
              An indoor pool for cooler days, a long table for private
              dinners, and a glass of the estate's own wine at sunset.
            </p>
          </Reveal>
          <div className="grid-3">
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/pool-indoor-2.png")' }}
              />
              <div className="body">
                <h3>The indoor pool</h3>
                <p>
                  Arched brick windows and chandeliers over a heated pool,
                  open year-round regardless of weather.
                </p>
              </div>
            </Reveal>
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/dining-hall.png")' }}
              />
              <div className="body">
                <h3>Wine cellar &amp; dining</h3>
                <p>
                  Long-table dinners by the fire, poured from the estate's own
                  cellar — set up for groups on request.
                </p>
              </div>
            </Reveal>
            <Reveal className="tile">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/toast.png")' }}
              />
              <div className="body">
                <h3>Evenings by the lake</h3>
                <p>
                  Wine tastings and gatherings on the grass at sunset, with
                  the lake just behind.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Ready when you are</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
                margin: "14px 0 26px",
              }}
            >
              Check dates, see prices, and reserve in a few minutes.
            </h2>
            <Link to="/booking" className="btn btn-primary">
              Start booking
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
