import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <SectionHeader
        tag="Experience & Training"
        title="My Journey"
        subtitle="Internships, training programs, and community involvement"
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.08}>
            <article className="timeline-item glass-card">
              <div className="timeline-marker" aria-hidden="true">
                <FiBriefcase />
              </div>
              <div className="timeline-content">
                <span className="timeline-type">{item.type}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <time className="timeline-period">{item.period}</time>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
