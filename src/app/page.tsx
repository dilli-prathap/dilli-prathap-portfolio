
"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

/* =========================================================
   EASY EDIT SECTION
   Update your image, statistics, projects, skills and
   certifications here. The website design is below.
========================================================= */

// Add your photo later: public/profile.jpg
const PROFILE_IMAGE = "";
const EMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=dilliprathap.in%40gmail.com&su=Portfolio%20Enquiry";
// Update these values whenever your achievements change.
const portfolioStats = [
  { value: "13+", label: "Projects developed" },
  { value: "100+", label: "LeetCode solved" },
  { value: "20+", label: "Certifications" },
  { value: "2028", label: "Expected graduation" },
];

// Social profile links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dilli-prathap",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dilli-prathap-607158426/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: EMAIL_LINK,
    icon: Mail,
  },
];

// Project filter categories
const categories = [
  "All",
  "DevOps",
  "Cloud",
  "Software Development",
  "AI & ML",
  "Data Analytics",
  "IoT & Embedded",
];

// PROJECTS
// To add a project, copy one object and edit its details.
// A project can appear in multiple categories using separate entries.
// Keep each number unique.

const projects = [
  // DEVOPS
  {
    title: "AI-Driven Self-Healing CI/CD Pipeline",
    category: "DevOps",
    status: "Built",
    description:
      "An AI-powered pipeline that detects failed GitHub Actions workflows, analyses logs, generates code fixes, and creates a pull request for developer review.",
    tech: ["GitHub Actions", "n8n", "OpenAI", "Node.js", "GitHub API"],
    github: "https://github.com/dilli-prathap/Self-Healing-CI-CD-pipeline",
    number: "01",
    icon: Workflow,
    featured: true,
  },
  {
    title: "AI-Powered Cloud-Native Observability",
    category: "DevOps",
    status: "Built",
    description:
      "A Kubernetes microservices observability platform combining OpenTelemetry, Prometheus, Grafana, Jaeger and AI-assisted investigation.",
    tech: ["Kubernetes", "Docker", "OpenTelemetry", "Grafana", "Jenkins"],
    github: "https://github.com/dilli-prathap/AI-Observability",
    number: "02",
    icon: Terminal,
    featured: true,
  },
  {
    title: "AWS Static Website Deployment",
    category: "DevOps",
    status: "Built",
    description:
      "Automated AWS infrastructure provisioning with Terraform and Amazon S3 static website hosting.",
    tech: ["AWS", "Terraform", "Amazon S3", "IaC"],
    github: "https://github.com/dilli-prathap/S3-StaticWebsite-Terraform",
    number: "03",
    icon: Cloud,
  },
  {
    title: "Employee Management System",
    category: "DevOps",
    status: "Built",
    description:
      "A three-tier employee management application with REST APIs, a MySQL database, Docker containers and Kubernetes deployment.",
    tech: ["Node.js", "Express.js", "MySQL", "Docker", "Kubernetes"],
    github: "https://github.com/dilli-prathap/Employee-Management-System",
    number: "04",
    icon: Workflow,
  },

  // CLOUD
  {
    title: "AWS Static Website Deployment",
    category: "Cloud",
    status: "Built",
    description:
      "Automated AWS infrastructure provisioning with Terraform and Amazon S3 static website hosting.",
    tech: ["AWS", "Terraform", "Amazon S3", "IaC"],
    github: "https://github.com/dilli-prathap/S3-StaticWebsite-Terraform",
    number: "05",
    icon: Cloud,
  },
  {
    title: "AWS Translation Bot",
    category: "Cloud",
    status: "Built",
    description:
      "A cloud-based multilingual translation application integrating translation capabilities through AWS services and APIs.",
    tech: ["AWS", "Amazon Translate", "Cloud APIs"],
    github: "https://github.com/dilli-prathap/AWS-TranslationBot",
    number: "06",
    icon: Cloud,
  },
  {
    title: "Employee Management System",
    category: "Cloud",
    status: "Built",
    description:
      "A three-tier employee management application with REST APIs, a MySQL database, Docker containers and Kubernetes deployment.",
    tech: ["Node.js", "Express.js", "MySQL", "Docker", "Kubernetes"],
    github: "https://github.com/dilli-prathap/Employee-Management-System",
    number: "07",
    icon: Cloud,
  },

  // SOFTWARE DEVELOPMENT
  {
    title: "Portfolio Website",
    category: "Software Development",
    status: "In Progress",
    description:
      "My personal developer portfolio, built to present my technical skills, projects, achievements and professional journey.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "",
    number: "08",
    icon: Rocket,
  },
  {
    title: "Employee Management System",
    category: "Software Development",
    status: "Built",
    description:
      "A three-tier employee management application with REST APIs, a MySQL database, Docker containers and Kubernetes deployment.",
    tech: ["Node.js", "Express.js", "MySQL", "Docker", "Kubernetes"],
    github: "https://github.com/dilli-prathap/Employee-Management-System",
    number: "09",
    icon: Code2,
  },

  // AI & ML — KEPT UNCHANGED
  {
    title: "NeuroShield",
    category: "AI & ML",
    status: "Built",
    description:
      "A privacy-preserving adaptive computing system designed to identify cognitive overload and dynamically adapt the digital environment.",
    tech: ["Python", "Machine Learning", "Data Processing"],
    github: "https://github.com/dilli-prathap/NeuroShield",
    number: "10",
    icon: BrainCircuit,
  },
  {
    title: "Titanic Survival Prediction",
    category: "AI & ML",
    status: "Built",
    description:
      "A machine learning classification project comparing Logistic Regression and Random Forest models for survival prediction.",
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    github: "https://github.com/dilli-prathap/titanic-survival-prediction",
    number: "11",
    icon: BrainCircuit,
  },

  // DATA ANALYTICS — KEPT UNCHANGED
  {
    title: "Customer Behaviour Analysis",
    category: "Data Analytics",
    status: "Built",
    description:
      "An end-to-end analytics project involving data cleaning, exploratory analysis, customer segmentation, SQL and an interactive Power BI dashboard.",
    tech: ["Python", "PostgreSQL", "SQL", "Power BI"],
    github:
      "https://github.com/dilli-prathap/customer-behaviour-analysis-python-sql-powerbi",
    number: "12",
    icon: Database,
  },
  {
    title: "Netflix Data Analytics Dashboard",
    category: "Data Analytics",
    status: "Built",
    description:
      "An interactive Tableau dashboard using KPIs, filters and visualisations to explore trends in Netflix data.",
    tech: ["Tableau", "Microsoft Excel"],
    github: "https://github.com/dilli-prathap/Netflix-Tableau-Dashboard",
    number: "13",
    icon: Database,
  },

  // IOT & EMBEDDED
  {
    title: "PaddyPulse – Smart AWD Irrigation",
    category: "IoT & Embedded",
    status: "Built",
    description:
      "An IoT irrigation prototype using ESP32, water-level and soil-moisture sensors, and a relay-controlled water pump.",
    tech: ["ESP32", "C/C++", "Arduino", "Sensors", "IoT"],
    github: "",
    number: "14",
    icon: Cpu,
  },
  {
    title: "Obstacle Avoidance Robot",
    category: "IoT & Embedded",
    status: "Built",
    description:
      "An autonomous robot using ultrasonic sensing and embedded programming to detect obstacles and change direction.",
    tech: ["Arduino", "Ultrasonic Sensor", "Embedded C"],
    github: "",
    number: "15",
    icon: Cpu,
  },
  {
    title: "DeskBuddy",
    category: "IoT & Embedded",
    status: "In Progress",
    description:
      "An ongoing personal IoT project. More details and technologies will be added as the project develops.",
    tech: ["IoT", "Embedded Systems", "Project in progress"],
    github: "",
    number: "16",
    icon: Cpu,
  },
];

