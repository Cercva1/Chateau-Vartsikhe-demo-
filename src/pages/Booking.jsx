import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { rooms, getRoomById } from "../data/rooms";

function nightsBetween(arriveStr, departStr) {
  if (!arriveStr || !departStr) return 0;
  const arrive = new Date(arriveStr);
  const depart = new Date(departStr);
  const diffMs = depart - arrive;
  if (!Number.isFinite(diffMs) || diffMs <= 0) return 0;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export default function Booking() {
  const [searchParams] = useSearchParams();
  const initialRoom = searchParams.get("room");

  const [arrive, setArrive] = useState("");
  const [depart, setDepart] = useState("");
  const [roomId, setRoomId] = useState(
    rooms.some((r) => r.id === initialRoom) ? initialRoom : rooms[0].id,
  );
  const [guests, setGuests] = useState("1 adult");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const room = getRoomById(roomId);
  const nights = nightsBetween(arrive, depart);
  const hasDates = nights > 0;
  const subtotal = hasDates ? room.price * nights : room.price;
  const extraGuestFee = 0;
  const deposit = Math.round((subtotal + extraGuestFee) * 0.3);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/pool-indoor-1.png")',
          minHeight: "34vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">Check availability</span>
          <h1>Reserve your stay</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="booking-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="arrive">Arrival</label>
                  <input
                    id="arrive"
                    type="date"
                    required
                    value={arrive}
                    onChange={(e) => setArrive(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="depart">Departure</label>
                  <input
                    id="depart"
                    type="date"
                    required
                    value={depart}
                    min={arrive || undefined}
                    onChange={(e) => setDepart(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="room">Room</label>
                  <select
                    id="room"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {r.price} ₾/night
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="guests">Guests</label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option>1 adult</option>
                    <option>2 adults</option>
                    <option>2 adults, 1 child</option>
                    <option>3+ guests</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="As on your ID"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+995 5__ __ __ __"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="field full">
                  <label htmlFor="notes">Notes (optional)</label>
                  <textarea
                    id="notes"
                    placeholder="Arrival time, dietary notes, requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="price-breakdown">
                <div className="row">
                  <span>
                    Room rate × {hasDates ? nights : 1}{" "}
                    {hasDates && nights === 1 ? "night" : "nights"}
                    {!hasDates && " (select dates for exact total)"}
                  </span>
                  <span>{subtotal} ₾</span>
                </div>
                <div className="row">
                  <span>Extra-guest fee</span>
                  <span>{extraGuestFee} ₾</span>
                </div>
                <div className="row">
                  <span>Deposit due today (30%)</span>
                  <span>{deposit} ₾</span>
                </div>
                <div className="row total">
                  <span>Total for stay</span>
                  <span>{subtotal + extraGuestFee} ₾</span>
                </div>
              </div>

              <div className="submit-row">
                <button type="submit" className="btn btn-primary">
                  Continue to payment
                </button>
              </div>
              <div className={`confirm-msg${submitted ? " show" : ""}`}>
                Thank you — you'll be redirected to secure payment (Bank of
                Georgia / TBC) to confirm your deposit.
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Good to know</span>
            <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>
              Free cancellation up to 48 hours before arrival. A 30% deposit
              confirms your booking; the balance is due at check-in. See our{" "}
              <Link
                to="/policies"
                style={{
                  color: "var(--forest-deep)",
                  borderBottom: "1px solid var(--forest-deep)",
                }}
              >
                full policies
              </Link>{" "}
              for details.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
