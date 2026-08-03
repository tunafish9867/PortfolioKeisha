import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-badge">KL</span>
            Keisha Lorejo
          </div>
          <p>Data Analyst & Automation Specialist transforming complex data into actionable insights and scalable, efficient systems.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>09474878010</li>
            <li>keishalorejo@gmail.com</li>
            <li>Davao City, Philippines</li>
          </ul>
        </div>
      </div>

    </footer>
  );
}

export default Footer;