// SKILLS AND TOOLS
// Add or remove technologies in these arrays whenever needed.

const skillGroups = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    skills: ["AWS", "S3", "EC2", "IAM", "VPC", "RDS", "Terraform"],
  },
  {
    title: "DevOps & Automation",
    icon: Workflow,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "CI/CD"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "SQL", "C", "C++"],
  },
  {
    title: "AI & Observability",
    icon: BrainCircuit,
    skills: ["Machine Learning", "OpenAI API", "OpenTelemetry", "Prometheus", "Grafana", "Jaeger"],
  },
  {
    title: "Web & Backend",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "REST APIs", "HTML5", "CSS3"],
  },
  {
    title: "Data & IoT",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Power BI", "Tableau", "Arduino", "ESP32"],
  },
];

// CERTIFICATIONS
// Add new certificates here as you earn them.

const certifications = [
  "AWS Academy Graduate – Cloud Foundations",
  "AWS Cloud Practitioner Essentials",
  "IBM Introduction to Machine Learning Specialization",
  "IBM Java Programming for Beginners",
  "Database Management Essentials – University of Colorado",
  "Relational Database Implementation and Applications – Illinois Institute of Technology",
  "Deloitte Technology Job Simulation",
  "Deloitte Data Analytics Job Simulation",
];

