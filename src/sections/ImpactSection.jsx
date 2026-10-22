const impactStats = [
  { value: "12+", label: "Years" },
  { value: "450+", label: "Brands" },
  { value: "10k+", label: "Campaigns" },
  { value: "1M+", label: "Content Pieces" },
  { value: "100+", label: "Film Associations" },
  { value: "500+", label: "Celebrity Associations" },
  { value: "250k+", label: "Influencer Activations" },
  { value: "10 Bn+", label: "Impressions Delivered", featured: true },
];

function ImpactSection() {
  return (
    <section className="ds-impact" id="impact" aria-labelledby="impactTitle">
      <div className="ds-wrap">
        <div className="ds-impact__bento">
          <div className="ds-impact__head">
            <p className="ds-label ds-impact__label">
              <span>04</span>
              <span>Impact</span>
            </p>
            <h2 className="ds-h2" id="impactTitle">
              We have come a long way
            </h2>
          </div>

          <dl className="ds-impact__stats">
            {impactStats.map((stat) => (
              <div
                className={`ds-impact__cell reveal${stat.featured ? " ds-impact__cell--featured" : ""}`}
                key={stat.label}
              >
                <dt className="ds-caps">{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
