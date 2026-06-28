import { FiCheckCircle } from 'react-icons/fi';
import { certifications } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <SectionHeader
        tag="Certifications"
        title="Achievements & Certifications"
        subtitle="Continuous learning and professional development"
      />

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert} delay={index * 0.06}>
            <div className="cert-card glass-card">
              <FiCheckCircle className="cert-icon" aria-hidden="true" />
              <span>{cert}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
