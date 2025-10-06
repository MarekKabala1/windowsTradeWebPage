import type { JSX } from 'react';
import bifoldImage from '../assets/img/bifold.png';
import windowImage from '../assets/img/window.png';
import doorImage from '../assets/img/door.png';
import mkLogo from '../assets/img/MkLogo.png';

export default function Gallery(): JSX.Element {
  return (
    <>
      <link rel="preload" as="image" href={bifoldImage} />
      <link rel="preload" as="image" href={windowImage} />
      <link rel="preload" as="image" href={doorImage} />
      <link rel="preload" as="image" href={mkLogo} />

      <section id="gallery" className="section-gallery">
        <h3 className="section-title">Portfolio Highlights</h3>
        <div className="gallery-container">
          <div className="gallery">
            <div className="gallery-item ">
              <div className="gallery-subitems">
                <div className="gallery-subitem-text">
                  <h2>Bifold</h2>
                  <p>
                    Custom made to your specifications, at a fraction of the
                    cost of a standard door.
                  </p>
                </div>
                <img
                  src={bifoldImage}
                  alt="Bifold door"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="gallery-subitems">
                <div className="gallery-subitem-text">
                  <h2>Doors</h2>
                  <p>High quality doors for every home and business</p>
                </div>
                <img
                  src={doorImage}
                  alt="Door"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="gallery-subitems">
                <div className="gallery-subitem-text">
                  <h2>Windows</h2>
                  <p>Energy efficient and stylish windows</p>
                </div>
                <img
                  src={windowImage}
                  alt="Windows"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="gallery-subitems">
                <div className="gallery-subitem-text"></div>
                <img
                  src={mkLogo}
                  alt="Logo"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
