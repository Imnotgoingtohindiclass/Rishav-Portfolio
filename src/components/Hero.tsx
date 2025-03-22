import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  // GSAP text animation
  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = ['Leader', 'Innovator', 'Creator', 'Developer'];
    let currentIndex = 0;

    const tl = gsap.timeline({ repeat: -1 });

    const animateText = () => {
      if (!text) return;
      text.textContent = words[currentIndex];

      tl.to(text, {
        opacity: 1,
        duration: 0.5,
        y: 0,
        ease: 'power3.out'
      })
      .to(text, {
        opacity: 0,
        duration: 0.5,
        y: 10,
        delay: 2,
        ease: 'power3.in',
        onComplete: () => {
          currentIndex = (currentIndex + 1) % words.length;
          text.textContent = '';
          text.style.transform = 'translateY(-10px)';
          animateText();
        }
      });
    };

    text.style.opacity = '0';
    text.style.transform = 'translateY(-10px)';
    animateText();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="container relative mx-auto flex min-h-screen items-center justify-center px-6 pt-16 md:pt-0">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white"
        >
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">Rishav Ganguly</h1>
          <p className="mb-6 text-2xl font-light md:text-3xl">
            Hi! I'm a passionate{' '}
            <span ref={textRef} className="inline-block text-3xl font-normal md:text-4xl">
              Leader
            </span>{' '}
            driven by Innovation.
          </p>
          <p className="mb-8 text-xl font-light md:text-2xl">
            I love exploring technology, breaking things (ethically!),
            building solutions that make a difference.
          </p>
          <div className="mb-6 text-lg font-light md:text-xl">
            IDP Engineering<sup>+</sup> | SYFC Member | SSTMUN 24 Vice-Chair
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#141414] transition-colors hover:bg-gray-200"
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
            <img
              src="https://ext.same-assets.com/3529001419/3184741937.jpeg"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />

            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full border-2 border-dashed border-white/20" />
            <div className="absolute inset-0 -z-10 animate-spin-slow-reverse rounded-full border-2 border-dotted border-white/20" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full border-2 border-dashed border-white/20" style={{ animationDelay: '2s' }} />
          </div>
          <motion.div
            className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-indigo-500/80 backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-5 left-0 h-16 w-16 rounded-full bg-pink-500/80 backdrop-blur-sm"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute -left-10 top-1/3 h-12 w-12 rounded-full bg-purple-500/80 backdrop-blur-sm"
            animate={{
              x: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
