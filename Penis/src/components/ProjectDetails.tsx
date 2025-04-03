import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectShowcase from './ProjectShowcase';

// This component serves as a wrapper for the ProjectShowcase component
// It extracts the project ID from the URL and provides it to the showcase
const ProjectDetails = () => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract the project ID from the URL hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        setProjectId(id);
      } else {
        setProjectId(null);
      }
      setLoading(false);
    };

    // Initial setup
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-blue-500 border-white/30"></div>
      </div>
    );
  }

  if (!projectId) {
    return (
      <motion.div
        className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-6 py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-white">Project Not Found</h1>
        <p className="mb-8 text-xl text-gray-400">
          The project you're looking for doesn't exist or the URL is incorrect.
        </p>
        <motion.a
          href="#gallery"
          className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#141414] transition-colors hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Gallery
        </motion.a>
      </motion.div>
    );
  }

  return <ProjectShowcase id={projectId} />;
};

export default ProjectDetails;
