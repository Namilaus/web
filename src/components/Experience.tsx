import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TimelineItem } from './common/TimelineItem';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Dual Student Applied Computer Science',
    company: 'EDEKA IT',
    period: 'August 2025 – Present',
    location: 'Hamburg, Germany',
    description: [
      'Development and automation of Power BI dashboards',
      'Improvement of operational data transparency',
      'Supporting data-driven decision making',
      'Process optimization through analytics and automation',
    ],
  },
  {
    title: 'Backend Development Intern',
    company: 'Etiya',
    period: 'October 2023 – November 2023',
    location: 'Ankara, Turkey',
    description: [
      'Worked on backend development tasks',
      'Assisted with database query optimization',
      'Supported API development and integration',
      'Worked with Node.js, Next.js, and MySQL',
    ],
  },
  {
    title: 'IT Intern',
    company: 'PC Spezialist Cornix IT',
    period: '2020 & 2024',
    location: 'Bünde, Germany',
    description: [
      'Diagnosed and solved hardware/software issues',
      'Installed and configured IT systems',
      'Assisted with operating system installations and migrations',
      'Performed system optimization and troubleshooting',
    ],
  },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="experience" className={styles.experience}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 03 — My Journey</span>
          <h2 className={styles.title}>Experience</h2>
        </header>

        <div className={styles.logbook}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} delay={index * 140} />
          ))}
        </div>
      </div>
    </section>
  );
};
