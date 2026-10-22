import { asset } from "../asset";

/*
  Latest @elementsmediaworks posts shown in the Work section.
  format: "reel" | "carousel" | "post"   ratio: the cover's width / height
  tag: used by the Brand Elchemy filter
*/
const posts = [
  ["DcTaCAmKZEm", "reel", "9 / 16", "dctacamkzem", "The Elchemy Games", "Reels", "Aug 2026"],
  ["DebTz59GJdh", "carousel", "1 / 1", "debtz59gjdh", "Don’t swipe", "Agency", "Oct 2026"],
  ["Detysx0tmdB", "post", "4 / 5", "detysx0tmdb", "Happy Dussehra", "Moments", "Oct 2026"],
  ["DeV9dBQIjME", "post", "4 / 5", "dev9dbqijme", "Navratri: nine nights of energy", "Moments", "Oct 2026"],
  ["DWX83shiHNC", "carousel", "4 / 5", "dwx83shihnc", "The Face Shop × Farah Khan", "Brand Elchemy", "Mar 2026"],
  ["DWTnG4biKXl", "carousel", "4 / 5", "dwtng4bikxl", "Spykar: where AI met creative talent", "Brand Elchemy", "Mar 2026"],
  ["DUYJ5CgCHs3", "carousel", "4 / 5", "duyj5cgchs3", "Black Dog × Emilia Clarke", "Brand Elchemy", "Feb 2026"],
  ["DTfQrG2iNdY", "post", "4 / 5", "dtfqrg2indy", "Black Dog Soda: a reveal worth pausing for", "Campaign", "Jan 2026"],
  ["DO5XiISiNWe", "reel", "9 / 16", "do5xiisinwe", "L’Oréal Paris × Tira", "Campaign", "Sep 2025"],
  ["DOYWI5Yj4Bq", "carousel", "4 / 5", "doywi5yj4bq", "Spykar: influencer marketing that fits", "Campaign", "Sep 2025"],
  ["DNSy9n4IZJ1", "post", "4 / 5", "dnsy9n4izj1", "What do we do?", "Agency", "Aug 2025"],
  ["DNSVBiXIP9s", "post", "4 / 5", "dnsvbixip9s", "Who are we?", "Agency", "Aug 2025"],
];

export const workPosts = posts.map(([code, format, ratio, file, title, tag, date]) => ({
  id: code,
  format,
  ratio,
  title,
  tag,
  date,
  href: `https://www.instagram.com/p/${code}/`,
  image: asset(`assets/images/work/ig/${file}.webp`),
}));
