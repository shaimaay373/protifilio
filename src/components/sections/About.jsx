import { personalInfo, summary, highlights, skillCategories } from '../../data/portfolio';
import LazyImage from '../ui/LazyImage';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  const topSkills = skillCategories
    .filter((c) => ['Frontend', 'Backend', 'Database', 'Tools'].includes(c.title))
    .flatMap((c) => c.skills)
    .slice(0, 12);

  return (
    <section id="about" className="section section-alt">
      <SectionHeader tag="About Me" title="Who I Am" subtitle="Passionate about building meaningful web experiences" />

      <div className="about-grid">
        <ScrollReveal className="about-photo-wrap">
          <div className="about-photo-frame glass-card">
            <LazyImage
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} - About Me`}
              className="about-photo"
            />
          </div>
          <div className="about-contact-quick">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="about-text">
          <p>{summary}</p>
          <p>
            I specialize in building full-stack applications with the MERN stack — from responsive
            frontends with React and Next.js to secure REST APIs with Node.js, Express, and MongoDB.
            I enjoy turning ideas into polished, user-friendly products.
          </p>
          <p>
            Currently training at ITI Assiut (ICC) and continuously expanding my skills through
            hands-on projects, teamwork, and real-world problem solving.
          </p>

          <div className="skills-list">
            {topSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="about-metrics">
          {highlights.map((item) => (
            <div key={item.label} className="metric-card glass-card">
              <span className="metric-num">{item.value}</span>
              <span className="metric-label">{item.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
