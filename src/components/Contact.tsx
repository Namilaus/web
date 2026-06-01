import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    {
      icon: '💼',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/sulaiman-atayi-589b73328',
    },
    {
      icon: '📧',
      label: 'Email',
      url: 'mailto:sulaiman.atayi@hotmail.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      url: 'https://github.com',
    },
  ];

  return (
    <section ref={ref} id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Get in Touch</span>
          <h2 className={styles.title}>Let's Build Something Together</h2>
          <p className={styles.description}>
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className={styles.social}>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{
                  animation: `slideInUp 0.6s ease-out ${200 + i * 100}ms backwards`,
                }}
              >
                <span className={styles.icon}>{link.icon}</span>
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            ))}
          </div>

          <div className={styles.contact_info}>
            <p>📍 Hamburg, Germany</p>
            <p>💌 sulaiman.atayi@hotmail.com</p>
          </div>
        </div>

        <div className={`${styles.decorative} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </section>
  );
};
