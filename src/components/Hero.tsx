import './Hero.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useScrollReveal();

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-grid container">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="reveal stagger-1">
              Forging the Future of <span className="accent-text">Software</span>
            </h1>
            <p className="reveal stagger-2">
              We build robust, scalable, and beautiful digital solutions that push the boundaries of technology.
            </p>
          </div>
          <div className="hero-btns reveal stagger-3">
            <Link to="/products" className="glow-button">Products</Link>
            <Link to="/ideas" className="secondary-button">Ideas</Link>
          </div>
        </div>
        
        <div className="hero-side-panel reveal stagger-2">
          <div className="donate-card">
            <div className="donate-icon">❤️</div>
            <h3>Support Our Vision</h3>
            <p>Your contribution helps us keep forging open-source tools and innovative software for everyone.</p>
            <button className="donate-button">Donate Now</button>
            <div className="donate-stats">
              <span>Secure Payment</span>
              <span>•</span>
              <span>Global Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-visual reveal stagger-2">
        <div className="floating-sphere"></div>
        <div className="floating-sphere sphere-2"></div>
      </div>
    </section>
  );
};

export default Hero;
