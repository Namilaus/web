import type { CSSProperties } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  delay?: number;
}

export const ProjectCard = ({ title, description, tech, index, delay = 0 }: ProjectCardProps) => {
  return (
    <article
      className={styles.row}
      style={{ '--entry-delay': `${delay}ms` } as CSSProperties}
    >
      <span className={styles.index}>{String(index).padStart(2, '0')}</span>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <p className={styles.tech}>
        {tech.map((t, i) => (
          <span key={t}>
            {t}
            {i < tech.length - 1 && <span className={styles.techSep} aria-hidden="true"> · </span>}
          </span>
        ))}
      </p>
    </article>
  );
};
