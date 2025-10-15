import mkLogo from '../assets/img/MkLogoNoBg.png';

export default function Emergency() {
  return (
    <section className="hero-emergency">
      <nav className="nav-emergency">
        <div className="logo">
          <img src={mkLogo} alt="Logo" width={100} height={100} />
        </div>
        {/* <div className="emergency-badge">🚨 24/7 AVAILABLE</div> */}
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">
            <span className="emergency-icon">🚨 </span>
            Emergency Response Team
          </p>
          <h1 className="hero-title">
            <span className="highlight">24/7 Emergency</span>
            <br />
            Door & Window Repair Service
          </h1>
          <p className="hero-description">
            Broken lock? Smashed window? Damaged door? We respond fast to secure
            your property. Available 24 hours a day, 7 days a week across the
            UK.
          </p>
        </div>
        <div className="hero-services">
          <div className="urgent-services">
            <div className="service-item">🔒 Lock Repairs</div>
            <div className="service-item">🪟 Window Replacement</div>
            <div className="service-item">🚪 Door Repairs</div>
            <div className="service-item">⚡ Same-Day Service</div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <div className="badge-icon">⚡</div>
              <div className="badge-text">
                <span className="badge-title">1 Hour</span>
                <span className="badge-subtitle">Response Time</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">🛡️</div>
              <div className="badge-text">
                <span className="badge-title">Fully Insured</span>
                <span className="badge-subtitle">Licensed Technicians</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">💰</div>
              <div className="badge-text">
                <span className="badge-title">No Call-Out</span>
                <span className="badge-subtitle">Free Quote</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="tel:+441234567890" className="btn btn-emergency">
            📞 Call Now: 07506122310
          </a>
          <a href="#quote" className="btn btn-secondary">
            Request Callback
          </a>
        </div>
      </div>
    </section>
  );
}
