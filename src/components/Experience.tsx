import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TimelineItem } from './common/TimelineItem';
import { experiences } from '../data/portfolio';
import styles from './Experience.module.css';

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="experience" className={styles.experience}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 02 — My Journey</span>
          <h2 className={styles.title}>Experience</h2>
        </header>

        <div className={styles.logbook}>
          {experiences.map((exp, index) => (
            <TimelineItem key={`${exp.company}-${exp.period}`} {...exp} delay={index * 140} />
          ))}
        </div>
      </div>
    </section>
  );
};
