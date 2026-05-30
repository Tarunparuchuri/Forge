import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const scrollRef = useScrollReveal();

  return (
    <div className="about-page" ref={scrollRef}>
      <div className="container">
        <header className="page-header">
          <h1 className="reveal">The Visionary Behind <span className="shader-text">Forge</span></h1>
          <p className="reveal stagger-1">Empowering the world through open-source innovation and high-performance software.</p>
        </header>

        <section className="profile-section reveal stagger-2">
          <div className="profile-card">
            <div className="profile-image-container">
              <img src="/Tarun.png" alt="Tarun Paruchuri" className="profile-image" />
            </div>
            <div className="profile-content">
              <h2>Tarun Paruchuri</h2>
              <p className="profile-title">Founder & Lead Engineer</p>
              
              <div className="profile-details-grid">
                <div className="detail-item">
                  <strong>Born</strong>
                  <p>22 June 2010</p>
                </div>
                <div className="detail-item">
                  <strong>Location</strong>
                  <p>India</p>
                </div>
                <div className="detail-item">
                  <strong>Contact</strong>
                  <p>+91 6303741498</p>
                </div>
                <div className="detail-item">
                  <strong>Focus</strong>
                  <p>AI, Automation, Open Source</p>
                </div>
              </div>

              <div className="profile-bio">
                <p>
                  Tarun Paruchuri is a young innovator and software engineer dedicated to building 
                  tools that make technology more accessible and efficient. With a focus on 
                  privacy-first AI and local-first software, he founded <strong>Forge</strong> to 
                  create a community-driven ecosystem for cutting-edge digital solutions.
                </p>
                <p>
                  His flagship product, <strong>VoiceFlow</strong>, exemplifies this mission 
                  by providing ultra-fast, local-only transcription that respects user privacy 
                  while delivering world-class performance.
                </p>
              </div>

              <div className="profile-links">
                <a href="https://www.linkedin.com/in/tarun-paruchuri-0b2990312" target="_blank" rel="noopener noreferrer" className="shader-button">LinkedIn</a>
                <a href="https://github.com/Tarunparuchuri" target="_blank" rel="noopener noreferrer" className="secondary-button">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats reveal stagger-3">
          <div className="stat-card">
            <h3>100%</h3>
            <p>Open Source</p>
          </div>
          <div className="stat-card">
            <h3>0ms</h3>
            <p>Cloud Latency</p>
          </div>
          <div className="stat-card">
            <h3>Global</h3>
            <p>Impact</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
