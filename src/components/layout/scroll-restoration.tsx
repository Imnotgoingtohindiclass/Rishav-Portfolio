import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only handle hash navigation on the home page
    if (pathname === "/" && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollRestoration; 