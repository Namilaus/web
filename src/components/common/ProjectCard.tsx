import type { CSSProperties } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  detail: string;
  status: string;
  tech: string[];
  url: string;
  flowLabel: string;
  flow: string[];
  index: number;
  delay?: number;
}

export const ProjectCard = ({ title, description, detail, status, tech, url, flowLabel, flow, index, delay = 0 }: ProjectCardProps) => {
  return (
    <article
      className={styles.row}
      style={{ '--entry-delay': `${delay}ms` } as CSSProperties}
    >
      <span className={styles.index}>{String(index).padStart(2, '0')}</span>

      <div className={styles.body}>
        <p className={styles.status}>{status}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.detail}>{detail}</p>
        <div className={styles.flow}>
          <p className={styles.flowLabel}>{flowLabel}</p>
          <ol>{flow.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <a className={styles.sourceLink} href={url} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source on GitHub (opens in a new tab)`}>
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
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
