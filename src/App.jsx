import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileApp from './MobileApp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fonctionnalites from './pages/Fonctionnalites';
import Installation from './pages/Installation';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function DesktopApp() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je suis intéressé par le logiciel Guinée École.")}`;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/installation"   element={<Installation />} />
        <Route path="/tarifs"         element={<Tarifs />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="*"               element={<Home />} />
      </Routes>
      <Footer />
      {/* Floating WhatsApp */}
      <a href={waLink} target="_blank" rel="noreferrer"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', background: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(37,211,102,0.4)', zIndex: 1000, transition: 'transform 0.2s' }}
        className="whatsapp-float" aria-label="WhatsApp">
        <WhatsAppIcon size={32} />
      </a>
    </BrowserRouter>
  );
}

function App() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) return <MobileApp />;
  return <DesktopApp />;
}

export default App;
