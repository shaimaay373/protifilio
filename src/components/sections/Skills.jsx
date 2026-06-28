import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiGraphql,
} from 'react-icons/si';
import { FiUsers, FiMessageCircle, FiGlobe } from 'react-icons/fi';
import { skillCategories } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

const iconMap = {
  frontend: SiReact,
  backend: SiNodedotjs,
  database: SiMongodb,
  tools: SiGit,
  code: SiJavascript,
  soft: FiUsers,
  languages: FiGlobe,
};

const accentIcons = {
  Frontend: SiHtml5,
  Backend: SiNodedotjs,
  Database: SiMongodb,
  Tools: SiGraphql,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        tag="Technical Skills"
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with daily"
      />

      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] || FiMessageCircle;
          const AccentIcon = accentIcons[category.title];

          return (
            <ScrollReveal key={category.title} delay={index * 0.06}>
              <div className="skill-card glass-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    <Icon className="skill-icon" aria-hidden="true" />
                    {AccentIcon && <AccentIcon className="skill-icon-accent" aria-hidden="true" />}
                  </div>
                  <h3 className="skill-name">{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
