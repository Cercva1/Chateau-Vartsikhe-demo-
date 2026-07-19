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

// price: nightly rate WITHOUT breakfast. priceWithBreakfast: nightly rate
// WITH breakfast included. Both from the client's official rate sheet
// (General_Offer-AI deck). Note: Lake House's two numbers were reversed in
// the source deck (breakfast showed as cheaper, which isn't right anywhere
// else) — corrected here per the client's confirmation.
export const CARDS = [
  {
    id: "stone-house-1",
    anchor: "stone-house-1",
    img: "/assets/rooms/stone-house-1.jpg",
    price: 550,
    priceWithBreakfast: 690,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "lake-house",
    anchor: "lake-house",
    img: "/assets/rooms/lake-house.jpg",
    price: 710,
    priceWithBreakfast: 850,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "shushabandi-house",
    anchor: "shushabandi-house",
    img: "/assets/rooms/shushabandi-house.jpg",
    price: 550,
    priceWithBreakfast: 690,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "vineyard-house",
    anchor: "vineyard-house",
    img: "/assets/rooms/vineyard-house.jpg",
    price: 550,
    priceWithBreakfast: 690,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "otskhanuri-villa",
    anchor: "otskhanuri-villa",
    img: "/assets/rooms/otskhanuri-villa.jpg",
    price: 810,
    priceWithBreakfast: 950,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "stone-house-2",
    anchor: "stone-house-2",
    img: "/assets/rooms/stone-house-2.jpg",
    price: 550,
    priceWithBreakfast: 690,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "oda-house",
    anchor: "oda-house",
    img: "/assets/rooms/oda-house.jpg",
    price: 450,
    priceWithBreakfast: 590,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "family-forest-cottage",
    anchor: "family-forest-cottage",
    img: "/assets/rooms/family-forest-cottage.jpg",
    price: 450,
    priceWithBreakfast: 590,
    maxGuests: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "forest-chalet",
    anchor: "forest-chalet",
    img: "/assets/rooms/forest-chalet.jpg",
    price: 280,
    priceWithBreakfast: 350,
    maxGuests: 2,
    units: 2,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "forest-cabin",
    anchor: "forest-cabin",
    img: "/assets/rooms/forest-cabin.jpg",
    price: 280,
    priceWithBreakfast: 350,
    maxGuests: 2,
    units: 2,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "dome",
    anchor: "dome",
    img: "/assets/rooms/dome.jpg",
    price: 280,
    priceWithBreakfast: 350,
    maxGuests: 2,
    units: 2,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
  {
    id: "lux",
    anchor: "lux",
    img: "/assets/rooms/lux.jpg",
    price: 390,
    priceWithBreakfast: 460,
    maxGuests: 2,
    units: 4,
    otelmsUrl: OTELMS_BOOKING_URL,
  },
];

export function getCardById(id) {
  return CARDS.find((c) => c.id === id) || null;
}

export function getCardIndexById(id) {
  return CARDS.findIndex((c) => c.id === id);
}
