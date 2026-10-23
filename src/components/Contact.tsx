import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sulaiman-atayi-589b73328' },
  { label: 'GitHub', url: 'https://github.com/Namilaus' },
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
          Let's Talk
          <br />
          About What You're Building<span className={styles.titleMark}>.</span>
        </h2>

        <p className={styles.description}>
          Have a question about my work, a technical idea to exchange, or a project you'd
          like to discuss? Send me an email or connect with me on LinkedIn.
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

          <p className={styles.location}>Dual study with EDEKA IT · Hamburg, Germany</p>
        </div>
      </div>
    </section>
  );
};
