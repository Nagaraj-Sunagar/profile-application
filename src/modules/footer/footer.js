import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import "./footer.css"
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic Year

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Navigation Links */}
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <a href="#contact">Contact</a>
          <Link to="/Blog">Blog</Link>
        </nav>

      
          {/* Social Media Links using react-social-icons */}
        <div className="social-media">
          <SocialIcon url="https://linkedin.com/in/nagaraj-sunagar-7a09341b4" target="_blank" rel="noopener noreferrer" />
          <SocialIcon url="https://github.com/Nagaraj-Sunagar" target="_blank" rel="noopener noreferrer" />
          <SocialIcon url="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" />
          <SocialIcon url="https://youtube.com/@nagarajsunagar318" target="_blank" rel="noopener noreferrer" />
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Nagaraj Sunagar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;