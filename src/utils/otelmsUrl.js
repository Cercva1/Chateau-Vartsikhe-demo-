// Builds the URL a guest lands on when they click "Reserve" for a specific
// room, carrying over the dates/guests they already picked on our site.
//
// ⚠️ UNCONFIRMED: the exact query-parameter names below (checkin, checkout,
// adults) are a best guess based on convention — every booking-engine vendor
// invents its own scheme (Cloudbeds uses checkin/checkout/adults, innRoad
// uses a JSON blob in the URL hash, Bookinglayer uses guest/start/end — no
// standard exists), and OtelMS has no public documentation for theirs.
//
// TO CONFIRM: go to https://booking-114241.otelms.com/booking/rooms,
// manually pick a check-in date, check-out date, and guest count, then copy
// the resulting URL from the address bar. Whatever parameter names show up
// there go in PARAM_NAMES below — that's the only line that needs to change.
const PARAM_NAMES = {
  checkIn: "checkin",
  checkOut: "checkout",
  guests: "adults",
};

function formatDate(date) {
  // yyyy-mm-dd — the one near-universal convention across every booking
  // engine's URL scheme, so kept as-is even though the param name might differ.
  if (!date) return null;
  return date;
}

/**
 * @param {string} baseUrl - the room-specific (or general) OtelMS URL
 * @param {{checkIn?: string, checkOut?: string, guests?: number}} search
 * @returns {string} baseUrl with search params appended, or baseUrl unchanged
 *   if no dates/guests were picked yet (degrades gracefully rather than
 *   sending a broken/empty query string).
 */
export function buildReserveUrl(baseUrl, { checkIn, checkOut, guests } = {}) {
  const params = new URLSearchParams();

  const inDate = formatDate(checkIn);
  const outDate = formatDate(checkOut);

  if (inDate) params.set(PARAM_NAMES.checkIn, inDate);
  if (outDate) params.set(PARAM_NAMES.checkOut, outDate);
  if (guests) params.set(PARAM_NAMES.guests, String(guests));

  const query = params.toString();
  if (!query) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${query}`;
}
