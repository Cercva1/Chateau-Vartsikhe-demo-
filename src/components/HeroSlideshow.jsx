import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/pool-outdoor.png",
  "/assets/cottages.png",
  "/assets/pool-indoor-1.png",
  "/assets/stable.png",
  "/assets/grove.png",
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
        <a href="#after-hero" className="scroll-cue">
          <span>{scrollLabel}</span>
          <div className="arrow">↓</div>
        </a>
      </div>
    </section>
  );
}
