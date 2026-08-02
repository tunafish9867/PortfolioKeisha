import './Hero.css';
import heroImg from '../assets/DSCF2751.JPG';

export default function Hero() {
  return (
    <section id="about" className="hero section">
      <div className="container hero-grid">
        <div className="hero-photo">
          <div className="hero-photo-blob" />
          <img src={heroImg} alt="Portrait of Keisha" />
        </div>

        <div className="hero-content">
          <span className="eyebrow">About Me</span>
          <h1>I turn broken workflows into systems that just run themselves</h1>
          <p>
            Automation & AI Systems Specialist with a BS in Applied Mathematics. 
            I design and deploy integrations across Make.com, GoHighLevel, ClickUp, and Shopify — combining REST APIs, webhooks, and AI-driven data parsing to eliminate manual work for real estate, mortgage, and e-commerce teams.
          </p>

          <div className="hero-info-card">
            <div>
              <span className="label">Name</span>
              <span>Keisha Lorejo</span>
            </div>
            <div>
              <span className="label">Phone</span>
              <span>09474878010</span>
            </div>
            <div>
              <span className="label">Email</span>
              <span>keishalorejo@gmail.com</span>
            </div>
            <div>
              <span className="label">Based in</span>
              <span>Davao City, Philippines</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="/#contact" className="btn btn-primary">Contact me</a>
            <a href="public/Keisha_Lorejo_Resume.pdf" download="Keisha_Lorejo_Resume.pdf" className="btn btn-outline">Download resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}