const verbs = [
  { verb: "We craft", object: "bold narratives" },
  { verb: "We design", object: "high-impact campaigns" },
  { verb: "We build", object: "seamless brand ecosystems" },
];

function CultureSection() {
  return (
    <section className="ds-who" id="culture" aria-labelledby="whoTitle">
      <div className="ds-wrap ds-who__inner">
        <h2 className="ds-label ds-who__label" id="whoTitle">
          <span>02</span>
          <span>Who we are</span>
        </h2>

        <ol className="ds-who__rows">
          {verbs.map((row, index) => (
            <li className="ds-grid ds-who__row reveal" key={row.object}>
              <span className="ds-who__num">{String(index + 1).padStart(2, "0")}</span>
              <span className="ds-who__verb">{row.verb}</span>
              <span className="ds-who__object">{row.object}</span>
            </li>
          ))}
        </ol>

        <div className="ds-grid ds-who__close reveal">
          <span className="ds-caps ds-who__aside">Across platforms and mediums</span>
          <p className="ds-who__statement">
            Where creativity meets data-backed insights, and brands grow to be a part of the contemporary culture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CultureSection;
