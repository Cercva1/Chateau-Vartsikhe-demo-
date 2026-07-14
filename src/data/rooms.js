// Single source of truth for room types, pricing, and select-option labels.
// Used by both the Rooms page and the Booking page so they can never drift
// out of sync with each other (they did in the static HTML version).
export const rooms = [
  {
    id: "cottage",
    name: "Veranda Cottage",
    unitLabel: "Cottage I–II",
    price: 240,
  },
  {
    id: "stable",
    name: "Stable House",
    unitLabel: "Loft",
    price: 195,
  },
  {
    id: "grove",
    name: "Grove Cabin",
    unitLabel: "single",
    price: 150,
  },
  {
    id: "main",
    name: "Main House Suite",
    unitLabel: "suite",
    price: 310,
  },
];

export function getRoomById(id) {
  return rooms.find((r) => r.id === id) || rooms[0];
}
