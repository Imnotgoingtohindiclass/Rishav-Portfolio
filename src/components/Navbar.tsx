import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Projects', href: '#project' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleURLChange = () => {
      setIsNavbarVisible(!window.location.hash.includes('#project')); 
    };
    handleURLChange();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleURLChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleURLChange);
    };
  }, []);

  if (!isNavbarVisible) return null;

  return (
    <nav
      className={`fixed top-0 z-20 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#141414]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="text-lg font-light text-white transition-colors hover:text-gray-300"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#141414] border-t border-gray-800"
          >
            <motion.ul
              variants={{
                closed: { opacity: 0, y: -20 },
                open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="container mx-auto flex flex-col space-y-4 px-6 py-4"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{ closed: { opacity: 0, y: -10 }, open: { opacity: 1, y: 0 } }}
                  className="border-b border-gray-800 pb-2"
                >
                  <a
                    href={item.href}
                    className="block text-lg font-light text-white transition-colors hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
