export default function About() {
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-badge">Since 2011</span>
        <h2 className="about-title">
          A Decade of Precision: Your Trusted Partner for Windows and Doors
        </h2>
      </div>
      <div className="about-content ">
        <div className="about-card card">
          <div className="card-icon">🏆</div>
          <h3>Premier Specialists</h3>
          <p>
            Since our founding in 2011, we have established ourselves as the
            premier specialists in window and door installation and repair. Our
            experience is deep and broad, covering the full spectrum of
            materials essential to modern and traditional building design.
          </p>
        </div>
        <div className="about-card card">
          <div className="card-icon">⚙️</div>
          <h3>Expert Materials Handling</h3>
          <p>
            We expertly handle all types of products, including high-performance
            PVC, classic timber, and sleek, contemporary aluminium systems. Our
            certified teams ensure every new installation is performed with
            meticulous care, guaranteeing maximum energy efficiency, security,
            and a flawless aesthetic finish that enhances your property's value.
          </p>
        </div>
        <div className="about-card featured card">
          <div className="card-icon">🔧</div>
          <h3>The Repair Difference: Prioritizing Original Quality</h3>
          <p>
            When it comes to repair, we operate with integrity. Unlike quick-fix
            solutions, our commitment is to the long-term health of your windows
            and doors. We always make every effort to source and utilize
            original manufacturer parts whenever possible. This dedication to
            using factory-grade components ensures that your repairs are not
            only effective but also maintain the product's original
            specifications, performance, and warranty.
          </p>
        </div>
      </div>
      <div className="about-cta card">
        <p className="cta-text">
          Whether you're looking to upgrade to modern, secure doors or need a
          precise, durable repair for a favorite window, rely on the proven
          expertise we've delivered to clients for over a decade.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">
            Get in Touch
          </a>
          <a href="#services" className="btn btn-secondary">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
