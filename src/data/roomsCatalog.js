// Single source of truth for room data, shared between the Rooms listing
// page and the per-room detail page. Text/translations live in
// src/i18n/rooms.js, matched to this array by index — keep both in sync if
// you add/remove/reorder a room.
//
// otelmsUrl: OtelMS's booking engine handles room selection client-side —
// confirmed the URL never changes between room types even though the page
// content does. So per-room deep links aren't achievable with their system;
// every room reserves through this same general page instead.
const OTELMS_BOOKING_URL = "https://booking-114241.otelms.com/booking/rooms";

export const CARDS = [
  {
    id: "cottages",
    anchor: "cottages",
    img: "/assets/cottages.png",
    price: 240,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "stable",
    anchor: "stable",
    img: "/assets/stable.png",
    price: 195,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "grove",
    anchor: "grove",
    img: "/assets/grove.png",
    price: 150,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "main",
    anchor: "main-house",
    img: "/assets/bedroom-suite.png",
    price: 310,
    miniImg: "/assets/bathroom.png",
    otelmsUrl: OTELMS_BOOKING_URL,
  },
];

export function getCardById(id) {
  return CARDS.find((c) => c.id === id) || null;
}

export function getCardIndexById(id) {
  return CARDS.findIndex((c) => c.id === id);
}