// EXPERIENCE
const experience = [
  {
    title: "Cloud Computing with AWS",
    organisation: "BeeSkilled · AICTE",
    description:
      "Virtual internship with practical exposure to AWS cloud concepts, services, deployment and infrastructure.",
  },
  {
    title: "C Programming Virtual Internship",
    organisation: "SkillNexis · AICTE",
    description:
      "Hands-on learning in C programming, programming fundamentals and problem-solving.",
  },
  {
    title: "Deloitte Virtual Job Simulations",
    organisation: "Forage",
    description:
      "Completed technology and data analytics simulations involving software engineering tasks, data analysis and business insights.",
  },
];

/* =========================================================
   WEBSITE DESIGN
   Keep this section unchanged when updating your details.
========================================================= */

export default function Home() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="background-grid" />

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">DP</span>
          <span>DILLI<span className="accent">.</span></span>
        </a>

        <nav className="desktop-nav">
          {["Home", "About", "Skills", "Projects", "Journey", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Connect <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {["Home", "About", "Skills", "Projects", "Journey", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
      )}

      {/* HERO */}
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            OPEN TO INTERNSHIP OPPORTUNITIES
          </div>

          <p className="hero-intro reveal-up">HELLO, I'M</p>

          <h1 className="hero-name reveal-up delay-one">
            Dilli
            <br />
            <span>Prathap<span className="name-dot">.</span></span>
          </h1>

          <div className="hero-role reveal-up delay-two">
            <span className="role-line" />
            <p>Cloud & DevOps Enthusiast</p>
          </div>

          <p className="hero-description reveal-up delay-three">
            Building with <strong>Cloud, DevOps, AI and IoT.</strong>
            <br />
            Turning complex ideas into practical technology solutions.
            Always learning. Always building.
          </p>

          <div className="hero-actions reveal-up delay-three">
            <a href="#projects" className="button button-primary">
              Explore My Work <ArrowUpRight size={18} />
            </a>
            <a href="/resume.pdf" download className="button button-outline">
              Download CV <Download size={17} />
            </a>
          </div>

          <div className="social-row reveal-up delay-four">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.name}
                  title={social.name}
                  className="social-button"
                >
                  <Icon size={19} />
                </a>
              );
            })}
            <span className="social-caption">Find me online</span>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
            <ArrowDown size={14} />
          </a>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="portrait-halo" />
          <div className="portrait-ring">
            <div className="portrait-inner">
              {PROFILE_IMAGE ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Dilli Prathap"
                  className="portrait-image"
                />
              ) : (
                <div className="portrait-placeholder">
                  <span className="portrait-initials">DP</span>
                  <span className="portrait-name">DILLI PRATHAP</span>
                  <span className="portrait-caption">ENGINEERING · TECHNOLOGY</span>
                </div>
              )}
            </div>
          </div>

          {/* THREE DOMAIN LABELS AROUND YOUR PHOTO */}
          <div
            className="floating-card floating-card-top"
            style={{ top: "12%", left: "0%", right: "auto", bottom: "auto" }}
          >
            <span className="floating-icon blue"><Cloud size={19} /></span>
            <span><strong>Cloud</strong><small>AWS · Infrastructure</small></span>
          </div>

          <div
            className="floating-card floating-card-bottom"
            style={{ bottom: "13%", left: "0%", right: "auto", top: "auto" }}
          >
            <span className="floating-icon purple"><Workflow size={19} /></span>
            <span><strong>DevOps</strong><small>Automation · CI/CD</small></span>
          </div>

          <div
            className="floating-card floating-card-top"
            style={{ top: "48%", right: "-3%", left: "auto", bottom: "auto" }}
          >
            <span className="floating-icon blue"><Code2 size={19} /></span>
            <span><strong>Software Developer</strong><small>Code · Applications</small></span>
          </div>

          <div className="visual-label">
            <Sparkles size={15} />
            <span>LEARN. BUILD. INNOVATE.</span>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="stats-strip section-wrap">
        {portfolioStats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="content-section section-wrap">
        <SectionTitle
          eyebrow="01 / ABOUT ME"
          title={<>A little about <span>who I am.</span></>}
          description="An engineer in progress, driven by curiosity and the desire to build useful technology."
        />

        <div className="about-grid">
          <div className="about-main glass-card">
            <span className="section-icon"><GraduationCap size={23} /></span>
            <h3>Engineering ideas into reality.</h3>
            <p>
              I'm Dilli Prathap, a Computer Science and Engineering student
              specialising in Internet of Things at Saveetha Engineering
              College. My interests span Cloud Computing, DevOps, Artificial
              Intelligence, Software Development and IoT.
            </p>
            <p>
              I enjoy building practical systems — from AI-driven CI/CD
              automation and cloud-native observability to machine learning,
              data analytics and connected devices.
            </p>
            <p>
              I'm currently looking for internship opportunities where I can
              contribute, collaborate and grow as an engineer.
            </p>
            <div className="about-tags">
              <span>Curious Mind</span>
              <span>Hands-on Builder</span>
              <span>Continuous Learner</span>
            </div>
          </div>

          <div className="about-side">
            <div className="mini-card glass-card">
              <span className="mini-card-icon"><GraduationCap /></span>
              <div>
                <small>EDUCATION</small>
                <strong>B.E. CSE – IoT</strong>
                <p>Saveetha Engineering College</p>
              </div>
            </div>
            <div className="mini-card glass-card">
              <span className="mini-card-icon"><Rocket /></span>
              <div>
                <small>FOCUS AREAS</small>
                <strong>Cloud · DevOps · Software Development · IoT</strong>
                <p>Engineering, automation & connected systems</p>
              </div>
            </div>
            <div className="mini-card glass-card">
              <span className="mini-card-icon"><Award /></span>
              <div>
                <small>ACHIEVEMENT</small>
                <strong>Second Place</strong>
                <p>National-level technical event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="content-section section-wrap">
        <SectionTitle
          eyebrow="02 / TECH STACK"
          title={<>Tools I use. <span>Things I build.</span></>}
          description="A snapshot of the technologies and technical areas I've worked with or explored."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <article className="skill-card glass-card" key={group.title}>
                <div className="skill-card-heading">
                  <span className="section-icon"><Icon size={21} /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="content-section projects-section">
        <div className="section-wrap">
          <SectionTitle
            eyebrow="03 / SELECTED PROJECTS"
            title={<>Ideas turned into <span>real projects.</span></>}
            description="Explore my work across DevOps, Cloud, Software Development, AI/ML, Data Analytics and IoT."
          />

          <div className="project-filters" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-chip ${activeCategory === category ? "active" : ""}`}
              >
                {category}
                {activeCategory === category && <span className="filter-dot" />}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span className="project-number">
                      {project.number} / {projects.length}
                    </span>
                    <span className={`project-status ${project.status === "In Progress" ? "in-progress" : ""}`}>
                      <span />
                      {project.status}
                    </span>
                  </div>

                  <div className="project-icon"><Icon size={24} /></div>

                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub size={16} /> View on GitHub <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="project-private">
                        {project.status === "In Progress" ? "Currently developing" : "Details coming soon"}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="github-more">
            <a
              href="https://github.com/dilli-prathap"
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              Explore all repositories <FaGithub size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="content-section section-wrap">
        <SectionTitle
          eyebrow="04 / MY JOURNEY"
          title={<>Learning beyond <span>the classroom.</span></>}
          description="Education, practical experience, certifications and achievements."
        />

        <div className="journey-grid">
          <div className="journey-column">
            <h3 className="column-heading"><GraduationCap /> Education</h3>
            <div className="timeline-card glass-card">
              <span className="timeline-marker" />
              <small>EXPECTED GRADUATION · 2028</small>
              <h4>Saveetha Engineering College</h4>
              <p>Bachelor of Engineering</p>
              <p>Computer Science & Engineering (Internet of Things)</p>
            </div>

            <h3 className="column-heading"><BriefcaseIcon /> Virtual Experience</h3>
            {experience.map((item) => (
              <div className="experience-card glass-card" key={item.title}>
                <span className="experience-marker" />
                <h4>{item.title}</h4>
                <small>{item.organisation}</small>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="journey-column">
            <h3 className="column-heading"><Award /> Certifications</h3>
            <div className="certification-list">
              {certifications.map((certification) => (
                <div className="certification-item glass-card" key={certification}>
                  <CheckCircle2 size={18} />
                  <span>{certification}</span>
                </div>
              ))}
            </div>

            <h3 className="column-heading achievement-heading"><Sparkles /> Highlights</h3>
            <div className="achievement-card glass-card">
              <strong>2nd Place</strong>
              <p>National-level technical event.</p>
            </div>
            <div className="achievement-card glass-card">
              <strong>Workshop Organiser</strong>
              <p>
                Organised and coordinated the national-level IoT and Embedded
                Systems workshop “Beyond Sensors to Smart Systems” at
                DRESTEIN'26, Saveetha Engineering College.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section section-wrap">
        <div className="contact-panel">
          <div className="contact-orb" />
          <div className="contact-content">
            <p className="section-eyebrow">05 / GET IN TOUCH</p>
            <h2>Let's create something <span>meaningful.</span></h2>
            <p>
              Interested in working together, discussing technology, or
              exploring internship opportunities? I'd love to hear from you.
            </p>
            <a className="button button-primary" href={EMAIL_LINK} target="_blank" rel="noreferrer">
              Say Hello <Mail size={18} />
            </a>
            <div className="contact-details">
              <a href={EMAIL_LINK} target="_blank" rel="noreferrer">
                <Mail size={16} /> dilliprathap.in@gmail.com
              </a>
              <a href="tel:+918098130206">
                <span>☎</span> +91 80981 30206
              </a>
            </div>
          </div>
          <div className="contact-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.name}
                >
                  <Icon size={21} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">DP</span>
          <span>DILLI<span className="accent">.</span></span>
        </a>
        <p>Designed & built by Dilli Prathap · {currentYear}</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}

function BriefcaseIcon() {
  return <Terminal size={19} />;
}
