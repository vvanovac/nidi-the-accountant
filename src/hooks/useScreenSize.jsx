import { useState, useEffect } from 'react';

export function useScreenSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: document.documentElement.scrollHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: size.width * 0.9,
    height: size.height * 0.95,
  };
}
