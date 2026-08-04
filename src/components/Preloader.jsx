import { asset } from "../asset";

function Preloader({ progress }) {
  const logo = asset("assets/watermarks/100%25%20yellow.svg");

  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="loader__logo-container">
        <img src={logo} alt="" className="loader__logo-base" />
        <img
          src={logo}
          alt=""
          className="loader__logo-fill"
          style={{ clipPath: `inset(calc(100% - ${progress}%) 0 0 0)` }}
        />
      </div>
    </div>
  );
}

export default Preloader;
