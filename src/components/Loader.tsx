import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Loader = () => {
  useEffect(() => {
    // Create a GSAP animation for the loader dots
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.dot', {
      y: -10,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.inOut',
    }).to('.dot', {
      y: 0,
      stagger: {
        each: 0.1,
        from: 'start',
      },
      duration: 0.4,
      ease: 'power2.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414]"
    >
      <motion.div
        className="flex space-x-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="dot h-5 w-5 rounded-full bg-white"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;