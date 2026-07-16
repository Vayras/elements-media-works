
function Preloader({ progress }) {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="loader__logo-container">
        <img 
          src="/assets/watermarks/100%25%20yellow.svg" 
          alt="" 
          className="loader__logo-base" 
        />
        <img 
          src="/assets/watermarks/100%25%20yellow.svg" 
          alt="" 
          className="loader__logo-fill" 
          style={{ clipPath: `inset(calc(100% - ${progress}%) 0 0 0)` }}
        />
      </div>
    </div>
  );
}

export default Preloader;
