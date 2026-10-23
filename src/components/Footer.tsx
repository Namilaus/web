import styles from './Footer.module.css';
import { sectionLinks } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>
          Designed &amp; built by <strong>Sulaiman Atayi</strong>
          <span className={styles.copyright}> · © {currentYear} All rights reserved.</span>
        </p>

        <ul className={styles.links}>
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className={styles.toTop}
          href="#home"
        >
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};
