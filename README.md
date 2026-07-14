# Chateau Vartsikhe — React version

Converted from the static HTML demo (`Chateau-Vartsikhe-demo-` repo) into a
proper React app (Vite + React Router), with the same design, copy, and
assets — plus a few real bugs fixed along the way.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## What changed from the static HTML version

**Structure**
- Vite + React 19 + React Router 7. One route per old page: `/`, `/rooms`,
  `/booking`, `/policies`, `/about`, `/contact`.
- `src/data/rooms.js` is now the single source of truth for room names,
  prices, and IDs — the Rooms page and Booking page both read from it, so
  they can't drift out of sync the way the old HTML could.
- Added a proper 404 page (`*` route) — the old static site didn't need one
  since every "page" was a real file; an SPA does.
- Added `ScrollManager` to replicate two things browsers give you for free
  with real page loads: scrolling to `#anchor` links (e.g. `/rooms#stable`)
  and resetting scroll position on navigation.

**Real bugs fixed (these were broken in the original HTML/JS, not just
restyled):**
1. **Booking form price breakdown was hardcoded.** It always showed "480 ₾"
   no matter what you picked. Now it actually calculates room rate × nights
   from the real arrival/departure dates, and updates live as you change the
   room or dates.
2. **"Reserve" buttons on the Rooms page didn't work.** Clicking Reserve on
   Stable House / Grove Cabin / Main House linked to
   `booking.html?room=stable` etc., but the booking page never read that
   parameter — the dropdown always defaulted to the first option. Fixed: the
   Room dropdown now correctly pre-selects based on which Reserve button you
   clicked.

**Verified working (automated + visual check — see `check.cjs`):**
- All 6 routes load and render correctly
- All nav links, footer links, and the mobile hamburger menu
- Locale switcher buttons toggle active state
- Home page tiles link to the correct room anchors on the Rooms page
- Hero background slideshow actually advances
- Both forms (booking + contact) show their confirmation message on submit
- Scroll-reveal animations fire correctly
- 404 fallback works for unmatched routes

Re-run the check yourself anytime with:
```bash
npm run build && npm run preview -- --port 4173 --host &
node check.cjs
```

## Known limitations carried over from the demo (not fixed, by design)

- **Language switcher (EN/KA/RU) is visual only.** Clicking KA or RU
  highlights the button but doesn't translate any content — there's no
  translated copy yet. Real i18n is a separate content task, not a bug fix.
- **Booking and Contact forms don't send anywhere.** They show a confirmation
  message client-side only, same as the original demo. No backend/email
  wiring yet.
- **Extra-guest fee is still hardcoded at 0 ₾** — the original never had
  real logic for this either, and no fee schedule has been specified yet.

## Bigger open question (not a bug — a content/architecture decision)

The room names and prices used throughout this demo (Veranda Cottage 240₾,
Stable House 195₾, Grove Cabin 150₾, Main House Suite 310₾) are **not** the
actual bookable inventory confirmed directly from the OtelMS booking engine
(Lux 450₾, Family Cottage, Forest Cottage, Big Forest Cottage, Qaravani,
Glamping, Stone Cottage). These should be reconciled before this goes near
the client or production — happy to do that pass once you've decided how to
handle it.

Separately: once OtelMS's payment integration is confirmed working, the
Booking page's custom form will very likely need to become a "Book Now"
button that redirects to the real OtelMS booking page
(`booking-114241.otelms.com/booking/rooms`) instead of collecting details
itself. Kept the current form fully functional in the meantime since that
part is still pending confirmation.
