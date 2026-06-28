import { FiBookOpen, FiAward } from 'react-icons/fi';
import { education } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <SectionHeader tag="Education" title="Academic Background" subtitle="Building a strong foundation in technology and business" />

      <ScrollReveal>
        <div className="education-card glass-card">
          <div className="education-icon" aria-hidden="true">
            <FiBookOpen />
          </div>

          <div className="education-content">
            <h3 className="education-institution">{education.institution}</h3>
            <p className="education-degree">{education.degree}</p>

            <div className="education-meta">
              <span className="education-badge">Graduation: {education.graduationYear}</span>
              <span className="education-badge education-badge--gpa">
                <FiAward aria-hidden="true" />
                GPA: {education.gpa}
              </span>
            </div>

            <div className="education-project">
              <h4>Graduation Project</h4>
              <p className="education-project-title">{education.project.title}</p>
              <p className="education-project-desc">{education.project.description}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
