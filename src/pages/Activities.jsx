import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Slideshow from "../components/Slideshow";
import { useLanguage } from "../i18n/LanguageContext";
import { aboutPage } from "../i18n/about";

const HERO_IMAGES = [
  "/assets/photos/activities/aerial-padel-court.jpg",
  "/assets/photos/activities/horse-riding.jpg",
  "/assets/photos/activities/lake-dock-sunset.jpg",
  "/assets/photos/activities/padel-court-detail.jpg",
  "/assets/photos/wellness/spa-relaxation.jpg",
];

const POOL_IMAGES = [
  "/assets/photos/pool/outdoor-pool-wide-1.jpg",
  "/assets/photos/pool/indoor-pool-conservatory.jpg",
  "/assets/photos/pool/outdoor-pool-pergola-1.jpg",
  "/assets/photos/pool/indoor-pool-leisure.jpg",
  "/assets/photos/pool/outdoor-pool-view-1.jpg",
  "/assets/photos/pool/indoor-pool-loungers-arches.jpg",
  { src: "/assets/photos/pool/indoor-pool-ring-float.jpg", position: "bottom" },
  { src: "/assets/photos/pool/indoor-pool-cabana.jpg", position: "bottom" },
];

const GYM_IMAGES = [
  "/assets/photos/activities/outdoor-gym-equipment.jpg",
  "/assets/photos/activities/outdoor-gym-ping-pong.jpg",
  "/assets/photos/activities/outdoor-gym-basketball.jpg",
];

// PENDING PHOTO: client is still sourcing real "people in a boat fishing"
// photos for this one — using the existing lake-dock shot as a placeholder
// so the card isn't broken/empty in the meantime. Swap this for the real
// photo(s) once they arrive (see conversation from 2026-09-24).
const FISHING_IMAGE = "/assets/photos/activities/lake-dock-sunset.jpg";

const content = {
  en: {
    hero: { eyebrow: "Activities", heading: "Beyond the room" },
    intro: {
      eyebrow: "On the estate",
      heading: "Wine, horses, padel and more",
      body: "From wine tastings in the cellar to horse riding through Ajameti, Chateau Vartsikhe is built for guests who want to do more than just stay. Some experiences are included, others are priced separately — ask at the front desk or contact us to arrange.",
    },
    highlights: [
      {
        title: "Horse Riding",
        body: "Guided rides through the Ajameti forest and open estate grounds, for beginners and experienced riders alike.",
        img: "/assets/photos/activities/horse-riding.jpg",
      },
      {
        title: "Padel",
        body: "A full padel court on site, open for guests day and night, with equipment available to rent.",
        img: "/assets/photos/activities/padel-court-detail.jpg",
        imgPosition: "center 68%",
      },
      {
        title: "Outdoor Gym",
        body: "A covered, open-air gym with cardio and strength equipment, plus a ping-pong table and basketball hoop nearby — free for every guest, any time of day.",
        images: GYM_IMAGES,
      },
      {
        title: "Wellness & Spa",
        body: "Massage and a forest-relaxation zone for slowing down between activities.",
        img: "/assets/photos/wellness/spa-relaxation.jpg",
      },
      {
        title: "Pools",
        body: "Swim indoors in the glass conservatory through the colder months, or outdoors by the vineyard in summer — both open to every guest on the estate.",
        images: POOL_IMAGES,
      },
      {
        title: "Fishing on the Lake",
        body: "Cast a line on the estate's private lake — rods and basic tackle available on request at the front desk.",
        img: FISHING_IMAGE,
      },
      {
        title: "The Lake",
        body: "Rowing boats and fishing on the estate's private lake, with a dock for watching the sunset over the water.",
        img: "/assets/photos/activities/lake-rowboat.jpg",
      },
    ],
    cta: {
      eyebrow: "Get in touch",
      heading: "Plan your activities",
      body: "Tell us what you're interested in and we'll put together a schedule for your stay.",
      link: "Contact us",
    },
  },
  ka: {
    hero: { eyebrow: "აქტივობები", heading: "მეტი ვიდრე უბრალოდ ნომერი" },
    intro: {
      eyebrow: "მამულში",
      heading: "ღვინო, ცხენები, პადელი და სხვა",
      body: "მარანში ღვინის დეგუსტაციიდან აჯამეთში ცხენოსნობამდე — შატო ვარციხე შექმნილია სტუმრებისთვის, რომლებსაც მოსვენებასთან ერთად მეტის გაკეთება სურთ. ნაწილი აქტივობები უფასოა, ნაწილი ფასიანი — მიმართეთ რეცეფციას ან დაგვიკავშირდით.",
    },
    highlights: [
      {
        title: "ცხენოსნობა",
        body: "გახლდით ცხენოსნური გასეირნებები აჯამეთის ტყესა და მამულის ღია სივრცეებში — დამწყებთათვისაც და გამოცდილი მხედრებისთვისაც.",
        img: "/assets/photos/activities/horse-riding.jpg",
      },
      {
        title: "პადელი",
        body: "სრული პადელის კორტი ადგილზე, ხელმისაწვდომია დღისა და საღამოს საათებში, ინვენტარის გაქირავებით.",
        img: "/assets/photos/activities/padel-court-detail.jpg",
        imgPosition: "center 68%",
      },
      {
        title: "ღია სავარჯიშო მოედანი",
        body: "დაფარული, ღია ცის ქვეშ სავარჯიშო ზონა კარდიო და ძალის ტრენაჟორებით, პინგ-პონგის მაგიდითა და კალათბურთის კალათით — უფასოა ყველა სტუმრისთვის, დღის ნებისმიერ დროს.",
        images: GYM_IMAGES,
      },
      {
        title: "ველნესი და სპა",
        body: "მასაჟი და ტყის სარელაქსაციო სივრცე აქტივობებს შორის დასასვენებლად.",
        img: "/assets/photos/wellness/spa-relaxation.jpg",
      },
      {
        title: "აუზები",
        body: "შიდა აუზი, მინის ვერანდაში — ცივ სეზონზე, ხოლო გარე აუზი ვენახთან — ზაფხულში. ორივე ხელმისაწვდომია მამულის ყველა სტუმრისთვის.",
        images: POOL_IMAGES,
      },
      {
        title: "თევზაობა ტბაზე",
        body: "ითევზაოთ მამულის საკუთარ ტბაზე — ანკესები და საბაზისო აღჭურვილობა ხელმისაწვდომია რეცეფციაში, მოთხოვნისამებრ.",
        img: FISHING_IMAGE,
      },
      {
        title: "ტბა",
        body: "ნავით გასეირნება და თევზაობა მამულის კერძო ტბაზე, ხოლო ხიდულიდან შეგიძლიათ მზის მზის ჩასვლას.",
        img: "/assets/photos/activities/lake-rowboat.jpg",
      },
    ],
    cta: {
      eyebrow: "დაგვიკავშირდით",
      heading: "დაგვეგმეთ თქვენი აქტივობები",
      body: "მოგვიყევით რისი გაკეთება გსიამოვნებთ და თქვენი ვიზიტისთვის განრიგს შევადგენთ.",
      link: "დაგვიკავშირდით",
    },
  },
};

