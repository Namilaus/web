import styles from './Footer.module.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>
          Designed &amp; built by <strong>Sulaiman Atayi</strong>
          <span className={styles.copyright}> · © {currentYear} All rights reserved.</span>
        </p>

        <ul className={styles.links}>
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

        <button
          className={styles.toTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
};
