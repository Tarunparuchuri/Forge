import { useScrollReveal } from '../hooks/useScrollReveal';
import Footer from '../components/Footer';
import './VoiceFlowProduct.css';
import { useEffect } from 'react';

const VoiceFlowProduct = () => {
  const scrollRef = useScrollReveal(0.1, 'active');

  useEffect(() => {
    // Change favicon to VoiceFlow logo
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    const oldIcon = link?.href;
    if (link) {
      link.href = '/VoiceFlowLogo.png';
    }

    return () => {
      // Revert favicon on cleanup
      if (link && oldIcon) {
        link.href = oldIcon;
      }
    };
  }, []);

  return (
    <div className="vf-landing" ref={scrollRef}>
      {/* Background Mesh */}
      <div className="vf-bg-mesh">
        <div className="vf-fluid-orb vf-orb-1"></div>
        <div className="vf-fluid-orb vf-orb-2"></div>
        <div className="vf-fluid-orb vf-orb-3"></div>
      </div>

      <nav className="vf-nav">
        <div className="vf-logo">
          <img src="/VoiceFlowLogo.png" className="vf-logo-img" alt="VoiceFlow Logo" />
          <span className="vf-logo-text">VoiceFlow</span>
        </div>
        <div className="vf-nav-links">
          <a href="#terms">Terms</a>
        </div>
      </nav>

      <section className="vf-hero">
        <div className="vf-status-badge">🎉 100% Free & Open Source</div>
        <h1>Voice at the speed of thought.</h1>
        <p className="vf-tagline">
          The world's most minimal, completely local <strong>open-source</strong> transcription tool. 
          No cloud. No latency. Just your words, instantly digitized.
        </p>

        <div className="vf-hero-buttons">
          <a href="/VoiceFlowInstaller.exe" download className="vf-cta-button">Download for Windows</a>
          <a href="https://github.com/Tarunparuchuri/VoiceFlow" target="_blank" rel="noopener noreferrer" className="vf-secondary-button">
            View on GitHub
          </a>
        </div>

        <div className="vf-product-panel">
          <div className="vf-product-inner">
            <div className="vf-code-snippet">
              <span className="vf-comment">// Real-time local processing</span><br />
              &gt; Listening on Thread 1...<br />
              &gt; Detected: <span style={{ color: '#fff' }}>"bracket open"</span><br />
              &gt; Post-processor matched: <span className="vf-accent-blue">bracket open</span><br />
              &gt; Output: <span className="vf-comment">(</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vf-features-section reveal">
        <h2 className="vf-section-headline">Engineered for speed.</h2>
        <div className="vf-features">
          <div className="vf-feature-card reveal vf-delay-1">
            <div className="vf-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>0ms Cloud Latency</h3>
            <p>Runs entirely on your machine. Your audio never touches the internet, ensuring absolute privacy and zero lag.</p>
          </div>
          <div className="vf-feature-card reveal vf-delay-2">
            <div className="vf-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Global Injection</h3>
            <p>One hotkey to rule them all. Press Ctrl+Win to instantly transcribe into any app, browser, or terminal globally.</p>
          </div>
          <div className="vf-feature-card reveal vf-delay-3">
            <div className="vf-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>    
            </div>
            <h3>Whisper Powered</h3>
            <p>Built on the world's most accurate AI models (faster-whisper), heavily optimized for local CPU/GPU performance.</p>
          </div>
          <div className="vf-feature-card reveal vf-delay-4">
            <div className="vf-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>100% Open Source</h3>
            <p>VoiceFlow is totally free and open-source forever. Inspect the codebase, contribute on GitHub, or fork it to build your own custom tools.</p>
          </div>
        </div>
      </section>

      <section id="terms" className="vf-terms-section reveal">
        <h2>Terms & Conditions</h2>
        <p><strong>1. Acceptance of Terms:</strong> By installing VoiceFlow, you agree to use this software for ethical and legal purposes only.</p>
        <p><strong>2. Local Processing:</strong> VoiceFlow is designed to process audio locally. While we prioritize privacy, you are responsible for the data you process.</p>
        <p><strong>3. Open Source:</strong> This software is provided "as is" under the MIT License. Use it, share it, improve it.</p>
        <p><strong>4. Limitations:</strong> Transcription accuracy depends on hardware performance and audio quality. We do not guarantee 100% accuracy.</p>
        <p><strong>5. Personal Use:</strong> This version is free for personal and community use.</p>
      </section>

      <Footer />
    </div>
  );
};

export default VoiceFlowProduct;