export default function Activities() {
  const { locale } = useLanguage();
  const t = content[locale];
  const experiences = aboutPage[locale].experiences;

  return (
    <>
      <section className="hero small" style={{ minHeight: "60vh" }}>
        <Slideshow images={HERO_IMAGES} />
        <div className="wrap">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.heading}</h1>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="wrap" style={{ maxWidth: 820, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.intro.eyebrow}</span>
            <h2 style={{ margin: "14px 0 20px" }}>{t.intro.heading}</h2>
            <p
              style={{
                color: "var(--ink-soft)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              {t.intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="alt">
        <div className="wrap">
          <div className="rooms-list">
            {t.highlights.map((item, i) => (
              <Reveal
                as="div"
                className={`room-card${i % 2 === 1 ? " reverse" : ""}`}
                key={item.title}
              >
                {item.images ? (
                  <Slideshow images={item.images} className="img" />
                ) : (
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url("${item.img}")`,
                      backgroundPosition: item.imgPosition,
                    }}
                  />
                )}
                <div className="body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & priced activities (shared with About page data) */}
      <section>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Reveal className="section-head">
            <span className="eyebrow">{experiences.eyebrow}</span>
            <h2>{experiences.heading}</h2>
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.1rem", margin: "8px 0 14px" }}>
              {experiences.facilitiesHeading}
            </h3>
            <div className="facts" style={{ marginBottom: 36 }}>
              {experiences.facilities.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
            <h3 style={{ fontSize: "1.1rem", margin: "8px 0 14px" }}>
              {experiences.activitiesHeading}
            </h3>
            <div className="policy-grid" style={{ marginBottom: 20 }}>
              <div className="policy-card">
                <ul>
                  {experiences.activities.slice(0, 5).map((a) => (
                    <li key={a.name}>
                      {a.name} — <strong>{a.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="policy-card">
                <ul>
                  {experiences.activities.slice(5).map((a) => (
                    <li key={a.name}>
                      {a.name} — <strong>{a.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              {experiences.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="alt">
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.cta.eyebrow}</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                margin: "14px 0 16px",
              }}
            >
              {t.cta.heading}
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
              {t.cta.body}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {t.cta.link}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
