import { useState } from 'react'

interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  description: string[]
}

interface EducationItem {
  school: string
  degree: string
  period: string
  status?: string
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const skills = {
    'Data & Cloud': ['Power BI', 'AWS', 'Database Design'],
    'Backend': ['Node.js', 'Next.js', 'MySQL'],
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS'],
    'Other': ['System Administration', 'IT Support', 'Problem Solving'],
  }

  const experience: ExperienceItem[] = [
    {
      company: 'EDEKA IT',
      position: 'Dual Student - Applied Computer Science',
      period: 'August 2025 - Present',
      location: 'Hamburg, Germany',
      description: [
        'Development and automation of Power BI dashboards supporting operational processes',
        'Improving data transparency and simplifying data-driven decision making',
        'Building solutions for complex business analytics',
      ],
    },
    {
      company: 'PC Spezialist Cornix IT',
      position: 'IT Intern - Technical Department',
      period: 'August 2024 - September 2024',
      location: 'Bünde, Germany',
      description: [
        'Advanced diagnosis and resolution of complex IT problems',
        'Installation and configuration of complete IT systems including OS installation and data migration',
        'System optimization and performance analysis',
        'Network troubleshooting and customer support',
      ],
    },
    {
      company: 'Etiya',
      position: 'Junior Backend Developer Intern',
      period: 'October 2023 - November 2023',
      location: 'Ankara, Turkey',
      description: [
        'Backend solution development and implementation',
        'Database query optimization and API interface improvements',
        'Technologies: Next.js, Node.js, MySQL',
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      school: 'NORDAKADEMIE',
      degree: 'B.Sc. Software Engineering',
      period: 'January 2026 - March 2029',
      status: 'Current',
    },
    {
      school: 'August-Griese-Berufskolleg',
      degree: 'Fachhochschulreife - Information Technology',
      period: 'August 2022 - July 2025',
    },
    {
      school: 'Erich-Gutenberg-Berufskolleg Bünde',
      degree: 'Fachoberschulreife',
      period: 'August 2021 - June 2022',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text)', transition: 'background-color 0.3s, color 0.3s' }}>
      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg)', backdropFilter: 'blur(10px)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', textDecoration: 'none' }}>
            Sulaiman
          </a>

          {/* Desktop Menu */}
          <div style={{ display: 'none' }} className="hidden md:flex" >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ padding: '0.5rem 0', marginRight: '2rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={toggleDarkMode}
              style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.25rem' }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 1rem', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 'bold', color: 'var(--text-h)', lineHeight: 1.2 }}>
              Hi, I'm Sulaiman Atayi
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text)', maxWidth: '35rem' }}>
              Software Engineering Student | Full-Stack Developer | Dual Study Program
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text)', maxWidth: '50rem', lineHeight: 1.6 }}>
              Currently balancing a dual degree in Software Engineering at NORDAKADEMIE with professional experience at EDEKA IT. Passionate about building scalable solutions with Power BI, AWS, and modern web technologies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--accent)', color: 'white', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', transition: 'opacity 0.2s' }}>
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/sulaimanatayi-589b73328" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer', transition: 'background-color 0.2s' }}>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ padding: '5rem 1rem', backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--accent) 5%)' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--text-h)' }}>About Me</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text)', maxWidth: '50rem', marginBottom: '1.5rem' }}>
              I'm a dual-degree student combining rigorous academic training with real-world professional experience. Currently at EDEKA IT, I focus on data analytics and business intelligence, while pursuing a B.Sc. in Software Engineering at NORDAKADEMIE.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text)', maxWidth: '50rem' }}>
              My journey has taken me from IT support to backend development to data engineering, giving me a broad perspective on how technology serves business needs. I'm driven by solving complex problems and creating meaningful solutions.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '5rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem', color: 'var(--text-h)' }}>Experience & Education</h2>

            {/* Work Experience */}
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-h)' }}>Work Experience</h3>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {experience.map((exp, idx) => (
                  <div key={idx} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: 'var(--text-h)' }}>{exp.position}</h4>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--accent)' }}>{exp.company}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>{exp.period}</p>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text)' }}>{exp.location}</p>
                      </div>
                    </div>
                    <ul style={{ margin: '1rem 0 0', paddingLeft: '1.25rem', color: 'var(--text)' }}>
                      {exp.description.map((desc, didx) => (
                        <li key={didx} style={{ marginBottom: '0.5rem', lineHeight: 1.5 }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-h)' }}>Education</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx} className="card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: 'var(--text-h)' }}>{edu.degree}</h4>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--text)' }}>{edu.school}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>{edu.period}</p>
                        {edu.status && <span style={{ display: 'inline-block', marginTop: '0.25rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: '0.25rem', fontSize: '0.8rem' }}>{edu.status}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: '5rem 1rem', backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--accent) 5%)' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem', color: 'var(--text-h)' }}>Skills & Technologies</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} style={{ padding: '1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--accent)' }}>{category}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {skillList.map((skill) => (
                      <span key={skill} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '5rem 1rem' }}>
          <div style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-h)' }}>Let's Connect</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '2rem', lineHeight: 1.6 }}>
              I'm always interested in discussing new projects, opportunities, or simply connecting with fellow developers and tech enthusiasts.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:sulaiman.atayi@hotmail.com" className="btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '0.5rem', backgroundColor: 'var(--accent)', color: 'white', textDecoration: 'none', fontWeight: 500 }}>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/sulaimanatayi-589b73328" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.75rem 2rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--border) 5%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ margin: 0, color: 'var(--text)' }}>
            © 2025 Sulaiman Atayi. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a
              href="https://www.linkedin.com/in/sulaimanatayi-589b73328"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
            >
              LinkedIn
            </a>
            <a
              href="mailto:sulaiman.atayi@hotmail.com"
              style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
