import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Designed & built by <strong>Sulaiman Atayi</strong>
          </p>
          <p className={styles.copyright}>
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className={styles.links}>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            About
          </a>
          <a href="#skills" onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
