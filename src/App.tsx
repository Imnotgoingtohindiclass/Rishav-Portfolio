import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import Background from './scene/Background';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');

  // Monitor URL hash changes to determine the view
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        setCurrentView('project');
      } else {
        setCurrentView('home');
      }
    };

    // Set initial view
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-0 bg-[#141414]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="relative">
            <Canvas
              shadows
              camera={{ position: [0, 0, 5], fov: 75 }}
              className="fixed top-0 left-0 w-full h-full"
            >
              <Suspense fallback={null}>
                <Background />
                <OrbitControls
                  enableZoom={false}
                  rotateSpeed={0.2}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
                <Preload all />
              </Suspense>
            </Canvas>

            <div className="absolute inset-0 z-10">
              <AnimatePresence mode="wait">
                {currentView === 'home' ? (
                  // Home view with Hero and Gallery
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <Gallery />
                    <Footer />
                  </motion.div>
                ) : (
                  // Project details view
                  <motion.div
                    key="project"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectDetails />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
