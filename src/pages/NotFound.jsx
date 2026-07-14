import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <div className="wrap" style={{ textAlign: "center", padding: "60px 0" }}>
        <span className="eyebrow">404</span>
        <h1 style={{ fontStyle: "italic", margin: "16px 0 24px" }}>
          This path doesn't exist
        </h1>
        <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
          The page you're looking for isn't here — try one of the links
          below.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
