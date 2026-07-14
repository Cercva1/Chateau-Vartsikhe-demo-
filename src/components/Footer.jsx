import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              Chateau Vartsikhe<span>.</span>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 280 }}>
              A forest estate in Imereti, 15 minutes from Kutaisi — cottages, a
              stable house, and cabins by the lake.
            </p>
          </div>
          <div className="col">
            <h4>Explore</h4>
            <Link to="/rooms">Rooms</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <Link to="/contact">Get in touch</Link>
            <a href="tel:+995558333393">+995 558 33 33 93</a>
            <a href="mailto:info@chateauvartsikhe.ge">
              info@chateauvartsikhe.ge
            </a>
          </div>
          <div className="col">
            <h4>Booking</h4>
            <p>Payments via Bank of Georgia / TBC secure checkout.</p>
            <p>GEL · USD · EUR</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Chateau Vartsikhe · registration no. on file</span>
          <span>© 2026 Chateau Vartsikhe</span>
        </div>
      </div>
    </footer>
  );
}
