import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SkillBadge } from './common/SkillBadge';
import styles from './Skills.module.css';

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['JavaScript', 'Node.js', 'Next.js', 'REST APIs', 'Backend Development'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      skills: ['Amazon Web Services (AWS)', 'IT Infrastructure', 'System Configuration', 'Networking', 'System Optimization'],
    },
    {
      title: 'Data & Analytics',
      icon: '📊',
      skills: ['Power BI', 'Dashboard Automation', 'Data Visualization', 'Data Analysis', 'Database Design'],
    },
    {
      title: 'Software Engineering',
      icon: '🔬',
      skills: ['Software Architecture', 'Problem Solving', 'Technical Analysis', 'Agile Collaboration', 'Debugging'],
    },
  ];

  return (
    <section ref={ref} id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>What I Know</span>
          <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
            Technical Skills
          </h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={styles.category}
              style={{
                animation: `slideInUp 0.6s ease-out ${categoryIndex * 100}ms backwards`,
              }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skillIndex}
                    name={skill}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.focus} ${isVisible ? styles.visible : ''}`}>
          <h3>Current Focus</h3>
          <p>
            I'm particularly interested in backend systems, cloud technologies, automation, and data engineering. I enjoy combining software engineering principles with business understanding to build scalable, efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
