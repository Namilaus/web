import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ProjectCard } from './common/ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Power BI Analytics Dashboard',
    description: 'Automated data visualization and reporting system for operational insights',
    tech: ['Power BI', 'Data Automation', 'SQL', 'Business Intelligence'],
  },
  {
    title: 'Backend API System',
    description: 'RESTful API built with Node.js and MySQL for data management',
    tech: ['Node.js', 'Express', 'MySQL', 'REST API'],
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Infrastructure setup and configuration automation on AWS',
    tech: ['AWS', 'Infrastructure', 'Automation', 'DevOps'],
  },
  {
    title: 'Database Optimization',
    description: 'Query optimization and database performance improvement',
    tech: ['MySQL', 'SQL', 'Database Design', 'Performance'],
  },
  {
    title: 'System Configuration Suite',
    description: 'Automated system installation and configuration toolkit',
    tech: ['System Admin', 'Scripting', 'Automation', 'Configuration'],
  },
  {
    title: 'Full Stack Application',
    description: 'Complete web application with frontend and backend integration',
    tech: ['Next.js', 'React', 'Node.js', 'Database'],
  },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <span className={styles.record}>Rec 04 — My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Placeholder projects showcasing my technical expertise
          </p>
        </header>

        <div className={styles.ledger}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index + 1} delay={index * 90} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Have an exciting project in mind?</p>
          <button className={styles.button} onClick={scrollToContact}>
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};
