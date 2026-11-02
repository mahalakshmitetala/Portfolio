import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import heroPhoto from "./assets/mahalakshmi.jpg";
import crowdImage from "./assets/crowd-monitoring.webp";
import vanisevaImage from "./assets/vaniseva.webp";
import callmedexImage from "./assets/callmedex.webp";
import organDonationImage from "./assets/blockchain-organ-donation.webp";

import {
  siPython,
  siMysql,
  siTensorflow,
  siPytorch,
  siScikitlearn,
  siOpencv,
  siFastapi,
  siNodedotjs,
  siExpress,
  siReact,
  siStreamlit,
  siJavascript,
  siTailwindcss,
  siMongodb,
  siGit,
  siDocker,
} from "simple-icons";

const projects = [
  {
    id: "crowd",
    category: "COMPUTER VISION",
    title: "Smart Crowd Monitoring System",
    description:
      "A computer-vision MVP that combines people counting and crowd-density estimation with threshold-based email alerts.",
    stack: ["Python", "PyTorch", "OpenCV", "YOLOv8", "CSRNet", "Streamlit"],
    status: "Live demo",
    image: crowdImage,
    alt: "A large public gathering representing the crowd-monitoring use case",
    github:
      "https://github.com/mahalakshmitetala/Smart-Crowd-Monitoring-System",
    demo: "https://smart-crowd-monitoring-system.streamlit.app",
    current:
      "Analyses uploaded images and videos, generates crowd-density visualizations, counts people, and sends email alerts when configured thresholds are exceeded.",
    impact:
      "Could support crowd-management teams in identifying dense areas at railway stations, bus terminals, religious gatherings, stadiums, and concerts.",
    future:
      "Live CCTV integration, on-site validation, reliable real-time alerting, and testing with crowd-management teams would be needed before evaluating its effectiveness for stampede prevention.",
    evaluation: [
      {
        part: "PART A",
        density: "HIGH CROWD DENSITY",
        mae: "78.89",
        rmse: "122.78",
      },
      {
        part: "PART B",
        density: "MEDIUM CROWD DENSITY",
        mae: "11.59",
        rmse: "19.57",
      },
    ],
  },
  {
    id: "vaniseva",
    number: "02",
    category: "CIVIC TECHNOLOGY · NLP",
    title: "VaniSeva",
    description:
      "A multilingual civic grievance system supporting six Indian languages, combining language translation and NLP-based complaint categorization to simplify civic issue reporting.",
    stack: ["Python", "scikit-learn", "MongoDB", "Streamlit"],
    status: "Live demo",
    image: vanisevaImage,
    alt: "Public civic building representing access to government services",
    github: "https://github.com/mahalakshmitetala/VaniSeva",
    demo: "https://vaniseva.streamlit.app",
    current:
      "Supports Romanized text, native-language text, and voice input, then classifies complaints using an English-language model with translation at the API layer.",
    impact:
      "Aims to reduce language and usability barriers for citizens, including people who find English-language complaint forms difficult to use.",
    future:
      "Potential extensions include government department API integration, complaint tracking, more regional languages and dialects, and SMS access for people without smartphones.",
    metric: "94.81% accuracy on the English-text evaluation.",
    metricNote:
      "This result applies to the English-text evaluation only, not to a combined evaluation across all six languages.",
  },
  {
    id: "callmedex",
    number: "03",
    category: "HEALTHCARE SOFTWARE",
    title: "CallMedex",
    description:
      "A healthcare platform for appointment booking, teleconsultation workflows, and branch-level staff supervision.",
    stack: ["React", "Node.js", "Express.js", "MySQL"],
    status: "In development",
    image: callmedexImage,
    alt: "Healthcare professional using digital medical technology",
    github: null,
    demo: null,
    current:
      "Contributed to a supervisor dashboard, role-based permissions, branch-filtered views, staff approval workflows, appointment booking, and debugging.",
    impact:
      "Designed to support appointment workflows and supervisor operations for a healthcare setting. The platform has not launched, so real-world outcomes have not yet been established.",
    future:
      "Further development, testing with the intended users, and deployment would be needed to evaluate its operational benefits.",
    metric: null,
    metricNote: null,
  },
  {
    id: "organ",
    number: "04",
    category: "BLOCKCHAIN · HEALTHCARE",
    title: "Blockchain Organ Donation Platform",
    description:
      "A prototype exploring how blockchain records could improve traceability in donor and recipient registration workflows.",
    stack: ["Solidity", "Ethereum", "Web3.js", "Node.js", "MongoDB"],
    status: "Source available",
    image: organDonationImage,
    alt: "Clinical healthcare setting representing organ donation and transplant coordination",
    github: "https://github.com/nikithatyada-eng/bct_project",
    demo: null,
    current:
      "Supports donor and recipient registration, MetaMask transaction confirmation, smart-contract records, database records linked by transaction hash, and an admin matching workflow.",
    impact:
      "Explores whether traceable records could help make donation workflows more auditable and support accountability in organ allocation.",
    future:
      "A real-world system would require medical and legal oversight, transparent allocation policies, privacy safeguards, and rigorous validation. Blockchain alone cannot guarantee fair allocation or prevent misuse.",
    metric: null,
    metricNote: null,
  },
];

