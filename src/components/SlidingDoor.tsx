import { useEffect } from 'react';

export default function SlidingDoor() {
  useEffect(() => {
    const doorContainer = document.querySelector('.door-container');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const doorOpenThreshold = window.innerHeight - 20;

      if (scrollY >= doorOpenThreshold) {
        doorContainer?.classList.add('doors-open');
      } else {
        doorContainer?.classList.remove('doors-open');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
