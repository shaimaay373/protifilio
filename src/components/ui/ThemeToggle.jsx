import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-icon" aria-hidden="true">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="theme-btn-track">
        <span className={`theme-btn-thumb ${theme === 'light' ? 'light' : ''}`} />
      </span>
    </button>
  );
}
