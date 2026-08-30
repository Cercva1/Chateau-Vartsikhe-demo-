import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const content = {
  en: {
    hero: { eyebrow: "Events & Meetings", heading: "Celebrate here" },
    intro: {
      eyebrow: "Unique venues",
      heading: "From intimate gatherings to 350-guest celebrations",
      body: "Chateau Vartsikhe offers extraordinary spaces in the vineyards, forest and by the lake — a setting that turns any event into a memory. Whether an intimate dinner for twenty or a grand wedding for hundreds, we tailor everything to you.",
    },
    venues: [
      {
        title: "Vineyard Terrace",
        body: "An open-air terrace right among the vines — a backdrop of rolling greenery and the Ajameti forest beyond. Perfect for wedding ceremonies and receptions, wine dinners, and evening celebrations.",
        capacity: "Up to 350 guests",
        img: "/assets/rooms/otskhanuri-villa.jpg",
      },
      {
        title: "Forest Clearing",
        body: "A clearing among the old Ajameti trees — filtered light by day, warm lamplight by night. Ideal for private ceremonies, cocktail receptions, or forest wellness events.",
        capacity: "Up to 150 guests",
        img: "/assets/rooms/forest-chalet.jpg",
      },
      {
        title: "Lakeside Lawn",
        body: "Open grass stretching to the estate's private lake — sunsets reflect off the water as your evening unfolds. Popular for wedding toasts, live music evenings and private dinners.",
        capacity: "Up to 250 guests",
        img: "/assets/rooms/lake-house.jpg",
      },
      {
        title: "Conference Room",
        body: "A modern, air-conditioned conference room for business meetings, corporate retreats and seminars — equipped with AV, projector and high-speed Wi-Fi.",
        capacity: "Up to 40 people",
        img: "/assets/rooms/lux.jpg",
      },
    ],
    services: {
      eyebrow: "We take care of everything",
      heading: "Full event support",
      items: [
        "Dedicated events manager for your planning process",
        "In-house catering — Imeretian cuisine, international menus, custom set menus",
        "Bar service including estate wine, cocktails and Georgian spirits",
        "Accommodation for your guests across all twelve room types on the estate",
        "Sound, lighting and AV equipment",
        "Floral decoration and venue styling on request",
        "Transfers to and from the airport and Kutaisi",
        "Activities for guests — wine tasting, horse riding, padel and more",
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      heading: "Tell us about your event",
      body: "Our events team will get back to you within one business day to discuss your requirements, availability and pricing.",
      phone: "+995 595 55 60 10",
      email: "events@chateauvartsikhe.ge",
      cta: "Send an enquiry",
    },
  },
  ka: {
    hero: { eyebrow: "ღონისძიებები და შეხვედრები", heading: "იზეიმეთ აქ" },
    intro: {
      eyebrow: "უნიკალური სივრცეები",
      heading: "20 სტუმრიანი ვახშმიდან 350-კაციან ზეიმამდე",
      body: "შატო ვარციხე გთავაზობთ განსაკუთრებულ სივრცეებს ვენახებში, ტყეში და ტბასთან — გარემო, რომელიც ნებისმიერ ღონისძიებას ამ ადგილის მახსოვრობად აქცევს. ოც სტუმრიანი ინტიმური ვახშმიდან ასობით კაციანი ქორწილის ზეიმამდე — ყველაფერს თქვენთვის ვარგებთ.",
    },
    venues: [
      {
        title: "ვენახის ტერასა",
        body: "ღია ტერასა პირდაპირ ვენახებს შორის — ფონზე მოჩანს მწვანე ბორცვები და აჯამეთის ტყე. შესანიშნავია ქორწილის ცერემონიებისა და ვახშმებისთვის.",
        capacity: "350-მდე სტუმარი",
        img: "/assets/rooms/otskhanuri-villa.jpg",
      },
      {
        title: "ტყის მინდვრი",
        body: "გამოწმენდილი სივრცე ძველი აჯამეთის ხეებს შორის — ფილტრირებული სინათლე დღით, თბილი ლამპის შუქი ღამით. იდეალურია ინტიმური ცერემონიებისთვის.",
        capacity: "150-მდე სტუმარი",
        img: "/assets/rooms/forest-chalet.jpg",
      },
      {
        title: "ტბასთან მდებარე გაზონი",
        body: "ღია გაზონი, რომელიც კომპლექსის კერძო ტბამდე გადის — მზის ჩასვლა წყლის ზედაპირზე ირეკლება. პოპულარულია ქორწილის ტოსტების, ცოცხალი მუსიკისა და კერძო ვახშმებისთვის.",
        capacity: "250-მდე სტუმარი",
        img: "/assets/rooms/lake-house.jpg",
      },
      {
        title: "საკონფერენციო დარბაზი",
        body: "თანამედროვე, გაკონდიცირებული საკონფერენციო დარბაზი ბიზნეს შეხვედრებისთვის — სრული AV, პროექტორი და სწრაფი Wi-Fi.",
        capacity: "40-მდე ადამიანი",
        img: "/assets/rooms/lux.jpg",
      },
    ],
    services: {
      eyebrow: "ყველაფერს ჩვენ ვაგვარებთ",
      heading: "სრული ღონისძიების მხარდაჭერა",
      items: [
        "სპეციალური ღონისძიებების მენეჯერი დაგეგმარების პროცესისთვის",
        "საკუთარი კვება — იმერული სამზარეულო, საერთაშორისო მენიუ, ინდივიდუალური სეტ მენიუ",
        "ბარის სერვისი — კომპლექსის ღვინო, კოქტეილები და ქართული სპირიტები",
        "სასტუმრო სტუმრებისთვის — ყველა 12 ტიპის ნომერი ხელმისაწვდომია",
        "ხმოვანი, განათებისა და AV აღჭურვილობა",
        "ყვავილებით გაფორმება და სივრცის სტაილი მოთხოვნით",
        "ტრანსფერი აეროპორტიდან/ქუთაისიდან",
        "სტუმრებისთვის აქტივობები — ღვინის დეგუსტაცია, ცხენოსნობა, პადელი და სხვა",
      ],
    },
    contact: {
      eyebrow: "დაგვიკავშირდით",
      heading: "მოგვიყევით თქვენი ღონისძიების შესახებ",
      body: "ჩვენი ღონისძიებების გუნდი ერთ სამუშაო დღეში დაგიკავშირდებათ თქვენი მოთხოვნების, ხელმისაწვდომობის და ფასების განსახილველად.",
      phone: "+995 595 55 60 10",
      email: "events@chateauvartsikhe.ge",
      cta: "გამოაგზავნეთ მოთხოვნა",
    },
  },
};

export default function Events() {
  const { locale } = useLanguage();
  const t = content[locale];

  return (
    <>
      <section
        className="hero small"
        style={{
          backgroundImage: 'url("/assets/rooms/otskhanuri-villa.jpg")',
          minHeight: "40vh",
        }}
      >
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

      {/* Venues */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">
              {locale === "ka" ? "სივრცეები" : "Our venues"}
            </span>
            <h2>{locale === "ka" ? "სად გვხვდებით" : "Where we host"}</h2>
          </Reveal>
          <div className="rooms-list">
            {t.venues.map((venue, i) => (
              <Reveal
                as="div"
                className={`room-card${i % 2 === 1 ? " reverse" : ""}`}
                key={venue.title}
              >
                <div
                  className="img"
                  style={{ backgroundImage: `url("${venue.img}")` }}
                />
                <div className="body">
                  <h3>{venue.title}</h3>
                  <p>{venue.body}</p>
                  <div className="facts">
                    <span>{venue.capacity}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal className="section-head">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2>{t.services.heading}</h2>
          </Reveal>
          <Reveal>
            <ul style={{ lineHeight: 2, paddingLeft: 20 }}>
              {t.services.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="alt">
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2
              style={{
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                margin: "14px 0 16px",
              }}
            >
              {t.contact.heading}
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
              {t.contact.body}
            </p>
            <p style={{ marginBottom: 8 }}>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                style={{ fontWeight: 600, color: "var(--forest-deep)" }}
              >
                {t.contact.phone}
              </a>
            </p>
            <p style={{ marginBottom: 28 }}>
              <a
                href={`mailto:${t.contact.email}`}
                style={{ fontWeight: 600, color: "var(--forest-deep)" }}
              >
                {t.contact.email}
              </a>
            </p>
            <Link to="/contact" className="btn btn-primary">
              {t.contact.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
