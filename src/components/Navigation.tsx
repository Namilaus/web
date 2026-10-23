import { useEffect, useState } from 'react';
import { sectionLinks } from '../data/portfolio';
import styles from './Navigation.module.css';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navigation = ({ theme, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <nav aria-label="Main navigation" className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.brand}
          onClick={() => setIsOpen(false)}
        >
          S.&thinsp;Atayi
          <span className={styles.brandPort}>/ HH</span>
        </a>

        <ul id="navigation-menu" className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
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
            id="menu-toggle"
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
