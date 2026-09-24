import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Slideshow from "../components/Slideshow";
import { useLanguage } from "../i18n/LanguageContext";

const HERO_IMAGES = [
  "/assets/photos/events/banquet-hall-2.jpg",
  "/assets/photos/events/aerial-wedding-marquee.jpg",
  "/assets/photos/events/vineyard-picnic.jpg",
  "/assets/photos/events/wedding-musicians.jpg",
];

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
        title: "Theater",
        body: "Chateau Vartsikhe Theater is a distinctive wedding venue surrounded by nature. Set among open fields and overlooking the lake, its glass structure brings the landscape into the space, creating a bright, open and memorable setting for your celebration. The Theater is ideal for both intimate and large-scale weddings, accommodating up to 400 guests.",
        capacity: "Up to 400 guests",
        img: "/assets/photos/events/theater-hall.jpg",
      },
      {
        title: "Theater Field",
        body: "The Theater Field is a spacious open-air venue surrounded by nature and located beside the lake. Ideal for wedding ceremonies, welcome receptions, large wedding dinners and outdoor celebrations, the space also features a dedicated stage for live music and performances.",
        capacity: "",
        img: "/assets/photos/events/theater-field.jpg",
      },
      {
        title: "Forest Venue",
        body: "The Forest Venue is an intimate wedding setting in the heart of the forest, set on a bright open lawn surrounded by trees and wild nature. Ideal for celebrations, ceremonies and wedding dinners of up to 90 guests, with a covered alternative available in case of rain.",
        capacity: "Up to 90 guests",
        img: "/assets/photos/events/forest-venue.jpg",
      },
      {
        title: "Forest Multifunctional Venue",
        body: "The Forest Multifunctional Venue is a beautiful and versatile space surrounded by trees in the heart of the forest. Ideal for intimate weddings, private events, conferences and business meetings, the venue can be adapted for both celebrations and corporate gatherings.",
        capacity: "",
        img: "/assets/photos/events/multifunctional-venue.jpg",
      },
      {
        title: "Vineyard",
        body: "An open-air setting right among the vines — a backdrop of rolling greenery and the Ajameti forest beyond. Perfect for wedding ceremonies and receptions, wine dinners, and evening celebrations.",
        capacity: "Up to 100 guests",
        img: "/assets/photos/events/vineyard-picnic-golden.jpg",
      },
    ],
    // EN below is my own draft translation of the client's rewritten KA
    // list (2026-09-24), NOT client-approved copy — they said final English
    // needs to come from them directly since a prior auto-translation
    // produced wrong results. Swap this for their real copy once it lands.
    services: {
      eyebrow: "We take care of everything",
      heading: "Full event support",
      items: [
        "Personal event manager — coordinating the full planning and organization process",
        "Diverse dining menu — Imeretian and international cuisine, plus individually tailored menus",
        "Full bar service — estate wines, cocktails and Georgian spirits",
        "Hotel accommodation — a range of room types and cottages for your guests",
        "Technical support — professional sound, lighting and AV equipment",
        "Event styling — space design tailored to your event's concept",
        "Transfer arrangements — to/from Kutaisi and Kutaisi International Airport",
        "Activities for guests — wine tasting, horse riding, padel and other entertainment experiences",
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
      heading: "ქორწილები შატო ვარციხეში",
      body: "შატო ვარციხე გთავაზობთ განსხვავებული სტილისა და მასშტაბის ქორწილების ორგანიზებას — მცირე, ინტიმური ცერემონიებიდან 400 სტუმარზე გათვლილ დიდ ქორწილებამდე.\n\nმრავალფეროვანი სივრცეები ბუნებაში, ინდივიდუალურად შერჩეული მენიუ და თითოეულ დეტალზე მორგებული მიდგომა საშუალებას გაძლევთ შექმნათ ქორწილი თქვენი სურვილისა და კონცეფციის მიხედვით.",
    },
    venues: [
      {
        title: "თეატრი",
        body: "შატო ვარციხის თეატრი — გამორჩეული საქორწილო სივრცე ბუნების შუაგულში. სივრცე გარშემორტყმულია მინდვრებითა და ტბით, ხოლო შუშის კონსტრუქცია ბუნებას ინტერიერის ნაწილად აქცევს და ქმნის ღია, ნათელ და განსაკუთრებულ გარემოს. თეატრი იდეალურია როგორც მცირე, ისე მასშტაბური ქორწილებისთვის და იტევს მაქსიმუმ 400 სტუმარს.",
        capacity: "მაქსიმუმ 400 სტუმარი",
        img: "/assets/photos/events/theater-hall.jpg",
      },
      {
        title: "თეატრის მინდორი",
        body: "თეატრის მინდორი — ფართო, ღია სივრცე ბუნების შუაგულში, ტბასთან ახლოს. იდეალურია საქორწილო ცერემონიებისთვის, Welcome მიღებისთვის, დიდი საქორწილო სუფრებისა და მასშტაბური ღია ცის ქვეშ ქორწილებისთვის. სივრცეს აქვს გამოყოფილი სცენა ცოცხალი მუსიკისა და სხვადასხვა წარმოდგენისთვის.",
        capacity: "",
        img: "/assets/photos/events/theater-field.jpg",
      },
      {
        title: "ტყე",
        body: "ტყე — მყუდრო საქორწილო სივრცე ტყის შუაგულში, ხეებითა და ველური ბუნებით გარშემორტყმულ ნათელ მინდორზე. იდეალურია 90 სტუმრამდე ქორწილებისთვის, ცერემონიებისა და საქორწილო სუფრებისთვის.",
        capacity: "90-მდე სტუმარი",
        img: "/assets/photos/events/forest-venue.jpg",
      },
      {
        title: "ტყის მულტიფუნქციური სივრცე",
        body: "ტყის მულტიფუნქციური სივრცე — ბუნებითა და ხეებით გარშემორტყმული სივრცე ტყის შუაგულში. იდეალურია მცირე ქორწილებისთვის, კერძო ღონისძიებებისთვის, კონფერენციებისა და საქმიანი შეხვედრებისთვის. სივრცის მოქნილი ფორმატი საშუალებას იძლევა მოეწყოს როგორც სადღესასწაულო, ისე ოფიციალური ღონისძიებები.",
        capacity: "",
        img: "/assets/photos/events/multifunctional-venue.jpg",
      },
      {
        title: "ვენახი",
        body: "ღია სივრცე პირდაპირ ვენახებს შორის — ფონზე მოჩანს მწვანე ბორცვები და აჯამეთის ტყე. შესანიშნავია ქორწილის ცერემონიებისა და ვახშმებისთვის.",
        capacity: "100-მდე სტუმარი",
        img: "/assets/photos/events/vineyard-picnic-golden.jpg",
      },
    ],
    services: {
      eyebrow: "ყველაფერს ჩვენ ვაგვარებთ",
      heading: "სრული ღონისძიების მხარდაჭერა",
      items: [
        "ღონისძიებების პერსონალური მენეჯერი — დაგეგმვისა და ორგანიზების სრული პროცესის კოორდინაციისთვის",
        "მრავალფეროვანი კვების მენიუ — იმერული და საერთაშორისო სამზარეულო, ასევე ინდივიდუალურად შედგენილი მენიუ",
        "სრული ბარის სერვისი — კომპლექსის ღვინოები, კოქტეილები და ქართული სპირტიანი სასმელები",
        "განთავსება სასტუმროში — სტუმრებისთვის სხვადასხვა ტიპის ნომრები და კოტეჯები",
        "ტექნიკური უზრუნველყოფა — პროფესიონალური გახმოვანება, განათება და AV აღჭურვილობა",
        "ღონისძიებების გაფორმება — სივრცის დიზაინი და მორგება ღონისძიების კონცეფციის შესაბამისად",
        "ტრანსფერის ორგანიზება — ქუთაისიდან და ქუთაისის საერთაშორისო აეროპორტიდან",
        "სტუმრებისთვის მრავალფეროვანი აქტივობები — ღვინის დეგუსტაცია, ცხენოსნობა, პადელი და სხვა გასართობი გამოცდილებები",
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
            {t.intro.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--ink-soft)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: i > 0 ? 14 : 0,
                }}
              >
                {para}
              </p>
            ))}
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
                  style={{
                    backgroundImage: `url("${venue.img}")`,
                    backgroundPosition: venue.imgPosition,
                  }}
                />
                <div className="body">
                  <h3>{venue.title}</h3>
                  <p>{venue.body}</p>
                  {venue.capacity && (
                    <div className="facts">
                      <span>{venue.capacity}</span>
                    </div>
                  )}
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
