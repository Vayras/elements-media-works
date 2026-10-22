import { asset } from "../asset";

const internationalPath = "assets/logos/international/";

export const launchBrands = [
  ["Augustinus Bader", "augustinus-bader.svg"],
  ["Youth To The People", "youth-to-the-people.png"],
  ["Blessed Moon", "blessed-moon.svg", true],
  ["Allies of Skin", "allies-of-skin.jpg"],
  ["Huda Beauty", "huda-beauty.svg"],
  ["Laura Mercier", "laura-mercier.svg"],
  ["TOD'S", "tods.svg"],
  ["milktouch", "milktouch.png"],
  ["Fenty Beauty by Rihanna", "fenty-beauty.svg"],
  ["Tiffany & Co.", "tiffany.svg"],
  ["Tom Ford", "tom-ford.svg"],
  ["Armani Exchange", "armani-exchange.svg"],
  ["Valentino", "valentino.svg"],
  ["NARS", "nars.png"],
  ["SHEIN", "shein.svg"],
  ["ASOS", "asos.png"],
  ["Mermade Hair", "mermade-hair.svg"],
  ["Canali 1934", "canali.svg"],
  ["La Mer", "la-mer.png"],
  ["Estée Lauder", "estee-lauder.png"],
].map(([name, file, isWhite = false]) => ({ name, isWhite, src: asset(`${internationalPath}${file}`) }));

const brandLogoFiles = [
  "Air India.png", "AltGraaf.png", "Ariel.png", "Armaf.png", "Azorte.png", "BPL.png",
  "Black & White.png", "Black Dog.png", "Butterfly.png", "Catch.png", "Close-Up_logo.svg.png",
  "Clovia.png", "Disney+_Hotstar.png", "Exide.png", "Eze_white.png.webp", "Fashion Factory.png",
  "Flying Machine.png", "GAP.png", "Gillette.png", "Godawan.png", "Gordon_s Gin.png",
  "HERSHEYS.png", "Head n Shoulders.png", "Heineken.png", "Hoegaarden.png", "IDFC bank.png",
  "IM steel.png", "India House.png", "JSW_Group.png", "JWP.png", "Jio-payments-bank.png",
  "JioCinema.png", "JioMart.png", "Jivers.png", "John Players.png", "Johnnie-Walker.png",
  "Just In Time.png", "Kelvinator.png", "Lattafa.png", "Liva.png", "M&S.png", "McDowells.png",
  "Milkbasket.png", "Monster logo.png", "Mumbai-Indians-Logo.png", "NMACC.png", "Nescafé.png",
  "Netmeds.png", "Only Vimal.png", "Pampers.png", "Pantene.png", "Predator Energy.png",
  "Pret-a-Manger.png", "RCAP.png", "Reliance Digital.png", "Ritu Kumar.png", "SHEIN.png",
  "Sharp TV.png", "Signature.png", "Smart Bazaar.png", "Smirnoff.png", "Spykar.png",
  "Steve Madden.png", "Superdry.png", "Swadesh.png", "TRENDS.png", "Tanqueray.png",
  "The Leela.png", "The Singleton.png", "US Polo.png", "Urban Ladder.png", "Vadilal.png",
  "Vantara.png", "Venus-Logo-white.png", "Vicks.png", "Whisper.png", "Wipro.png", "Yousta.png",
  "Zivame.png", "ZzzQuill.png", "ajio.png", "baileys.png.webp", "braun.png", "crocs.png",
  "skinnsi.png", "snapchat-logo.png", "tira.png",
];

export const partnerBrands = brandLogoFiles.map((file) => ({
  name: file
    .replace(/\.(?:png|webp|svg)(?:\.(?:png|webp))?$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+logo(?:\s+white)?$/i, "")
    .trim(),
  src: asset(`assets/brandlogos/${encodeURIComponent(file)}`),
}));
