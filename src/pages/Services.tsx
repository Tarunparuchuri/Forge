import './Services.css';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const scrollRef = useScrollReveal();

  return (
    <div className="services-page" ref={scrollRef}>
      <header className="page-header">
        <h1 className="reveal">Our Products</h1>
        <p className="reveal stagger-1">We provide specialized technical solutions tailored to your business needs.</p>
      </header>

      <div className="container">
        <div className="voice-flow-banner reveal stagger-1">
          <div className="voice-flow-content">
            <img src="/VoiceFlowLogo.png" alt="VoiceFlow" className="voice-icon-small" />
            <h2 className="shader-text">Voice Flow</h2>
            <p>Next-gen conversational AI for your applications.</p>
          </div>
          <Link to="/products/voiceflow" className="glow-button shader-button">Download</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
