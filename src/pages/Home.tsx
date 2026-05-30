import Hero from '../components/Hero';
import './Home.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      <Hero />
      
      <section className="features">
        <div className="container">
          <div className="features-header reveal">
            <h2>Precision Engineering</h2>
            <p>Our core pillars of digital excellence.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card reveal stagger-1">
              <div className="icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized code that delivers lightning-fast experiences for your users.</p>
            </div>
            <div className="feature-card reveal stagger-2">
              <div className="icon">🛡️</div>
              <h3>Secure by Design</h3>
              <p>Robust security protocols forged into every layer of our applications.</p>
            </div>
            <div className="feature-card reveal stagger-3">
              <div className="icon">🎨</div>
              <h3>Artful Design</h3>
              <p>Beautiful interfaces that blend aesthetics with seamless functionality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section reveal">
        <div className="cta-container">
          <h2>Ready to Build Something Great?</h2>
          <p>Let's forge the next generation of your digital presence.</p>
          <button className="glow-button">Products</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
