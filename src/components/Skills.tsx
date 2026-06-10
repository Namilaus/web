import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SkillBadge } from './common/SkillBadge';
import styles from './Skills.module.css';

const skillCategories = [
  {
    code: 'BCK',
    title: 'Backend Development',
    skills: ['JavaScript', 'Node.js', 'Next.js', 'REST APIs', 'Backend Development'],
  },
  {
    code: 'CLD',
    title: 'Cloud & Infrastructure',
    skills: [
      'Amazon Web Services (AWS)',
      'IT Infrastructure',
      'System Configuration',
      'Networking',
      'System Optimization',
    ],
  },
  {
    code: 'DAT',
    title: 'Data & Analytics',
    skills: ['Power BI', 'Dashboard Automation', 'Data Visualization', 'Data Analysis', 'Database Design'],
  },
  {
    code: 'ENG',
    title: 'Software Engineering',
    skills: ['Software Architecture', 'Problem Solving', 'Technical Analysis', 'Agile Collaboration', 'Debugging'],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className={styles.skills}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 02 — What I Know</span>
          <h2 className={styles.title}>Technical Skills</h2>
        </header>

        <div className={styles.manifest}>
          {skillCategories.map((category, i) => (
            <div key={category.code} className={styles.row} style={{ transitionDelay: `${i * 110}ms` }}>
              <span className={styles.code}>{category.code}</span>
              <h3 className={styles.category}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className={styles.focus}>
          <span className={styles.focusLabel}>Current Focus</span>
          <p className={styles.focusText}>
            I'm particularly interested in backend systems, cloud technologies, automation, and
            data engineering. I enjoy combining software engineering principles with business
            understanding to build scalable, efficient solutions.
          </p>
        </aside>
      </div>
    </section>
  );
};
