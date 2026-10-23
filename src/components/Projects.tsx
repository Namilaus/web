import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ProjectCard } from './common/ProjectCard';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 01 — My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Selected personal projects in infrastructure, web development, and automation.
          </p>
        </header>

        <div className={styles.ledger}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index + 1} delay={index * 90} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Curious about a project or a technical decision?</p>
          <a className={styles.button} href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
