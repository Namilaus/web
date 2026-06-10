import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sulaiman-atayi-589b73328' },
  { label: 'GitHub', url: 'https://github.com' },
];

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className={styles.contact}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 05 — Get in Touch</span>
        </header>

        <h2 className={styles.title}>
          Let's Build
          <br />
          Something Together<span className={styles.titleMark}>.</span>
        </h2>

        <p className={styles.description}>
          I'm always interested in hearing about new projects and opportunities. Whether you
          have a question or just want to say hello, feel free to reach out!
        </p>

        <a className={styles.email} href="mailto:sulaiman.atayi@hotmail.com">
          sulaiman.atayi@hotmail.com
          <span className={styles.emailArrow} aria-hidden="true">↗</span>
        </a>

        <div className={styles.meta}>
          <ul className={styles.social}>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.location}>Hamburg, Germany — 53.55° N / 9.99° E</p>
        </div>
      </div>
    </section>
  );
};
