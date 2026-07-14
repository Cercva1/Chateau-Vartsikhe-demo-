import { useState } from "react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/grove.png")',
          minHeight: "32vh",
        }}
      >
        <div className="wrap">
          <span className="eyebrow">We're around</span>
          <h1>Get in touch</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="item">
                <span className="eyebrow">Address</span>
                <p>
                  Chateau Vartsikhe
                  <br />
                  Imereti region, 15 minutes from Kutaisi, Georgia
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">Phone</span>
                <p>
                  <a href="tel:+995558333393">+995 558 33 33 93</a>
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">Email</span>
                <p>
                  <a href="mailto:info@chateauvartsikhe.ge">
                    info@chateauvartsikhe.ge
                  </a>
                </p>
              </div>
              <div className="item">
                <span className="eyebrow">Front desk hours</span>
                <p>
                  08:00 – 22:00 daily. Grove Cabin guests may self check-in
                  later.
                </p>
              </div>
            </Reveal>

            <Reveal as="form" onSubmit={handleSubmit}>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  type="text"
                  placeholder="Full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  placeholder="How can we help?"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
              <div className={`confirm-msg${submitted ? " show" : ""}`}>
                Thanks — we usually reply within a day.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
