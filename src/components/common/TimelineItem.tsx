import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  isLeft?: boolean;
  delay?: number;
}

export const TimelineItem = ({
  title,
  company,
  period,
  location,
  description,
  isLeft = false,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <div
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
      style={{
        animation: `${isLeft ? 'slideInLeft' : 'slideInRight'} 0.6s ease-out ${delay}ms backwards`,
      }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.meta}>
          {period} • {location}
        </p>
        <ul className={styles.description}>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
