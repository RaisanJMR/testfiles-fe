import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Free test files for developers and testers
        </h1>

        <p className="hero-description">
          Download dummy files in different formats and sizes to test
          file uploads, downloads, APIs, storage limits, and applications.
        </p>

        <div className="hero-actions">
          <a href="#files" className="hero-primary-button">
            Browse test files
          </a>

          <a href="#generator" className="hero-secondary-button">
            Create a custom file
          </a>
        </div>

        <p className="hero-note">
          No signup required · Free to use · Multiple file formats
        </p>
      </div>
    </section>
  );
}

export default Hero;