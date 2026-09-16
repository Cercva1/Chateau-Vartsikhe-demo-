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
    category: "rooms",
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
    category: "rooms",
    alt: "Forest Chalet",
  },
  {
    src: "/assets/rooms/forest-cabin.jpg",
    category: "nature",
    alt: "Forest Cabin",
  },
  { src: "/assets/rooms/dome.jpg", category: "nature", alt: "Glamping Dome" },
  { src: "/assets/rooms/lux.jpg", category: "rooms", alt: "Lux Room" },

  // Estate, pools & grounds (from the September 2026 photo shoot)
  {
    src: "/assets/photos/estate/aerial-estate-overview.jpg",
    category: "estate",
    alt: "Aerial view of the estate and vineyards",
  },
  {
    src: "/assets/photos/estate/aerial-terrace-dining-1.jpg",
    category: "estate",
    alt: "Aerial view of the main house terrace",
  },
  {
    src: "/assets/photos/pool/aerial-outdoor-pool-2.jpg",
    category: "pool",
    alt: "Aerial view of the outdoor pool",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-pergola-1.jpg",
    category: "pool",
    alt: "Outdoor pool with pergola",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-flags-1.jpg",
    category: "pool",
    alt: "Outdoor pool loungers",
  },
  {
    src: "/assets/photos/estate/aerial-terrace-dining-2.jpg",
    category: "estate",
    alt: "Aerial view of the terrace among the vines",
  },
  {
    src: "/assets/photos/estate/aerial-terrace-dining-3.jpg",
    category: "estate",
    alt: "Aerial view of the terrace restaurant",
  },
  {
    src: "/assets/photos/estate/aerial-vineyard-house.jpg",
    category: "estate",
    alt: "Aerial view of the main house and vineyard",
  },
  {
    src: "/assets/photos/estate/aerial-grove-building.jpg",
    category: "estate",
    alt: "Aerial view of the grove building",
  },
  {
    src: "/assets/photos/estate/aerial-veranda-building.jpg",
    category: "estate",
    alt: "Aerial view of the veranda building",
  },
  {
    src: "/assets/photos/estate/roof-tile-detail.jpg",
    category: "estate",
    alt: "Terracotta roof tile detail",
  },
  {
    src: "/assets/photos/estate/garden-gate.jpg",
    category: "estate",
    alt: "Garden gate",
  },
  {
    src: "/assets/photos/estate/stone-cottage-exterior.jpg",
    category: "estate",
    alt: "Stone cottage exterior",
  },
  {
    src: "/assets/photos/estate/garden-cottage-exterior.jpg",
    category: "estate",
    alt: "Garden cottage exterior",
  },
  {
    src: "/assets/photos/estate/barn-sunset.jpg",
    category: "estate",
    alt: "The estate at sunset",
  },
  {
    src: "/assets/photos/pool/aerial-outdoor-pool-1.jpg",
    category: "pool",
    alt: "Aerial view of the outdoor pool",
  },
  {
    src: "/assets/photos/pool/aerial-outdoor-pool-top.jpg",
    category: "pool",
    alt: "Aerial view of the outdoor pool from above",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-view-1.jpg",
    category: "pool",
    alt: "View across the outdoor pool",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-view-2.jpg",
    category: "pool",
    alt: "View across the outdoor pool",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-wide-1.jpg",
    category: "pool",
    alt: "Outdoor pool with umbrellas",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-flags-2.jpg",
    category: "pool",
    alt: "Outdoor pool with flags",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-wide-2.jpg",
    category: "pool",
    alt: "Outdoor pool, wide view",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-pergola-2.jpg",
    category: "pool",
    alt: "Outdoor pool with pergola",
  },
  {
    src: "/assets/photos/pool/outdoor-pool-loungers.jpg",
    category: "pool",
    alt: "Outdoor pool loungers",
  },

  // Nature & grounds
  {
    src: "/assets/photos/nature/forest-path.jpg",
    category: "nature",
    alt: "Path through the Ajameti forest",
  },
  {
    src: "/assets/photos/nature/forest-group-gathering.jpg",
    category: "nature",
    alt: "Gathering in the forest",
  },

  // Dining
  {
    src: "/assets/photos/dining/veranda-dining-1.jpg",
    category: "dining",
    alt: "Dining on the veranda",
  },
  {
    src: "/assets/photos/dining/veranda-dining-2.jpg",
    category: "dining",
    alt: "Dining on the veranda",
  },
  {
    src: "/assets/photos/dining/veranda-dining-bright.jpg",
    category: "dining",
    alt: "Dining on the veranda",
  },
  {
    src: "/assets/photos/dining/veranda-dining-golden-hour.jpg",
    category: "dining",
    alt: "Evening dining on the veranda",
  },
  {
    src: "/assets/photos/dining/veranda-dining-group.jpg",
    category: "dining",
    alt: "Guests dining on the veranda",
  },

  // Wellness & spa
  {
    src: "/assets/photos/wellness/spa-relaxation.jpg",
    category: "wellness",
    alt: "Spa and wellness at Chateau Vartsikhe",
  },
  {
    src: "/assets/photos/pool/indoor-pool-conservatory.jpg",
    category: "pool",
    alt: "Indoor pool in the glass conservatory",
  },
  {
    src: "/assets/photos/pool/indoor-pool-leisure.jpg",
    category: "pool",
    alt: "Poolside leisure",
  },

  // Activities
  {
    src: "/assets/photos/activities/horse-riding.jpg",
    category: "activities",
    alt: "Horse riding at the estate",
  },
  {
    src: "/assets/photos/activities/aerial-padel-court.jpg",
    category: "activities",
    alt: "Aerial view of the padel court",
  },
  {
    src: "/assets/photos/activities/padel-court-detail.jpg",
    category: "activities",
    alt: "Padel court",
  },

  // Events & weddings
  {
    src: "/assets/photos/events/wedding-arch-couple.jpg",
    category: "events",
    alt: "Wedding ceremony at Chateau Vartsikhe",
  },
  {
    src: "/assets/photos/events/wedding-ceremony-aisle.jpg",
    category: "events",
    alt: "Wedding ceremony aisle in the forest clearing",
  },
  {
    src: "/assets/photos/events/wedding-couple-ceremony.jpg",
    category: "events",
    alt: "Bride and groom during the ceremony",
  },
  {
    src: "/assets/photos/events/wedding-aisle-flowers.jpg",
    category: "events",
    alt: "Wedding aisle with flowers",
  },
  {
    src: "/assets/photos/events/wedding-aisle-petals.jpg",
    category: "events",
    alt: "Wedding aisle with flower petals",
  },
  {
    src: "/assets/photos/events/wedding-musicians.jpg",
    category: "events",
    alt: "Musicians performing at a wedding",
  },
  {
    src: "/assets/photos/events/wedding-guests.jpg",
    category: "events",
    alt: "Wedding guests",
  },
  {
    src: "/assets/photos/events/couple-countryside.jpg",
    category: "events",
    alt: "Couple on the estate grounds",
  },
  {
    src: "/assets/photos/events/aerial-wedding-marquee.jpg",
    category: "events",
    alt: "Aerial view of a wedding marquee",
  },
  {
    src: "/assets/photos/events/aerial-wedding-marquee-setup.jpg",
    category: "events",
    alt: "Aerial view of a wedding setup",
  },
  {
    src: "/assets/photos/events/banquet-hall-1.jpg",
    category: "events",
    alt: "Banquet hall set for a reception",
  },
  {
    src: "/assets/photos/events/banquet-hall-2.jpg",
    category: "events",
    alt: "Banquet hall set for a reception",
  },
  {
    src: "/assets/photos/events/banquet-detail.jpg",
    category: "events",
    alt: "Reception decor detail",
  },
  {
    src: "/assets/photos/events/evening-reception-1.jpg",
    category: "events",
    alt: "Evening reception under string lights",
  },
  {
    src: "/assets/photos/events/evening-reception-2.jpg",
    category: "events",
    alt: "Evening reception under string lights",
  },
  {
    src: "/assets/photos/events/catering-prep.jpg",
    category: "events",
    alt: "Catering staff preparing an event",
  },
  {
    src: "/assets/photos/events/vineyard-picnic.jpg",
    category: "events",
    alt: "Picnic among the vines",
  },
];

const FILTERS = {
  en: [
    { key: "all", label: "All" },
    { key: "rooms", label: "Rooms & Cottages" },
    { key: "estate", label: "Estate" },
    { key: "pool", label: "Pool" },
    { key: "nature", label: "Nature" },
    { key: "dining", label: "Dining" },
    { key: "wellness", label: "Wellness" },
    { key: "activities", label: "Activities" },
    { key: "events", label: "Events & Weddings" },
  ],
  ka: [
    { key: "all", label: "ყველა" },
    { key: "rooms", label: "ოთახები და კოტეჯები" },
    { key: "estate", label: "ტერიტორია" },
    { key: "pool", label: "აუზი" },
    { key: "nature", label: "ბუნება" },
    { key: "dining", label: "კვება" },
    { key: "wellness", label: "ველნესი" },
    { key: "activities", label: "აქტივობები" },
    { key: "events", label: "ღონისძიებები და ქორწილები" },
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
