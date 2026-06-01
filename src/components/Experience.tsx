import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TimelineItem } from './common/TimelineItem';
import styles from './Experience.module.css';

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

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
      isLeft: true,
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
      isLeft: false,
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
      isLeft: true,
    },
  ];

  return (
    <section ref={ref} id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>My Journey</span>
          <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
            Experience
          </h2>
        </div>

        <div className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              {...exp}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
