import "./header.css";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
const Header = () => {
  return (
    <header className="header">
    <div className="logo">
    <SocialIcon url="https://youtube.com/@nagarajsunagar318" target="_blank" rel="noopener noreferrer" />
    </div>
    <nav className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/Blog">Blog</Link>
    </nav>
  </header>
  );
};

export default Header;