import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoguineeecole (2).png';

const FacebookIcon  = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LinkedInIcon  = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const TikTokIcon    = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>;

export default function Footer() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je suis intéressé par le logiciel Guinée École.")}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="nav-brand-circle">
                <img src={logo} alt="Guinée École Logo" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.35rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                <span style={{ color: 'var(--text-main)' }}>Guinée </span>
                <span style={{ color: 'var(--primary-color)' }}>École</span>
              </span>
            </div>
            <p style={{ fontSize: '0.95rem' }}>Le logiciel de gestion scolaire moderne conçu spécifiquement pour les écoles guinéennes.</p>
          </div>

          <div>
            <div className="footer-title">Navigation</div>
            <div className="footer-links">
              <Link to="/fonctionnalites">Fonctionnalités</Link>
              <Link to="/installation">Installation</Link>
              <Link to="/tarifs">Tarifs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Ressources</div>
            <div className="footer-links">
              <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer">Télécharger l'application</a>
              <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer">Télécharger le compilateur</a>
              <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noopener noreferrer">Vidéos de démonstration</a>
            </div>
          </div>

          <div>
            <div className="footer-title">Contact & Support</div>
            <div className="footer-links">
              <a href={waLink} target="_blank" rel="noreferrer">+224 620 465 582 (WhatsApp)</a>
              <a href="/contact">Demander une présentation</a>
            </div>
            <div className="footer-links" style={{ flexDirection: 'row', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon size={22} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedInIcon size={22} /></a>
              <a href="#" className="social-icon" aria-label="TikTok"><TikTokIcon size={22} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Guinée École. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
