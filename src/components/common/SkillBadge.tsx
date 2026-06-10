import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return <span className={styles.badge}>{name}</span>;
};
