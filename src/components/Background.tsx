import './Background.css';
import { useMemo } from 'react';

const Background = () => {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      duration: `${10 + Math.random() * 20}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="bg-animation-container">
      <div className="bg-mesh"></div>
      <div className="bg-particles">
        {particles.map((p) => (
          <div 
            key={p.id} 
            className="particle" 
            style={{ 
              left: p.left, 
              top: p.top, 
              '--duration': p.duration,
              animationDelay: p.delay
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>
      <div className="bg-glow-orb orb-3"></div>
    </div>
  );
};

export default Background;
