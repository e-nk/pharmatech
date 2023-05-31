import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="contact">
        <p>Phone: +123456789</p>
      </div>
    </footer>
  );
};

export default Footer;