function SkillItem({ name, icon }) {
  return (
    <div className="skill-item">
      {name === "Java" ? (
        /* Java: blue cup + red steam */
        <svg
          className="skill-icon"
          viewBox="0 0 48 48"
          fill="none"
          aria-label="Java logo"
        >
          {/* Red steam */}
          <path
            d="M20 3C29 12 11 16 21 23M29 2C39 12 20 17 30 23"
            stroke="#E53935"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Blue cup */}
          <path
            d="M10 25H34C34 34 30 38 22 38C14 38 10 34 10 25Z"
            stroke="#1683C7"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M34 27H38C44 27 43 35 35 35M8 42C17 46 31 46 40 42"
            stroke="#1683C7"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ) : name === "SQL" ? (
        /* SQL: blue database */
        <svg
          className="skill-icon"
          viewBox="0 0 48 48"
          fill="none"
          aria-label="SQL database logo"
        >
          <path
            d="M5 10C5 5 14 2 24 2S43 5 43 10V38C43 43 34 46 24 46S5 43 5 38V10Z"
            fill="#42A5D9"
          />
          <ellipse cx="24" cy="10" rx="19" ry="8" fill="#80C5E8" />
          <path
            d="M5 23C5 28 14 31 24 31S43 28 43 23M5 36C5 41 14 44 24 44S43 41 43 36"
            stroke="#A7D9F0"
            strokeWidth="2"
          />
          <circle cx="12" cy="19" r="2" fill="#A7D9F0" />
          <circle cx="12" cy="32" r="2" fill="#A7D9F0" />
        </svg>
      ) : icon ? (
        <svg
          className="skill-icon"
          viewBox="0 0 24 24"
          role="img"
          aria-label={`${name} logo`}
          style={{
            color: name === "Express.js" ? "var(--text)" : `#${icon.hex}`,
          }}
        >
          <path d={icon.path} fill="currentColor" />
        </svg>
      ) : null}

      <span>{name}</span>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning,"
      : hour < 17
        ? "Good Afternoon,"
        : "Good Evening,";

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`portfolio ${theme}`} id="home">
      <header className="topbar">
        <a className="wordmark" href="#home">
          DevByMaha
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-meta">
          <span className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="hero-heading">
          <h1>
            <span>SOFTWARE</span>
            <span>
              ENGINEER<span className="accent">.</span>
            </span>
          </h1>

          <div className="hero-tags">
            <span>PYTHON</span>
            <span>AI / ML</span>
            <span>WEB DEVELOPMENT</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="photo-placeholder" aria-label="Mahalakshmi's photo">
            <img src={heroPhoto} alt="Mahalakshmi" className="hero-photo" />

            <i className="photo-corner corner-tl" />
            <i className="photo-corner corner-tr" />
            <i className="photo-corner corner-bl" />
            <i className="photo-corner corner-br" />
          </div>

          <div className="hero-intro">
            <p className="hero-greeting">{greeting}</p>

            <div className="hero-name-block">
              <p className="hero-name-intro">This is</p>
              <h1 className="hero-name">Mahalakshmi</h1>
            </div>

            <p className="hero-tagline">
              Serious about software.
              <br />
              Curious about what's possible.
            </p>

            <p className="hero-location">
              INDIA · FINAL-YEAR ENGINEERING STUDENT
            </p>

            <a href="#work" className="hero-cta">
              <span>EXPLORE MY WORK</span>
              <span className="hero-cta-arrow" aria-hidden="true">
                ↘
              </span>
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>DESIGNED TO SOLVE REAL PROBLEMS</span>
          <span>PORTFOLIO / 2026</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-copy">
            {/* <p className="section-kicker">ABOUT</p> */}
            <h2>ABOUT</h2>

            <p className="about-description">
              A Python-focused aspiring software engineer who enjoys solving
              problems and building practical applications across AI, machine
              learning, backend development, and full-stack development.
            </p>

            <p className="about-secondary">
              I enjoy exploring how things work, learning new technologies, and
              turning ideas into useful software through hands-on projects.
            </p>
          </div>

          <div className="skills-panel">
            <div className="skill-group">
              <h3>LANGUAGES</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="Python" icon={siPython} />
                <SkillItem name="Java" />
                <SkillItem name="SQL" />
              </div>
            </div>

            <div className="skill-group">
              <h3>AI & ML</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="TensorFlow" icon={siTensorflow} />
                <SkillItem name="PyTorch" icon={siPytorch} />
                <SkillItem name="scikit-learn" icon={siScikitlearn} />
                <SkillItem name="OpenCV" icon={siOpencv} />
              </div>
            </div>

            <div className="skill-group">
              <h3>BACKEND</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="FastAPI" icon={siFastapi} />
                <SkillItem name="Node.js" icon={siNodedotjs} />
                <SkillItem name="Express.js" icon={siExpress} />
              </div>
            </div>

            <div className="skill-group">
              <h3>FRONTEND</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="React" icon={siReact} />
                <SkillItem name="Streamlit" icon={siStreamlit} />
                <SkillItem name="JavaScript" icon={siJavascript} />
                <SkillItem name="Tailwind CSS" icon={siTailwindcss} />
              </div>
            </div>

            <div className="skill-group">
              <h3>DATABASES</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="MySQL" icon={siMysql} />
                <SkillItem name="MongoDB" icon={siMongodb} />
              </div>
            </div>

            <div className="skill-group">
              <h3>TOOLS</h3>
              <div className="skill-tags skill-list">
                <SkillItem name="Git" icon={siGit} />
                <SkillItem name="Docker" icon={siDocker} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="projects-intro">
          <p className="section-kicker" data-reveal="fade">
            SELECTED WORK
          </p>
          <h2 data-reveal="up">PROJECTS WITH A PURPOSE.</h2>
          <p data-reveal="fade">
            Practical software, real problems, and ideas worth developing
            further.
          </p>
        </div>

        <div className="featured-project">
          {projects.slice(0, 1).map((project) => (
            <article className="project-feature" key={project.id}>
              <div className="project-feature-copy" data-reveal="left">
                <p className="project-number">{project.category}</p>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.evaluation && (
                  <div className="project-evaluation">
                    <p className="evaluation-heading">MODEL PERFORMANCE</p>

                    {project.evaluation.map((result) => (
                      <div className="evaluation-group" key={result.part}>
                        <p className="evaluation-density">
                          {result.part} <span>· {result.density}</span>
                        </p>

                        <div className="evaluation-metrics">
                          <div className="evaluation-metric">
                            <strong>{result.mae}</strong>
                            <span>MAE</span>
                          </div>

                          <div className="evaluation-metric">
                            <strong>{result.rmse}</strong>
                            <span>RMSE</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <p className="evaluation-note">
                      CSRNet · ShanghaiTech Crowd Counting Dataset · Test-set
                      evaluation
                    </p>
                  </div>
                )}

                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        className="source-button"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW SOURCE
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="demo-button"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE DEMO
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div
                className={`project-feature-visual project-visual-${project.id}`}
                data-reveal="scale"
              >
                <img src={project.image} alt={project.alt} />
              </div>
            </article>
          ))}
        </div>

        <div className="project-list-heading" data-reveal="fade">
          <p className="section-kicker">MORE WORK</p>
          <p>Different challenges. Different approaches.</p>
        </div>

        <div className="project-grid">
          {projects.slice(1).map((project) => (
            <article className="project-card" key={project.id} data-reveal="up">
              <div
                className={`project-card-visual project-visual-${project.id}`}
              >
                <img src={project.image} alt={project.alt} loading="lazy" />
              </div>

              <div className="project-card-content">
                <p className="project-number">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <p className="project-status">
                  <span className="status-dot" />
                  {project.status}
                </p>

                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        className="source-button"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW SOURCE
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="demo-button"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE DEMO
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <p className="section-kicker">IN THE INDUSTRY</p>

        <div className="experience-layout">
          <div className="experience-heading" data-reveal="left">
            <h2>My first step into professional software development.</h2>
            <p className="experience-date">MAY — JULY 2026</p>
          </div>

          <div className="experience-details" data-reveal="right">
            <h3>Lumora Systems Private Limited</h3>

            <div className="experience-divider" />

            <p>
              My internship introduced me to developing software around real
              client requirements, collaborating with teammates through GitHub,
              and contributing to an existing healthcare application.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-layout">
        <div className="contact-left" data-reveal="fade">
          <p className="contact-heading">LET&apos;S CONNECT</p>

          <p className="contact-description">
            I&apos;m always open to opportunities, collaborations, and ideas
            worth building.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/mahalakshmitetala"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mahalakshmi-tetala-a952a1331/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>

            <a href="mailto:tetalamahalakshmi@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-right" data-reveal="pop">
          <div className="contact-rule" />

          <div className="contact-email-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>

          <p className="contact-label">DROP ME A LINE</p>

          <a
            className="contact-email-address"
            href="mailto:tetalamahalakshmi@gmail.com"
          >
            <span>TETALAMAHALAKSHMI</span>
            <span className="email-domain">@GMAIL.COM</span>
          </a>

          <button
            className="copy-email"
            type="button"
            onClick={() =>
              navigator.clipboard.writeText("tetalamahalakshmi@gmail.com")
            }
          >
            COPY ADDRESS
          </button>
        </div>
      </footer>
    </main>
  );
}

export default App;
