export default function Gallery() {
  return (
    <section id="gallery" className="section-gallery">
      <h3 className="section-title">Portfolio Highlights</h3>
      <div className="gallery-container">
        <div className="gallery">
          <div className="gallery-item ">
            <div className="gallery-subitems">
              <div className="gallery-subitem-text">
                <h2>Bifold</h2>
                <p>
                  Custom made to your specifications, at a fraction of the cost
                  of a standard door.
                </p>
              </div>
              <img src="../public/bifold.png" alt="" />
            </div>
            <div className="gallery-subitems">
              <div className="gallery-subitem-text">
                <h2>Doors</h2>
                <p>High quality doors for every home and business</p>
              </div>
              <img src="../public/door.png" alt="" />
            </div>
            <div className="gallery-subitems">
              <div className="gallery-subitem-text">
                <h2>Windows</h2>
                <p>Energy efficient and stylish windows</p>
              </div>
              <img src="../public/window.png" alt="" />
            </div>
            <div className="gallery-subitems">
              <div className="gallery-subitem-text"></div>
              <img src="../public/MkLogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
