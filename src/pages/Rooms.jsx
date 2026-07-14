import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Rooms() {
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
          <span className="eyebrow">All room types</span>
          <h1>Four ways to stay at Chateau Vartsikhe</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="rooms-list">
            <Reveal as="div" className="room-card" id="cottages">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/cottages.png")' }}
              />
              <div className="body">
                <span className="eyebrow">01 — Veranda Cottages</span>
                <h3>The Veranda Cottages</h3>
                <p>
                  Three timber houses on stilts, laced in cast-iron trim the
                  colour of an evening sky, set inside the Ajameti forest.
                  Each keeps its own porch and its own quiet.
                </p>
                <div className="facts">
                  <span>Sleeps 2–3</span>
                  <span>32 m²</span>
                  <span>1 double bed</span>
                  <span>Private porch</span>
                </div>
                <div className="price-row">
                  <div className="price">
                    240 ₾ <small>/ night, Cottage I–II</small>
                  </div>
                  <Link to="/booking?room=cottage" className="btn btn-primary">
                    Reserve
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="room-card reverse" id="stable">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/stable.png")' }}
              />
              <div className="body">
                <span className="eyebrow">02 — Stable House</span>
                <h3>The Stable House</h3>
                <p>
                  Above the horses, four rooms with the same dark timber and
                  tall shutters. Ride out before the field wakes, or don't —
                  the horses are patient.
                </p>
                <div className="facts">
                  <span>Sleeps 2–3</span>
                  <span>28 m²</span>
                  <span>Twin or double</span>
                  <span>Riding on request</span>
                </div>
                <div className="price-row">
                  <div className="price">
                    195 ₾ <small>/ night, Loft</small>
                  </div>
                  <Link to="/booking?room=stable" className="btn btn-primary">
                    Reserve
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="room-card" id="grove">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/grove.png")' }}
              />
              <div className="body">
                <span className="eyebrow">03 — Grove Cabins</span>
                <h3>The Grove Cabins</h3>
                <p>
                  Set back in the trees, lit only by lamplight after nine.
                  The furthest thing from the road on the whole property.
                </p>
                <div className="facts">
                  <span>Sleeps 1–2</span>
                  <span>22 m²</span>
                  <span>Single or twin</span>
                  <span>Wood-lit terrace</span>
                </div>
                <div className="price-row">
                  <div className="price">
                    150 ₾ <small>/ night, single</small>
                  </div>
                  <Link to="/booking?room=grove" className="btn btn-primary">
                    Reserve
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="room-card reverse" id="main-house">
              <div
                className="img"
                style={{ backgroundImage: 'url("/assets/bedroom-suite.png")' }}
              />
              <div className="body">
                <span className="eyebrow">04 — Main House Suites</span>
                <h3>The Main House</h3>
                <p>
                  Upstairs rooms in the stone-and-timber main building,
                  closest to the pool and the breakfast terrace, for guests
                  who want to be in the middle of things.
                </p>
                <div className="facts">
                  <span>Sleeps 2–4</span>
                  <span>40 m²</span>
                  <span>Balcony</span>
                  <span>Pool view</span>
                </div>
                <div className="mini-gallery">
                  <div
                    className="mini-shot"
                    style={{ backgroundImage: 'url("/assets/bathroom.png")' }}
                  />
                  <span className="mini-label">
                    Ensuite bathroom with freestanding tub
                  </span>
                </div>
                <div className="price-row">
                  <div className="price">
                    310 ₾ <small>/ night, suite</small>
                  </div>
                  <Link to="/booking?room=main" className="btn btn-primary">
                    Reserve
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Not sure which fits</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)",
                margin: "14px 0 26px",
              }}
            >
              Tell us your dates — we'll suggest a room.
            </h2>
            <Link to="/booking" className="btn btn-primary">
              Go to booking
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
