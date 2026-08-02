import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  function handleSubscribe(e) {
    e.preventDefault();
    alert('Hook this up to your email service of choice!');
  }

  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-badge">KM</span>
            Keisha
          </div>
          <p>Front-end developer building clean, fast websites.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>+(234) 567-8910</li>
            <li>keisha020102@gmail.com</li>
            <li>Your City, Country</li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Get the latest updates</h4>
          <p>Occasional emails about new projects. No spam.</p>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>Copyright © {year} Keisha. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/#">Terms of Service</a>
          <a href="/#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;