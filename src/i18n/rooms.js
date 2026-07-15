// Copy for the Rooms page. Structure mirrors the page markup: hero, then one
// entry per room card (order matters — images/anchors live in Rooms.jsx), then
// the closing CTA band.
export const roomsPage = {
  en: {
    hero: {
      eyebrow: "All room types",
      heading: "Four ways to stay at Chateau Vartsikhe",
    },
    reserve: "Reserve",
    viewDetails: "View details",
    backToRooms: "← All rooms",
    cards: [
      {
        eyebrow: "01 — Veranda Cottages",
        title: "The Veranda Cottages",
        body: "Three timber houses on stilts, laced in cast-iron trim the colour of an evening sky, set inside the Ajameti forest. Each keeps its own porch and its own quiet.",
        facts: ["Sleeps 2–3", "32 m²", "1 double bed", "Private porch"],
        priceNote: "/ night, Cottage I–II",
      },
      {
        eyebrow: "02 — Stable House",
        title: "The Stable House",
        body: "Above the horses, four rooms with the same dark timber and tall shutters. Ride out before the field wakes, or don't — the horses are patient.",
        facts: ["Sleeps 2–3", "28 m²", "Twin or double", "Riding on request"],
        priceNote: "/ night, Loft",
      },
      {
        eyebrow: "03 — Grove Cabins",
        title: "The Grove Cabins",
        body: "Set back in the trees, lit only by lamplight after nine. The furthest thing from the road on the whole property.",
        facts: ["Sleeps 1–2", "22 m²", "Single or twin", "Wood-lit terrace"],
        priceNote: "/ night, single",
      },
      {
        eyebrow: "04 — Main House Suites",
        title: "The Main House",
        body: "Upstairs rooms in the stone-and-timber main building, closest to the pool and the breakfast terrace, for guests who want to be in the middle of things.",
        facts: ["Sleeps 2–4", "40 m²", "Balcony", "Pool view"],
        priceNote: "/ night, suite",
        miniLabel: "Ensuite bathroom with freestanding tub",
      },
    ],
    cta: {
      eyebrow: "Not sure which fits",
      heading: "Tell us your dates — we'll suggest a room.",
      button: "Go to booking",
    },
  },

  ka: {
    hero: {
      eyebrow: "ოთახების ყველა ტიპი",
      heading: "დარჩენის ოთხი გზა შატო ვარწიხეში",
    },
    reserve: "დაჯავშნა",
    viewDetails: "დეტალურად",
    backToRooms: "← ყველა ოთახი",
    cards: [
      {
        eyebrow: "01 — ვერანდის კოტეჯები",
        title: "ვერანდის კოტეჯები",
        body: "სამი ხის სახლი ბოძებზე, საღამოს ცის ფერის თუჯის მოჩუქურთმებული ჩარჩოებით, აჯამეთის ტყეში. თითოეულს თავისი ვერანდა და თავისი სიმშვიდე აქვს.",
        facts: [
          "იტევს 2–3 სტუმარს",
          "32 მ²",
          "1 ორადგილიანი საწოლი",
          "პირადი ვერანდა",
        ],
        priceNote: "/ ღამეში, კოტეჯი I–II",
      },
      {
        eyebrow: "02 — საჯინიბოს სახლი",
        title: "საჯინიბოს სახლი",
        body: "ცხენებს ზემოთ — ოთხი ოთახი იმავე მუქი ხისა და მაღალი დარაბებით. გაისეირნეთ ცხენით მინდვრის გაღვიძებამდე ან უბრალოდ დაისვენეთ — ცხენები მოთმინებით დაგელოდებიან.",
        facts: [
          "იტევს 2–3 სტუმარს",
          "28 მ²",
          "ორი ცალკე ან ორადგილიანი საწოლი",
          "ცხენოსნობა მოთხოვნით",
        ],
        priceNote: "/ ღამეში, ლოფტი",
      },
      {
        eyebrow: "03 — ტყის კაბინები",
        title: "ტყის კაბინები",
        body: "ხეებს შორის, ცხრის შემდეგ მხოლოდ ლამპის შუქით განათებული. ყველაზე შორეული წერტილი გზიდან მთელ ტერიტორიაზე.",
        facts: [
          "იტევს 1–2 სტუმარს",
          "22 მ²",
          "ერთ- ან ორადგილიანი",
          "განათებული ხის ტერასა",
        ],
        priceNote: "/ ღამეში, ერთადგილიანი",
      },
      {
        eyebrow: "04 — მთავარი სახლის ლუქსები",
        title: "მთავარი სახლი",
        body: "ზედა სართულის ოთახები ქვისა და ხის მთავარ შენობაში, აუზთან და საუზმის ტერასასთან ყველაზე ახლოს — მათთვის, ვისაც მოვლენების ცენტრში ყოფნა უყვარს.",
        facts: ["იტევს 2–4 სტუმარს", "40 მ²", "აივანი", "ხედი აუზზე"],
        priceNote: "/ ღამეში, ლუქსი",
        miniLabel: "საკუთარი სააბაზანო ცალკე მდგარი აბაზანით",
      },
    ],
    cta: {
      eyebrow: "ვერ ირჩევთ?",
      heading: "მოგვწერეთ თარიღები — ოთახს ჩვენ შემოგთავაზებთ.",
      button: "ჯავშნის გვერდზე გადასვლა",
    },
  },
};
