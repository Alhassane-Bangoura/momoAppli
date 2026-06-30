import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoguineeecole (2).png';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je suis intéressé par le logiciel Guinée École.")}`;

  const links = [
    { to: '/fonctionnalites', label: 'Fonctionnalités' },
    { to: '/installation',   label: 'Appli' },
    { to: '/tarifs',         label: 'Tarifs' },
    { to: '/contact',        label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div className="nav-brand-circle">
            <img src={logo} alt="Guinée École Logo" />
          </div>
          <span style={{ fontWeight: 900, fontSize: '1.35rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--text-main)' }}>Guinée </span>
            <span style={{ color: 'var(--primary-color)' }}>École</span>
          </span>
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link${location.pathname === l.to ? ' active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <WhatsAppIcon size={16} /> Contacter
          </a>
        </div>
      </div>
    </nav>
  );
}
