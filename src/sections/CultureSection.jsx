const cultureCopy =
  "We craft bold narratives, design high-impact campaigns, and build seamless brand ecosystems across platforms and mediums, where creativity meets data-backed insights, and brands grow to be a part of the contemporary culture.";

const cultureWords = cultureCopy.split(" ");

function CultureSection() {
  return (
    <section
      className="section-block culture "
      id="culture"
      data-section-label="Culture"
      data-section-color="#003366"
    >
      <p className="culture__text" style={{ "--culture-word-count": cultureWords.length }}>
        {cultureWords.map((word, index) => (
          <span className="culture__word" style={{ "--word-index": index }} key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}

export default CultureSection;
