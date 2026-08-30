import { useState } from "react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

// All available photos — real room photos + estate photos already in assets.
// Once the client provides more photos, just add them to this array.
const ALL_PHOTOS = [
  {
    src: "/assets/rooms/stone-house-1.jpg",
    category: "rooms",
    alt: "Stone House #1",
  },
  { src: "/assets/rooms/lake-house.jpg", category: "rooms", alt: "Lake House" },
  {
    src: "/assets/rooms/shushabandi-house.jpg",
    category: "rooms",
    alt: "Shushabandi House",
  },
  {
    src: "/assets/rooms/vineyard-house.jpg",
    category: "rooms",
    alt: "House on the Vineyard",
  },
  {
    src: "/assets/rooms/otskhanuri-villa.jpg",
    category: "estate",
    alt: "Otskhanuri Villa",
  },
  {
    src: "/assets/rooms/stone-house-2.jpg",
    category: "rooms",
    alt: "Stone House #2",
  },
  { src: "/assets/rooms/oda-house.jpg", category: "rooms", alt: "Oda House" },
  {
    src: "/assets/rooms/family-forest-cottage.jpg",
    category: "rooms",
    alt: "Family Forest Cottage",
  },
  {
    src: "/assets/rooms/forest-chalet.jpg",
    category: "nature",
    alt: "Forest Chalet",
  },
  {
    src: "/assets/rooms/forest-cabin.jpg",
    category: "nature",
    alt: "Forest Cabin",
  },
  { src: "/assets/rooms/dome.jpg", category: "nature", alt: "Glamping Dome" },
  { src: "/assets/rooms/lux.jpg", category: "rooms", alt: "Lux Room" },
  { src: "/assets/pool-outdoor.png", category: "estate", alt: "Outdoor Pool" },
  { src: "/assets/pool-indoor-1.png", category: "estate", alt: "Indoor Pool" },
  { src: "/assets/pool-indoor-2.png", category: "estate", alt: "Indoor Pool" },
  { src: "/assets/toast.png", category: "dining", alt: "Evening by the lake" },
  { src: "/assets/dining-hall.png", category: "dining", alt: "Dining Hall" },
];

const FILTERS = {
  en: [
    { key: "all", label: "All" },
    { key: "rooms", label: "Rooms & Cottages" },
    { key: "estate", label: "Estate & Pools" },
    { key: "nature", label: "Nature" },
    { key: "dining", label: "Dining & Events" },
  ],
  ka: [
    { key: "all", label: "ყველა" },
    { key: "rooms", label: "ოთახები და კოტეჯები" },
    { key: "estate", label: "ტერიტორია და აუზები" },
    { key: "nature", label: "ბუნება" },
    { key: "dining", label: "კვება და ღონისძიებები" },
  ],
};

const content = {
  en: {
    eyebrow: "A glimpse",
    heading: "Gallery",
    note: "More photos coming soon.",
    lightboxClose: "Close",
  },
  ka: {
    eyebrow: "ერთი გახედვა",
    heading: "გალერეა",
    note: "მალე მეტი ფოტო დაემატება.",
    lightboxClose: "დახურვა",
  },
};

export default function Gallery() {
  const { locale } = useLanguage();
  const t = content[locale];
  const filters = FILTERS[locale];
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null); // index of open photo

  const visible =
    active === "all"
      ? ALL_PHOTOS
      : ALL_PHOTOS.filter((p) => p.category === active);

  function prev() {
    setLightbox((i) => (i - 1 + visible.length) % visible.length);
  }
  function next() {
    setLightbox((i) => (i + 1) % visible.length);
  }

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/rooms/vineyard-house.jpg")',
          minHeight: "34vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.heading}</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          {/* Filter bar */}
          <Reveal>
            <div className="gallery-filters">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={`gallery-filter-btn${active === f.key ? " active" : ""}`}
                  onClick={() => {
                    setActive(f.key);
                    setLightbox(null);
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-style grid */}
          <div className="gallery-grid">
            {visible.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                className="gallery-item"
                onClick={() => setLightbox(i)}
                aria-label={photo.alt}
              >
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url("${photo.src}")` }}
                />
              </button>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "var(--ink-soft)",
              marginTop: 40,
              fontSize: "0.9rem",
            }}
          >
            {t.note}
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <img
            src={visible[lightbox].src}
            alt={visible[lightbox].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
