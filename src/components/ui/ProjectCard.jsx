import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ImageGallery, { getProjectIcon } from './ImageGallery';
import ScrollReveal from './ScrollReveal';

export default function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.article
        className="project-card glass-card"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <ImageGallery
          images={project.images}
          title={project.title}
          gradient={project.gradient}
          fallbackIcon={getProjectIcon(project.id)}
        />

        <div className="project-body">
          <span className="project-type">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="project-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--github"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn--demo"
              >
                <FiExternalLink aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}
