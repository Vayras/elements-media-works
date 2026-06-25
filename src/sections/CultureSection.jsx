const cultureCopy =
  "We craft bold narratives, design high-impact campaigns, and build seamless brand ecosystems across platforms and mediums, where creativity meets data-backed insights, and brands grow to be a part of the contemporary culture.";

function CultureSection() {
  return (
    <section
      className="section-block culture surface-blue"
      id="culture"
      data-section-label="Culture"
      data-section-color="#003366"
    >
      <p className="culture__text">{cultureCopy}</p>
    </section>
  );
}

export default CultureSection;
