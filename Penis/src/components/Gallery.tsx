import { useState } from 'react';
import { motion } from 'framer-motion';
import projects from './projects.tsx';

interface CardProps {
  title: string;
  description: string;
  tags?: string[];
  index: number;
  id: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, tags = [], index, id, image }) => {
  return (
    <motion.div
      className="relative cursor-pointer rounded-xl bg-[#1a1a1a] p-4 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      onClick={() => (window.location.hash = `project/${id}`)}
    >
      <div className="flex flex-col h-full w-full overflow-hidden rounded-xl bg-[#252525] p-6">
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <div className="mb-4 w-full overflow-hidden rounded-lg bg-[#2a2a2a] flex-shrink-0">
              {image ? (
                <img src={image} alt={title} className="w-full object-cover h-36" />
              ) : (
                <div className="flex h-36 w-full items-center justify-center text-gray-500">
                  Project Image
                </div>
              )}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="rounded-full bg-[#333333] px-2 py-1 text-xs text-white">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {

  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(Math.min(visibleCount + 2, projects.length));
  };

  return (
    <section id="gallery" className="container mx-auto px-6 py-20">
      <motion.h2
        className="mb-16 text-center text-4xl font-bold text-white md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {projects.slice(0, visibleCount).map((project, index) => (
          <Card
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            index={index}
            image={project.image}
          />
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={showMore}
            className="rounded-full bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
