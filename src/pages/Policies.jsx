import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Policies() {
  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/stable.png")',
          minHeight: "34vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">Before you book</span>
          <h1>House policies</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="policy-grid">
            <Reveal className="policy-card">
              <h3>Check-in &amp; check-out</h3>
              <ul>
                <li>Check-in from 14:00, front desk at the Main House</li>
                <li>Check-out by 11:00</li>
                <li>
                  Early check-in / late check-out on request, subject to
                  availability
                </li>
                <li>Self check-in available for Grove Cabins after 22:00</li>
              </ul>
            </Reveal>

            <Reveal className="policy-card">
              <h3>Cancellation</h3>
              <ul>
                <li>Free cancellation up to 48 hours before arrival</li>
                <li>Inside 48 hours: first night is non-refundable</li>
                <li>No-shows forfeit the full deposit</li>
                <li>Changes to dates are free once, subject to availability</li>
              </ul>
            </Reveal>

            <Reveal className="policy-card">
              <h3>Payment &amp; deposit</h3>
              <ul>
                <li>30% deposit confirms your booking, paid by card</li>
                <li>Balance due at check-in, card or cash (GEL)</li>
                <li>Processed securely via Bank of Georgia / TBC</li>
                <li>Prices shown in GEL; USD/EUR available at checkout</li>
              </ul>
            </Reveal>

            <Reveal className="policy-card">
              <h3>Stay length &amp; occupancy</h3>
              <ul>
                <li>2-night minimum on weekends (Fri–Sun)</li>
                <li>Extra-guest fee applies above listed room occupancy</li>
                <li>Children under 5 stay free in existing bedding</li>
                <li>Pets welcome in Grove Cabins only, on request</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ maxWidth: 700, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Questions</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                margin: "14px 0 22px",
              }}
            >
              Anything not covered here?
            </h2>
            <Link to="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
