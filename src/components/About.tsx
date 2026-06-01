import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const traits = [
    { icon: '🧠', label: 'Analytical', desc: 'Strong problem-solving mindset' },
    { icon: '⚡', label: 'Fast Learner', desc: 'Quickly adapt to new technologies' },
    { icon: '🔧', label: 'Technical', desc: 'Hands-on experience with systems' },
    { icon: '🎯', label: 'Growth-Oriented', desc: 'Continuously improving skills' },
  ];

  return (
    <section ref={ref} id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About Me</span>
          <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
            Who I Am
          </h2>
        </div>

        <div className={styles.content}>
          <div className={`${styles.text} ${isVisible ? styles.visible : ''}`}>
            <p>
              I'm a Software Engineering student and dual-study trainee at EDEKA IT in Hamburg. My passion lies in backend development, cloud technologies, automation, and data-driven systems.
            </p>
            <p>
              Through internships and practical experience, I've gained hands-on knowledge in software development, IT infrastructure, database systems, Power BI dashboards, and backend technologies like Node.js and MySQL.
            </p>
            <p>
              I enjoy building efficient systems, solving technical challenges, and continuously improving my skills in modern software engineering and cloud environments. I believe in learning by doing and applying new knowledge to real-world problems.
            </p>
          </div>

          <div className={`${styles.traits} ${isVisible ? styles.visible : ''}`}>
            {traits.map((trait, i) => (
              <div
                key={i}
                className={styles.trait}
                style={{
                  animation: `slideInUp 0.6s ease-out ${100 + i * 100}ms backwards`,
                }}
              >
                <div className={styles.icon}>{trait.icon}</div>
                <h3>{trait.label}</h3>
                <p>{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.highlights} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.highlight}>
            <div className={styles.number}>2+</div>
            <div className={styles.label}>Years of Experience</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.number}>5+</div>
            <div className={styles.label}>Tech Stack Areas</div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.number}>3</div>
            <div className={styles.label}>Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
