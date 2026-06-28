import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

const contactLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
    icon: FiMail,
    text: personalInfo.email,
  },
  {
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    label: 'Phone',
    icon: FiPhone,
    text: personalInfo.phone,
  },
  {
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    icon: FiLinkedin,
    text: 'LinkedIn Profile',
    external: true,
  },
  {
    href: personalInfo.github,
    label: 'GitHub',
    icon: FiGithub,
    text: 'GitHub Profile',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <SectionHeader
        tag="Contact"
        title="Let's Connect"
        subtitle="Open to internships, junior developer roles, and collaboration"
      />

      <ScrollReveal>
        <div className="contact-card glass-card">
          <p className="contact-intro">
            I'm actively seeking internship and junior full-stack developer opportunities. Whether
            you have a role, a project idea, or just want to connect — I'd love to hear from you.
          </p>

          <p className="contact-location">
            <FiMapPin aria-hidden="true" />
            {personalInfo.location}
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon aria-hidden="true" />
                <span>{link.text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
