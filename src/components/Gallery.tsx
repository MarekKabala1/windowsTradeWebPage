import type { JSX } from 'react';
import bifoldImage from '../assets/img/bifold.png';
import windowImage from '../assets/img/window.png';
import doorImage from '../assets/img/door.png';
import mkLogo from '../assets/img/MkLogo.png';

type GalleryItems = {
  imageUrl?: string;
  header: string;
  description: string;
};

type GalleryItemsProps = {
  items?: GalleryItems[];
};

const DEFAULT_GALLERY_ITEMS: GalleryItems[] = [
  {
    imageUrl: bifoldImage,
    header: 'Bifold',
    description:
      '  Custom made to your specifications, at a fraction of the cost of a standard door.',
  },
  {
    imageUrl: windowImage,
    header: 'Windows',
    description: 'Energy efficient and stylish windows',
  },
  {
    imageUrl: doorImage,
    header: 'Doors',
    description: 'High quality doors for every home and business',
  },
];

export default function Gallery({
  items = DEFAULT_GALLERY_ITEMS,
}: GalleryItemsProps): JSX.Element {
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
              {items?.map((item, index) => (
                <div className="gallery-subitems" key={index}>
                  <div className="gallery-subitem-text">
                    <h2>{item.header}</h2>
                    <p>{item.description}</p>
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.header}
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                </div>
              ))}
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
