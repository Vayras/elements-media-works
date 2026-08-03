const logoPath = "/assets/logos/international/";

const launchBrands = [
  ["Augustinus Bader", "augustinus-bader.svg"],
  ["Youth To The People", "youth-to-the-people.png"],
  ["Blessed Moon", "blessed-moon.svg"],
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
];

function InternationalBrandsSection() {
  return (
    <section
      className="section-block international-brands"
      id="international-brands"
      data-section-label="International Brands"
      data-section-color="#003366"
      data-section-surface="light"
    >
      <div className="international-brands__inner">
        <div className="international-brands__copy reveal">
          <p className="international-brands__eyebrow">Global to local</p>
          <h2>We help international brands launch in India.</h2>
          <p>
            Strategy, content, creators, events and cultural moments that make global names feel native to Indian audiences.
          </p>
        </div>

        <ul className="international-brands__grid" aria-label="International brand logos">
          {launchBrands.map(([name, logo]) => (
            <li className="brand-logo reveal" key={name}>
              <img src={`${logoPath}${logo}`} alt={name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InternationalBrandsSection;
