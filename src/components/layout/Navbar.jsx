import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ThemeToggle from '../ui/ThemeToggle';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const activeSection = useActiveSection(sectionIds);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar glass-nav" role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" onClick={handleNavClick}>
        <span>//</span> Shaimaa Yasser
      </a>

      {isMobile ? (
        <>
          <div className="nav-actions">
            <ThemeToggle />
            <button
              type="button"
              className="nav-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="mobile-menu glass-card"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <ul className="mobile-nav-links">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={activeSection === link.href.slice(1) ? 'active' : ''}
                        onClick={handleNavClick}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </>
      )}
    </nav>
  );
}
