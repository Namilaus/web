import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from './Navigation.module.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          S.&thinsp;Atayi
          <span className={styles.brandPort}>/ HH</span>
        </a>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to day theme' : 'Switch to night theme'}
          >
            <span className={styles.beacon} aria-hidden="true" />
            {theme === 'dark' ? 'Day' : 'Night'}
          </button>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
