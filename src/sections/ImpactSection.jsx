import { asset } from "../asset";

const impactStats = [
  { value: "12+", label: "Years" },
  { value: "450+", label: "Brands" },
  { value: "10k+", label: "Campaigns" },
  { value: "1M+", label: "Content Pieces" },
  { value: "100+", label: "Film Associations" },
  { value: "500+", label: "Celebrity Associations" },
  { value: "250k+", label: "Influencer Activations" },
  { value: "10 Bn+", label: "Impressions Delivered" },
];

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

const brandLogos = brandLogoFiles.map((file) => ({
  name: file.replace(/\.(?:png|webp)(?:\.(?:png|webp))?$/i, "").replace(/[_-]+/g, " "),
  src: asset(`assets/brandlogos/${file}`),
}));

const logoRows = [
  brandLogos.slice(0, Math.ceil(brandLogos.length / 2)),
  brandLogos.slice(Math.ceil(brandLogos.length / 2)),
];

function LogoRow({ logos, reverse = false }) {
  return (
    <div className={`impact-logo-row${reverse ? " impact-logo-row--reverse" : ""}`}>
      <div className="impact-logo-track">
        {[0, 1].map((copy) => (
          <div className="impact-logo-group" aria-hidden={copy === 1} key={copy}>
            {logos.map((logo) => (
              <span className="impact-logo" key={`${logo.name}-${copy}`}>
                <img src={logo.src} alt={copy === 0 ? logo.name : ""} loading="lazy" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactSection() {
  return (
    <section
      className="section-block impact-section"
      id="impact"
      data-section-label="Impact"
      data-section-color="#FADA5E"
    >
      <div className="impact-section__inner">
        <div className="impact-section__head reveal">
          <h2>We have come a long way</h2>
        </div>
        <div className="impact-stats" aria-label="Impact metrics">
          {impactStats.map((stat) => (
            <article className="impact-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="impact-logos reveal" aria-label="Brands who trust us">
          <h3>And won the trust of many...</h3>
          <div className="impact-logo-rows">
            <LogoRow logos={logoRows[0]} />
            <LogoRow logos={logoRows[1]} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
