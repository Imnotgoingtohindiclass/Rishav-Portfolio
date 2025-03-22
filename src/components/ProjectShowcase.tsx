import { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from './projectsData.tsx';

interface ProjectShowcaseProps {
  id: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ id }) => {
  const project = projectsData.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges' | 'outcomes'>('overview');

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={() => window.location.hash = ''}
        className="mb-8 flex items-center text-white/70 hover:text-white"
        whileHover={{ x: -5 }}
        transition={{ duration: 0.2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="ml-2">Back to Gallery</span>
      </motion.button>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
          <p className="text-lg text-gray-300">{project.shortDescription}</p>

          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-800">
            <button
              className={`px-4 py-2 ${activeTab === 'overview' ? 'border-b-2 border-white text-white' : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'challenges' ? 'border-b-2 border-white text-white' : 'text-gray-500'}`}
              onClick={() => setActiveTab('challenges')}
            >
              Challenges
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'outcomes' ? 'border-b-2 border-white text-white' : 'text-gray-500'}`}
              onClick={() => setActiveTab('outcomes')}
            >
              Outcomes
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div>
                <p className="mb-4 text-gray-400">{project.fullDescription}</p>
                <h3 className="mb-2 text-xl font-semibold text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#252525] px-3 py-1 text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Key Challenges</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-400">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Project Outcomes</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-400">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Related Projects Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="mb-8 text-2xl font-bold text-white">Related Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData
            .filter(p => p.id !== id)
            .slice(0, 3)
            .map((relatedProject, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg bg-[#1a1a1a] p-6 transition-all hover:shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.location.hash = `project/${relatedProject.id}`}
              >
                <h3 className="mb-2 text-xl font-semibold text-white">{relatedProject.title}</h3>
                <p className="mb-4 text-gray-400">{relatedProject.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedProject.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-[#252525] px-2 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {relatedProject.technologies.length > 3 && (
                    <span className="rounded-full bg-[#252525] px-2 py-1 text-xs text-white">
                      +{relatedProject.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectShowcase;
