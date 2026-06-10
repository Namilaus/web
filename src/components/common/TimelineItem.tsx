import type { CSSProperties } from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  delay?: number;
}

export const TimelineItem = ({
  title,
  company,
  period,
  location,
  description,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <article
      className={styles.entry}
      style={{ '--entry-delay': `${delay}ms` } as CSSProperties}
    >
      <div className={styles.meta}>
        <p className={styles.period}>{period}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>
        <ul className={styles.description}>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
