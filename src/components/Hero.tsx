import styles from './Hero.module.css';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topLabel}>
            <span className={styles.badge}>Welcome to my portfolio</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.highlight}>Sulaiman Atayi</span>
          </h1>

          <p className={styles.subtitle}>
            Software Engineer | Backend Developer | Cloud Enthusiast
          </p>

          <p className={styles.description}>
            I'm a software engineering student passionate about building scalable systems, automating workflows, and solving technical challenges. Based in Hamburg, Germany.
          </p>

          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className={styles.secondaryBtn} onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>

          <div className={styles.scroll}>
            <span>Scroll to explore</span>
            <div className={styles.scrollIcon}>↓</div>
          </div>
        </div>

        <div className={styles.decorative}>
          <div className={styles.floatingCard1}>
            <div>Backend Dev</div>
          </div>
          <div className={styles.floatingCard2}>
            <div>Cloud & AWS</div>
          </div>
          <div className={styles.floatingCard3}>
            <div>Data Analytics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
