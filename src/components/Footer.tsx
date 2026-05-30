import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-brand">
            <img src="/Logo.png" alt="Forge Logo" className="footer-logo" />
            <p>Forging high-performance digital experiences.</p>
          </div>
          
          <div className="footer-details-wrapper">
            <h4 className="footer-heading">About the Founder</h4>
            <div className="footer-details">
              <div className="footer-info-group">
                <strong>Name</strong>
                <p>Tarun Paruchuri</p>
              </div>
              <div className="footer-info-group">
                <strong>Contact</strong>
                <p>+91 6303741498</p>
              </div>
              <div className="footer-info-group">
                <strong>Social</strong>
                <div className="footer-socials">
                  <a href="https://www.linkedin.com/in/tarun-paruchuri-0b2990312" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/Tarunparuchuri" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
