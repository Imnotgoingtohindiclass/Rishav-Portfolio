import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-background to-card flex justify-center items-center z-50 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="font-mono text-primary text-lg">
        <span>System initialization{'.'.repeat(dots)}</span>
        <span className="animate-blink">_</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
