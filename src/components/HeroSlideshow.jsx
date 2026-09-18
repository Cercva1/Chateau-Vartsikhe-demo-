import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/photos/pool/aerial-outdoor-pool-2.jpg",
  "/assets/photos/estate/stone-cottage-exterior.jpg",
  "/assets/photos/pool/indoor-pool-conservatory.jpg",
  "/assets/photos/activities/horse-riding.jpg",
  "/assets/photos/estate/aerial-grove-building.jpg",
  "/assets/photos/estate/aerial-estate-overview.jpg",
];

export default function HeroSlideshow({ taglineNode, scrollLabel = "scroll" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero hero-slideshow">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
      <div className="hero-inner">
        <div className="hero-brand">
          <div className="wordmark">Vartsikhe</div>
          <div className="divider-line"></div>
          <div className="hero-tagline">
            <p>{taglineNode}</p>
          </div>
        </div>
        <a
          href="#after-hero"
          className="scroll-cue"
          onClick={(e) => {
            // HashRouter owns the URL hash, so scroll manually instead of
            // letting the browser treat "#after-hero" as a route.
            e.preventDefault();
            document
              .getElementById("after-hero")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span>{scrollLabel}</span>
          <div className="arrow">↓</div>
        </a>
      </div>
    </section>
  );
}
