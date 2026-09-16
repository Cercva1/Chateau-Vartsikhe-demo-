import { useEffect, useState } from "react";

export default function Slideshow({ images, interval = 4000, className = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`slideshow ${className}`.trim()}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
    </div>
  );
}
