import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <div
      className={styles.badge}
      style={{
        animation: `slideInUp 0.5s ease-out ${delay}ms backwards`,
      }}
    >
      {name}
    </div>
  );
};
