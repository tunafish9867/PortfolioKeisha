import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'Projects', to: '/projects', type: 'route' },
  { label: 'Skills', to: '/#skills', type: 'anchor' },
  { label: 'About', to: '/#about', type: 'anchor' },
  { label: 'Contact', to: '/#contact', type: 'anchor' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-badge">KL</span>
          Keisha
        </Link>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) =>
            link.type === 'route' ? (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.to}>
                <a href={link.to} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}