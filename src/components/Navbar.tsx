import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/Logo.png" alt="Forge Logo" className="logo-img" />
          <span className="logo-text">Forge</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products" className="nav-cta">Products</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
