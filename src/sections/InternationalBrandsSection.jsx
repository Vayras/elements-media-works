const launchBrands = [
  {
    name: "Augustinus Bader",
    variant: "ab",
    mark: (
      <>
        <span className="logo-ab__initials">AB</span>
        <span className="logo-ab__name">Augustinus Bader</span>
      </>
    ),
  },
  {
    name: "Youth To The People",
    variant: "yttp",
    mark: (
      <>
        <span className="logo-yttp__seal">YTP</span>
        <span className="logo-yttp__name">Youth <small>to</small> The People</span>
      </>
    ),
  },
  {
    name: "Blessed Moon",
    variant: "blessed",
    mark: (
      <>
        <span className="logo-blessed__house">Blessed Moon</span>
      </>
    ),
  },
  {
    name: "Allies of Skin",
    variant: "allies",
    mark: (
      <>
        <span className="logo-allies__symbol" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="logo-allies__name">Allies <small>of</small> Skin</span>
      </>
    ),
  },
  {
    name: "Huda Beauty",
    variant: "huda",
    mark: (
      <span>
        Huda<span>Beauty</span>
      </span>
    ),
  },
  { name: "Laura Mercier", variant: "laura", mark: <span>Laura Mercier</span> },
  { name: "TOD'S", variant: "tods", mark: <span>TOD'S</span> },
  { name: "milktouch", variant: "milktouch", mark: <span>milktouch</span> },
  {
    name: "Fenty Beauty by Rihanna",
    variant: "fenty",
    mark: (
      <span>
        Fenty Beauty <small>by Rihanna</small>
      </span>
    ),
  },
  { name: "Tiffany & Co.", variant: "tiffany", mark: <span>Tiffany & Co.</span> },
  { name: "Tom Ford", variant: "tomford", mark: <span>Tom Ford</span> },
  { name: "Armani Exchange", variant: "armani", mark: <span>Armani Exchange</span> },
  {
    name: "Valentino",
    variant: "valentino",
    mark: (
      <>
        <span className="logo-valentino__v">V</span>
        <span>Valentino</span>
      </>
    ),
  },
  { name: "NARS", variant: "nars", mark: <span>NARS</span> },
  { name: "SHEIN", variant: "shein", mark: <span>SHEIN</span> },
  { name: "ASOS", variant: "asos", mark: <span>asos</span> },
  { name: "Mermade Hair", variant: "mermade", mark: <span>Mermade <small>hair.</small></span> },
  {
    name: "Canali 1934",
    variant: "canali",
    mark: (
      <span>
        Canali <small>1934</small>
      </span>
    ),
  },
  { name: "La Mer", variant: "lamer", mark: <span>La Mer</span> },
  { name: "Estée Lauder", variant: "estee", mark: <span>Estée Lauder</span> },
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
          {launchBrands.map((brand) => (
            <li className={`brand-logo brand-logo--${brand.variant} reveal`} key={brand.name} aria-label={brand.name}>
              {brand.mark}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InternationalBrandsSection;
