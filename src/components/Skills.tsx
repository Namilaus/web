import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SkillBadge } from './common/SkillBadge';
import { skillCategories } from '../data/portfolio';
import styles from './Skills.module.css';

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className={styles.skills}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 04 — Tools & Practice</span>
          <h2 className={styles.title}>Technical Skills</h2>
        </header>

        <div className={styles.manifest}>
          {skillCategories.map((category, i) => (
            <div key={category.code} className={styles.row} style={{ transitionDelay: `${i * 110}ms` }}>
              <span className={styles.code}>{category.code}</span>
              <div>
                <h3 className={styles.category}>{category.title}</h3>
                <p className={styles.context}>{category.context}</p>
              </div>
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
            I'm deepening my understanding of cloud infrastructure and software delivery,
            combining practical work at EDEKA IT with experiments in my own GitOps homelab.
          </p>
        </aside>
      </div>
    </section>
  );
};
