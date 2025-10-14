import { useEffect } from 'react';

export default function SlidingDoor() {
  useEffect(() => {
    const doorContainer =
      document.querySelector<HTMLElement>('.door-container');
    const heroElement = document.querySelector<HTMLElement>('.hero-emergency');

    const updateHeroHeight = () => {
      if (heroElement) {
        const height = heroElement.offsetHeight;
        document.documentElement.style.setProperty(
          '--hero-height',
          `${height}px`
        );
      }
    };
    if (heroElement) {
      updateHeroHeight();
      window.addEventListener('resize', updateHeroHeight);
    }
    const handleScroll = () => {
      if (!heroElement || !doorContainer) return;

      const scrollY = window.scrollY;
      const heroHeight = heroElement.offsetHeight;
      const doorOpenThreshold = heroHeight + 150;

      if (scrollY >= doorOpenThreshold) {
        doorContainer.classList.add('doors-open');
      } else {
        doorContainer.classList.remove('doors-open');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeroHeight);
    };
  }, []);

  return (
    <div className="door-container">
      <div className="door">
        <div className="door-left door-frame">
          <div className="door-handle door-handle-left"></div>
          <div className="door-glass door-glass-left"></div>
          <div className="door-dark-glass door-dark-glass-left"></div>
        </div>
        <div className="door-right door-frame">
          <div className="door-handle door-handle-right"></div>
          <div className="door-glass door-glass-right"></div>
          <div className="door-dark-glass door-dark-glass-right"></div>
        </div>
      </div>
    </div>
  );
}
