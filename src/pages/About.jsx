import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function About() {
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
          <span className="eyebrow">Our story</span>
          <h1>Comfort meets elegance</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="split">
            <img
              src="/assets/cottages.png"
              alt="Veranda cottages at Chateau Vartsikhe"
            />
            <div>
              <span className="eyebrow">Where we are</span>
              <h2>In the heart of Imereti</h2>
              <p>
                Chateau Vartsikhe sits fifteen minutes from Kutaisi, spread
                across roughly 120 hectares of forest and open land. Modern
                infrastructure meets the Ajameti forest around it, so the
                grounds still feel wild even with a pool, courts, and a
                working cellar close by.
              </p>
              <p>
                Guests move through several distinct spaces on the property,
                each with its own mood — from the timber cottages among the
                trees to the open lawns near the main house.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal className="split reverse">
            <img
              src="/assets/stable.png"
              alt="Horses at the Chateau Vartsikhe stable"
            />
            <div>
              <span className="eyebrow">On the grounds</span>
              <h2>A lake, a cellar, and a snail farm</h2>
              <p>
                Alongside the Veranda Cottages, the Stable House, the Grove
                Cabins, and the Main House, the estate has a swimming pool, an
                artificial lake for boating and fishing, basketball and
                volleyball courts, a wine cellar producing its own vintage, a
                small snail farm, and a bar and restaurant on site.
              </p>
              <Link to="/rooms" className="btn btn-outline">
                See the rooms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="split">
            <img
              src="/assets/toast.png"
              alt="Guests toasting wine by the lake at sunset"
            />
            <div>
              <span className="eyebrow">Guests, mostly</span>
              <h2>Evenings tend to end by the water</h2>
              <p>
                Wine from the estate's own cellar, poured at sunset with the
                lake behind — the kind of evening most guests remember longer
                than the room they stayed in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Legal information</span>
            <h2>The formal part</h2>
          </Reveal>
          <Reveal className="legal-box">
            <div>
              <strong>Legal name</strong>
              Chateau Vartsikhe
            </div>
            <div>
              <strong>Registration number</strong>
              on file — provided at request
            </div>
            <div>
              <strong>Registered address</strong>
              Imereti region, near Kutaisi, Georgia
            </div>
            <div>
              <strong>Contact</strong>
              info@chateauvartsikhe.ge · +995 558 33 33 93
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
