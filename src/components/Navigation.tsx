import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home" onClick={() => scrollToSection('home')}>
            <span className={styles.logoBrand}>SA</span>
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection('skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => scrollToSection('experience')}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>

        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};
