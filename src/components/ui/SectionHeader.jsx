import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <ScrollReveal className="sec-header">
      <span className="sec-tag">{tag}</span>
      <h2 className="sec-title">{title}</h2>
      {subtitle && <p className="sec-subtitle">{subtitle}</p>}
      <div className="sec-line" aria-hidden="true" />
    </ScrollReveal>
  );
}
