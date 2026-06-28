import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Built with React &amp; ❤️ by {personalInfo.name} — {year}
      </p>
      <p className="footer-sub">
        Junior Full-Stack Developer · MERN Stack · {personalInfo.location}
      </p>
    </footer>
  );
}
