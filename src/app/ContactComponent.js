import React from 'react';

function ContactComponent() {
  return (
    <div className="contact-content">
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:denisepriscila256@gmail.com">denisepriscila256@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/denise-priscila-muwanguzi-b8243924a/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i>
          <a href="https://github.com/PriscilaDenise" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactComponent; 