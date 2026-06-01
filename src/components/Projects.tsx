import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ProjectCard } from './common/ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

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

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>My Work</span>
          <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
            Featured Projects
          </h2>
          <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
            Placeholder projects showcasing my technical expertise
          </p>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 80}
            />
          ))}
        </div>

        <div className={`${styles.cta} ${isVisible ? styles.visible : ''}`}>
          <p>Have an exciting project in mind?</p>
          <button className={styles.button}>
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};
