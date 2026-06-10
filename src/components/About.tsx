import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

const traits = [
  { label: 'Analytical', desc: 'Strong problem-solving mindset' },
  { label: 'Fast Learner', desc: 'Quickly adapt to new technologies' },
  { label: 'Technical', desc: 'Hands-on experience with systems' },
  { label: 'Growth-Oriented', desc: 'Continuously improving skills' },
];

const highlights = [
  { number: '2+', label: 'Years of Experience' },
  { number: '5+', label: 'Tech Stack Areas' },
  { number: '3', label: 'Major Projects' },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className={styles.about}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 01 — About Me</span>
          <h2 className={styles.title}>Who I Am</h2>
        </header>

        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.lead}>
              I'm a Software Engineering student and dual-study trainee at EDEKA IT in Hamburg.
              My passion lies in backend development, cloud technologies, automation, and
              data-driven systems.
            </p>
            <p>
              Through internships and practical experience, I've gained hands-on knowledge in
              software development, IT infrastructure, database systems, Power BI dashboards,
              and backend technologies like Node.js and MySQL.
            </p>
            <p>
              I enjoy building efficient systems, solving technical challenges, and continuously
              improving my skills in modern software engineering and cloud environments. I
              believe in learning by doing and applying new knowledge to real-world problems.
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
