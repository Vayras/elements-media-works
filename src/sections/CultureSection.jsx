const words = [
  { word: "Narratives.", tone: "ink", align: "end" },
  { word: "Campaigns.", tone: "accent", align: "start" },
  { word: "Ecosystems.", tone: "ink", align: "end" },
];

function CultureSection() {
  return (
    <section className="ds-who" id="culture" aria-labelledby="whoTitle">
      <div className="ds-wrap ds-who__inner">
        <div className="ds-who__intro">
          <h2 className="ds-label ds-who__label" id="whoTitle">
            <span>02</span>
            <span>Who we are</span>
          </h2>
          <p className="ds-who__lede">
            We craft bold narratives, design high-impact campaigns, and build seamless brand ecosystems across
            platforms and mediums.
          </p>
        </div>

        <p className="ds-who__poster" aria-hidden="true">
          {words.map((item) => (
            <span className={`ds-who__word ds-who__word--${item.tone} ds-who__word--${item.align} reveal`} key={item.word}>
              {item.word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default CultureSection;
