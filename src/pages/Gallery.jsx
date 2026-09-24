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
  {
    src: "/assets/rooms/lux-bath.jpg",
    category: "rooms",
    alt: "Lux Room bathroom",
  },

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
    src: "/assets/photos/estate/vineyard-porch.jpg",
    category: "estate",
    alt: "Porch overlooking the vineyard",
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
  {
    src: "/assets/photos/pool/indoor-pool-loungers-arches.jpg",
    category: "pool",
    alt: "Indoor pool loungers beneath the brick arches",
  },
  {
    src: "/assets/photos/pool/indoor-pool-ring-float.jpg",
    category: "pool",
    alt: "Indoor pool with a ring float",
    position: "bottom",
  },
  {
    src: "/assets/photos/pool/indoor-pool-cabana.jpg",
    category: "pool",
    alt: "Indoor pool cabana corner",
    position: "bottom",
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
  {
    src: "/assets/photos/nature/forest-boardwalk-cabin.jpg",
    category: "nature",
    alt: "Boardwalk through the forest to a cabin",
  },
  {
    src: "/assets/photos/nature/forest-window-view.jpg",
    category: "nature",
    alt: "Forest view from a cabin window",
  },

  // Dining
  {
    src: "/assets/photos/dining/veranda-dining-2.jpg",
    category: "dining",
    alt: "Dining on the veranda",
  },
  {
    src: "/assets/photos/dining/dessert-plate.jpg",
    category: "dining",
    alt: "Dessert plate with strawberries and meringue",
  },
  {
    src: "/assets/photos/dining/fireplace-decor.jpg",
    category: "dining",
    alt: "Restaurant fireplace decor",
  },
  {
    src: "/assets/photos/dining/cabbage-dish.jpg",
    category: "dining",
    alt: "Plated dish with greens in broth",
  },
  {
    src: "/assets/photos/dining/tasting-plate.jpg",
    category: "dining",
    alt: "Tasting plate with pomegranate and eggplant",
  },
  {
    src: "/assets/photos/dining/carbonara.jpg",
    category: "dining",
    alt: "Pasta with cured meat and parmesan",
  },
  {
    src: "/assets/photos/dining/evening-dinner-lamps.jpg",
    category: "dining",
    alt: "Evening dinner under patterned lamps",
  },
  {
    src: "/assets/photos/dining/terrace-lunch-hats.jpg",
    category: "dining",
    alt: "Guests at a sunlit terrace lunch",
  },

  // Wellness & spa
  {
    src: "/assets/photos/wellness/spa-relaxation.jpg",
    category: "wellness",
    alt: "Spa and wellness at Chateau Vartsikhe",
  },
  {
    src: "/assets/photos/wellness/poolside-games.jpg",
    category: "wellness",
    alt: "Chess and drinks poolside",
  },
  {
    src: "/assets/photos/wellness/sauna-stones.jpg",
    category: "wellness",
    alt: "Sauna heater with stones",
  },
  {
    src: "/assets/photos/wellness/sauna-bucket.jpg",
    category: "wellness",
    alt: "Sauna bucket and ladle",
  },
  {
    src: "/assets/photos/wellness/sauna-porch-view.jpg",
    category: "wellness",
    alt: "Sauna porch overlooking the vineyard",
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
  {
    src: "/assets/photos/activities/lake-rowboat.jpg",
    category: "activities",
    alt: "Rowing on the lake at sunset",
  },
  {
    src: "/assets/photos/activities/lake-dock-sunset.jpg",
    category: "activities",
    alt: "Watching the sunset from the lake dock",
  },
  {
    src: "/assets/photos/activities/outdoor-gym-equipment.jpg",
    category: "activities",
    alt: "Outdoor gym equipment",
  },
  {
    src: "/assets/photos/activities/outdoor-gym-ping-pong.jpg",
    category: "activities",
    alt: "Ping-pong table at the outdoor gym",
  },
  {
    src: "/assets/photos/activities/outdoor-gym-basketball.jpg",
    category: "activities",
    alt: "Basketball hoop at the outdoor gym",
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
  {
    src: "/assets/photos/events/vineyard-picnic-golden.jpg",
    category: "events",
    alt: "Golden-hour dinner among the vines",
  },
  {
    src: "/assets/photos/events/theater-field-2.jpg",
    category: "events",
    alt: "Wedding reception tables on the Theater Field",
  },
  {
    src: "/assets/photos/events/theater-field-3.jpg",
    category: "events",
    alt: "Guests gathering on the Theater Field",
  },
  {
    src: "/assets/photos/events/wedding-walk-wave.jpg",
    category: "events",
    alt: "Newlyweds walking through the field",
  },
  {
    src: "/assets/photos/events/wedding-veil-walk.jpg",
    category: "events",
    alt: "Bride and groom walking past the hay bales",
  },
  {
    src: "/assets/photos/events/reception-guests-table.jpg",
    category: "events",
    alt: "Guests at the reception table",
  },
  {
    src: "/assets/photos/events/first-dance-kiss.jpg",
    category: "events",
    alt: "First dance kiss on the dance floor",
  },
  {
    src: "/assets/photos/events/dance-floor-night-bw.jpg",
    category: "events",
    alt: "Guests dancing at night",
  },
  {
    src: "/assets/photos/events/table-setting-night.jpg",
    category: "events",
    alt: "Table setting at an evening reception",
  },
  {
    src: "/assets/photos/events/theater-dance-floor-bw.jpg",
    category: "events",
    alt: "Dancing under the Theater at night",
  },
  {
    src: "/assets/photos/events/theater-hall.jpg",
    category: "events",
    alt: "The Theater's glass hall set for a wedding",
  },
  {
    src: "/assets/photos/events/theater-field.jpg",
    category: "events",
    alt: "The Theater Field beside the lake",
  },
  {
    src: "/assets/photos/events/forest-venue.jpg",
    category: "events",
    alt: "The Forest Venue lawn",
  },
  {
    src: "/assets/photos/events/multifunctional-venue.jpg",
    category: "events",
    alt: "The Forest Multifunctional Venue",
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
    prevPage: "Previous",
    nextPage: "Next",
    pageOf: (page, total) => `Page ${page} of ${total}`,
  },
  ka: {
    eyebrow: "ერთი გახედვა",
    heading: "გალერეა",
    note: "მალე მეტი ფოტო დაემატება.",
    lightboxClose: "დახურვა",
    prevPage: "წინა",
    nextPage: "შემდეგი",
    pageOf: (page, total) => `გვერდი ${page} / ${total}`,
  },
};

const PAGE_SIZE = 15;

export default function Gallery() {
  const { locale } = useLanguage();
  const t = content[locale];
  const filters = FILTERS[locale];
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState(null); // index within the current page

  const visible =
    active === "all"
      ? ALL_PHOTOS
      : ALL_PHOTOS.filter((p) => p.category === active);

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = visible.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function selectFilter(key) {
    setActive(key);
    setPage(1);
    setLightbox(null);
  }

  function goToPage(p) {
    setPage(p);
    setLightbox(null);
  }

  function prev() {
    setLightbox((i) => (i - 1 + pageItems.length) % pageItems.length);
  }
  function next() {
    setLightbox((i) => (i + 1) % pageItems.length);
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
                  onClick={() => selectFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-style grid */}
          <div className="gallery-grid">
            {pageItems.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                className="gallery-item"
                onClick={() => setLightbox(i)}
                aria-label={photo.alt}
              >
                <div
                  className="gallery-img"
                  style={{
                    backgroundImage: `url("${photo.src}")`,
                    backgroundPosition: photo.position,
                  }}
                />
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="gallery-pager">
              <button
                type="button"
                className="btn btn-outline"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                {t.prevPage}
              </button>
              <span>{t.pageOf(currentPage, totalPages)}</span>
              <button
                type="button"
                className="btn btn-outline"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                {t.nextPage}
              </button>
            </div>
          )}

          <p
            style={{
              textAlign: "center",
              color: "var(--ink-soft)",
              marginTop: 24,
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
            src={pageItems[lightbox].src}
            alt={pageItems[lightbox].alt}
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
