import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

const traits = [
  { label: 'Cloud & CI', desc: 'Infrastructure monitoring, automation, and code quality checks' },
  { label: 'Backend & APIs', desc: 'Practical experience with Node.js, Next.js, and MySQL' },
  { label: 'Data & reporting', desc: 'Power BI dashboards for operational visibility' },
];

const highlights = [
  { number: 'Since 2025', label: 'Dual study at EDEKA IT' },
  { number: 'Cloud & CI', label: 'Current practical focus' },
  { number: 'Hands-on', label: 'Learning through personal projects' },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className={styles.about}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 03 — About Me</span>
          <h2 className={styles.title}>About &amp; Education</h2>
        </header>

        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.lead}>
              I'm a Software Engineering student at NORDAKADEMIE, combining my degree
              with practical experience at EDEKA IT in Hamburg.
            </p>
            <p>
              My work brings together cloud infrastructure, automated code checks, and
              Power BI reporting. Earlier internships introduced me to backend development,
              databases, system configuration, and troubleshooting.
            </p>
            <p>
              Outside my studies, I explore how systems work by building them: from a
              GitOps Kubernetes homelab to web interfaces and Python data pipelines.
            </p>
          </div>

          <ul className={styles.traits}>
            {traits.map((trait, i) => (
              <li key={i} className={styles.trait} style={{ transitionDelay: `${150 + i * 90}ms` }}>
                <span className={styles.traitMark} aria-hidden="true">+</span>
                <div>
                  <h3 className={styles.traitLabel}>{trait.label}</h3>
                  <p className={styles.traitDesc}>{trait.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.education}>
          <span className={styles.record}>Education</span>
          <div>
            <h3>NORDAKADEMIE Hochschule der Wirtschaft</h3>
            <p>B.Sc. Software Engineering · Dual study with EDEKA IT</p>
            <p className={styles.educationMeta}>August 2025 – Expected November 2028</p>
          </div>
          <div>
            <h3>August-Griese-Berufskolleg</h3>
            <p>Fachhochschulreife · Information Technology</p>
            <p className={styles.educationMeta}>August 2022 – July 2025</p>
          </div>
        </div>

        <dl className={styles.highlights}>
          {highlights.map((item, i) => (
            <div key={i} className={styles.highlight} style={{ transitionDelay: `${200 + i * 110}ms` }}>
              <dd className={styles.number}>{item.number}</dd>
              <dt className={styles.numberLabel}>{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
