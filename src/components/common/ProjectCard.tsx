import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  delay?: number;
}

export const ProjectCard = ({ title, description, tech, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        animation: `slideInUp 0.5s ease-out ${delay}ms backwards`,
      }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.placeholder}>
            <div className={styles.icon}>📌</div>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.techStack}>
          {tech.map((t, i) => (
            <span key={i} className={styles.techBadge}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.button}>View Project</button>
        </div>
      </div>
    </div>
  );
};
