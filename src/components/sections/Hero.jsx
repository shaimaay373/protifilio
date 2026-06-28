import { motion } from 'framer-motion';
import { FiMapPin, FiDownload } from 'react-icons/fi';
import { personalInfo, summary, highlights } from '../../data/portfolio';
import LazyImage from '../ui/LazyImage';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <ScrollReveal>
          {personalInfo.available && (
            <div className="hero-tag">
              <span className="hero-tag-dot" aria-hidden="true" />
              Open to Internships &amp; Junior Roles
            </div>
          )}

          <h1 className="hero-name">
            {personalInfo.firstName}
            <br />
            {personalInfo.lastName}
          </h1>

          <p className="hero-role">
            // {personalInfo.title.toUpperCase()} | {personalInfo.subtitle.toUpperCase()}
          </p>

          <p className="hero-desc">{summary}</p>

          <p className="hero-location">
            <FiMapPin aria-hidden="true" />
            {personalInfo.location}
          </p>

          <div className="hero-btns">
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-github"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload aria-hidden="true" />
              GitHub Profile
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="left" delay={0.2} className="hero-visual">
        <div className="avatar-ring">
          <div className="avatar-inner">
            <LazyImage
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} - Professional Photo`}
              className="avatar-photo"
            />
          </div>
        </div>

        <div className="hero-stats">
          {highlights.slice(0, 2).map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
