import React from 'react';
import { Download, Monitor, GraduationCap, Calculator, FileText, CreditCard, IdCard, WifiOff, Play, Shield, Menu, MessageCircle, CheckCircle2, ChevronRight, Settings, Rocket } from 'lucide-react';
import logo from './assets/logoguineeecole (2).png';
import MobileApp from './MobileApp';

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M16.5 16c-1.5 1-3.5 0-5.5-2s-3-4-2-5.5c.3-.4.8-.6 1.2-.6.4 0 .7.3.9.7l1 2.2c.2.4.1.8-.2 1.1l-.6.6c-.3.3-.2.8.2 1.2.4.4.8.5 1.1.2l.6-.6c.3-.3.8-.4 1.2-.2l2.2 1c.4.2.7.6.7 1-.1.4-.3.9-.7 1.2z" />
  </svg>
);

const FacebookIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppBusinessIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <text x="12" y="15.5" fontSize="10" fontWeight="bold" textAnchor="middle" fill={color} stroke="none" fontFamily="sans-serif">B</text>
  </svg>
);

const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

function App() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) return <MobileApp />;
  // Use WhatsApp number from user's other site or placeholder
  const waNumber = "+224620465582";
  const waMessage = "Bonjour, je suis intéressé par le logiciel Guinée École. J'aimerais avoir plus d'informations ou une démo.";
  const waLink = `https://wa.me/${waNumber.replace(/\+/g, '')}?text=${encodeURIComponent(waMessage)}`;

  const [activeTab, setActiveTab] = React.useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Unobserve after revealing if you only want it to animate once
          // observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    });

    // Target all animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fadeup, .animate-fadeup-d1, .animate-fadeup-d2, .animate-fadeup-d3, .animate-scale, .hero-image-animate, .reveal-up'
    );

    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="nav-brand-circle">
              <img src={logo} alt="Guinée École Logo" />
            </div>
            <span style={{
              fontWeight: 900,
              fontSize: '1.35rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}>
              <span style={{ color: 'var(--text-main)' }}>Guinée </span>
              <span style={{ color: 'var(--primary-color)' }}>École</span>
            </span>
          </div>
          <div className="nav-links">
            <a href="#features" className={`nav-link ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Fonctionnalités</a>
            <a href="#installation" className={`nav-link ${activeTab === 'installation' ? 'active' : ''}`} onClick={() => setActiveTab('installation')}>Installation</a>
            <a href="#pricing" className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>Tarifs</a>
            <a href="#contact" className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact</a>
            <a href="#installation" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => setActiveTab('installation')}>
              Essai Gratuit
            </a>
          </div>
          <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', color: 'var(--text-main)', zIndex: 1001 }}>
            {mobileMenuOpen ? <span style={{ fontSize: '1.5rem', fontWeight: 'bold', lineHeight: 1 }}>✕</span> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div onClick={closeMobileMenu} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998, backdropFilter: 'blur(4px)' }} />
          <div style={{ position: 'fixed', top: 0, right: 0, height: '100vh', width: '75%', maxWidth: '300px', background: 'var(--surface-color)', zIndex: 999, padding: '5rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', boxShadow: '-8px 0 30px rgba(0,0,0,0.3)', borderLeft: '1px solid var(--surface-border)' }}>
            <a href="#features" className="nav-link" onClick={() => { setActiveTab('features'); closeMobileMenu(); }} style={{ fontSize: '1.1rem', padding: '1rem 0', borderBottom: '1px solid var(--surface-border)' }}>Fonctionnalités</a>
            <a href="#installation" className="nav-link" onClick={() => { setActiveTab('installation'); closeMobileMenu(); }} style={{ fontSize: '1.1rem', padding: '1rem 0', borderBottom: '1px solid var(--surface-border)' }}>Installation</a>
            <a href="#pricing" className="nav-link" onClick={() => { setActiveTab('pricing'); closeMobileMenu(); }} style={{ fontSize: '1.1rem', padding: '1rem 0', borderBottom: '1px solid var(--surface-border)' }}>Tarifs</a>
            <a href="#contact" className="nav-link" onClick={() => { setActiveTab('contact'); closeMobileMenu(); }} style={{ fontSize: '1.1rem', padding: '1rem 0', borderBottom: '1px solid var(--surface-border)' }}>Contact</a>
            <a href="#installation" className="btn btn-primary" onClick={closeMobileMenu} style={{ marginTop: '1.5rem', textAlign: 'center' }}>Essai Gratuit</a>
          </div>
        </>
      )}

      <main>
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-content">
            <div className="hero-badge animate-fadeup">
              <span className="badge-dot"></span>
              🇬🇳&nbsp; Le logiciel N°1 de gestion scolaire en Guinée
            </div>

            <h1 className="animate-fadeup-d1">
              Gérez votre école<br />
              <span className="gradient-text">sans effort, sans internet.</span>
            </h1>

            <p className="animate-fadeup-d2">
              Guinée École vous libère des tâches fastidieuses. Notes, bulletins, paiements,
              cartes scolaires — tout géré en quelques clics, même sans connexion.
            </p>

            <div className="hero-actions animate-fadeup-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn" style={{ fontSize: '1.05rem', padding: '0.9rem 1.8rem', boxShadow: '0 8px 30px rgba(99,102,241,0.4)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Download size={20} />
                L'Application (.exe)
              </a>
              <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer" className="btn btn-secondary hero-btn" style={{ fontSize: '1.05rem', padding: '0.9rem 1.8rem', background: 'rgba(99,102,241,0.05)', borderColor: 'var(--primary-color)', color: 'var(--primary-color)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Download size={20} />
                Compilateur Requis (.exe)
              </a>
              <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noopener noreferrer" className="btn hero-btn" style={{ fontSize: '1.05rem', padding: '0.9rem 1.8rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', color: 'var(--text-main)', transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}>
                <Play size={20} color="var(--primary-color)" />
                Vidéos Démo
              </a>
            </div>

            {/* Stats card */}
            <div className="hero-stats animate-fadeup-d3">
              {[
                { val: '10+', label: 'Écoles équipées' },
                { val: '20 000+', label: 'Élèves gérés' },
                { val: '100%', label: 'Hors ligne' },
              ].map(s => (
                <div key={s.label}>
                  <div className="hero-stat-value">{s.val}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual animate-fadeup-d3" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/guinea_classroom.png"
              alt="École en Guinée avec étudiants"
              className="hero-image-animate"
              style={{ width: '100%', maxWidth: '520px', borderRadius: '1.5rem', objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section container" style={{ background: 'var(--surface-color)', borderRadius: '2rem', padding: '6rem 2rem', margin: '2rem auto' }}>
          <div className="text-center">
            <div style={{ display: 'inline-block', background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>Pourquoi Guinée École ?</div>
            <h2 style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              Tout ce dont votre école <span className="text-primary">a besoin.</span>
            </h2>
            <p style={{ margin: '0 auto', maxWidth: '500px' }}>Une solution complète, intuitive, fonctionnant à 100% hors ligne — conçue spécialement pour la réalité des écoles guinéennes.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal-up">
              <div className="feature-icon">
                <GraduationCap size={24} />
              </div>
              <h3>Gestion des élèves</h3>
              <p>Inscriptions, suivi des absences, effectifs et dossiers complets. Retrouvez n'importe quel élève en 2 secondes.</p>
            </div>

            <div className="feature-card reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="feature-icon">
                <Calculator size={24} />
              </div>
              <h3>Calcul automatique</h3>
              <p>Fini les calculs à la main ! Le logiciel génère toutes les moyennes en un clic — sans erreur, sans stress.</p>
            </div>

            <div className="feature-card reveal-up" style={{ transitionDelay: '200ms' }}>
              <div className="feature-icon">
                <FileText size={24} />
              </div>
              <h3>Bulletins PDF pro</h3>
              <p>Des bulletins imprimables et professionnels générés en PDF, prêts à distribuer aux parents.</p>
            </div>

            <div className="feature-card reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="feature-icon">
                <CreditCard size={24} />
              </div>
              <h3>Paiements scolaires</h3>
              <p>Suivi rigoureux des frais de scolarité, relances automatiques, et reçus PDF en quelques secondes.</p>
            </div>

            <div className="feature-card reveal-up" style={{ transitionDelay: '400ms' }}>
              <div className="feature-icon">
                <IdCard size={24} />
              </div>
              <h3>Cartes scolaires</h3>
              <p>Générez et imprimez les cartes d'identité scolaires de chaque élève avec photo — automatiquement.</p>
            </div>

            <div className="feature-card reveal-up" style={{ transitionDelay: '500ms' }}>
              <div className="feature-icon">
                <WifiOff size={24} />
              </div>
              <h3>100% Hors Ligne</h3>
              <p>Aucun abonnement, aucun internet requis. Vos données sont stockées localement, en totale sécurité.</p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="section container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="reveal-up">Téléchargement</h2>
            <p className="reveal-up" style={{ margin: '0 auto', transitionDelay: '100ms' }}>Téléchargez Guinée École et son compilateur requis pour votre système Windows.</p>
          </div>

          <div className="download-card reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="download-card-header">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#0078D4">
                <path d="M0 3.449L9.75 2.101v8.948H0V3.449zM10.5 1.996L24 0.11v10.938H10.5V1.996zM0 11.834h9.75v8.95L0 19.434V11.834zM10.5 11.834H24v10.835L10.5 20.73V11.834z" />
              </svg>
              <div className="download-card-title">Windows</div>
            </div>

            <div className="download-links-list">
              <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer" className="download-item" aria-label="Télécharger Guinée École">
                <div className="download-item-name">
                  <span>Guinée École (Installateur)</span>
                  <span>Windows (64/32 bits)</span>
                </div>
                <div className="download-item-icon">
                  <Download size={20} />
                </div>
              </a>

              <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer" className="download-item" aria-label="Télécharger le compilateur">
                <div className="download-item-name">
                  <span>Compilateur (Obligatoire)</span>
                  <span>Requis pour le fonctionnement</span>
                </div>
                <div className="download-item-icon">
                  <Download size={20} />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Guarantees / Bonuses Section - EXCITING FOR BUYERS */}
        <section className="section container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <div className="reveal-up" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))', borderRadius: '2rem', padding: '4rem 2rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            {/* Background effects */}
            <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', filter: 'blur(50px)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', filter: 'blur(50px)', borderRadius: '50%' }}></div>

            <div className="text-center" style={{ position: 'relative', zIndex: 1, marginBottom: '3rem' }}>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase', backdropFilter: 'blur(4px)' }}>Offre Exclusive</div>
              <h2 style={{ color: 'white', marginBottom: '1rem' }}>Pourquoi passer à l'action aujourd'hui ?</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Votre licence comprend un accompagnement VIP complet. Nous ne vendons pas qu'un logiciel, nous sommes votre partenaire numérique.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div className="reveal-up bonus-card" style={{ transitionDelay: '100ms' }}>
                <div className="bonus-icon-wrapper">
                  <Rocket size={24} />
                </div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Installation Express</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>Notre équipe déploie le système et le réseau dans votre école en moins de 24h. Vous êtes opérationnel immédiatement, sans perturber vos cours.</p>
              </div>

              <div className="reveal-up bonus-card" style={{ transitionDelay: '200ms' }}>
                <div className="bonus-icon-wrapper">
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Formation du Personnel</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>Nous formons directeurs, censeurs et secrétaires sur place. L'interface est si intuitive qu'ils la maîtriseront parfaitement en seulement 30 minutes.</p>
              </div>

              <div className="reveal-up bonus-card" style={{ transitionDelay: '300ms' }}>
                <div className="bonus-icon-wrapper">
                  <Shield size={24} />
                </div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Sécurité & Garantie</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>Vos données scolaires restent dans votre école (100% Hors ligne). En cas de besoin, notre support réactif intervient en priorité via WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="animate-fadeup">Un Investissement <span className="text-primary">Transparent</span></h2>
            <p className="animate-fadeup-d1" style={{ margin: '0 auto' }}>Acquérez le logiciel pour votre établissement et bénéficiez d'une licence annuelle très abordable.</p>
          </div>

          <div className="animate-fadeup-d2 premium-card" style={{ maxWidth: '550px', margin: '0 auto', borderRadius: '1.5rem', padding: '3rem', position: 'relative', overflow: 'visible' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--primary-color)', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}></div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <span style={{ background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.05em' }}>TARIFICATION CLAIRE</span>
            </div>

            <h3 className="gradient-text" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2.5rem', fontWeight: 800 }}>Pack Déploiement & Licence</h3>

            {/* Logiciel Price */}
            <div className="price-box" style={{ background: 'var(--background-color)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Achat du Logiciel (Une seule fois)</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>1 000 000</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>GNF</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Inclut l'installation et la configuration initiale</div>
            </div>

            {/* Licence Price */}
            <div className="price-box" style={{ background: 'var(--primary-transparent)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid transparent' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Renouvellement Licence (Annuel)</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>500 000</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>GNF / an</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', opacity: 0.8, marginTop: '0.5rem' }}>Support technique, maintenance et mises à jour</div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', padding: '0 0.5rem' }}>
              <li className="animate-fadeup list-animate-1" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-main)' }}><CheckCircle2 size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} /> <span>Installation complète sur vos machines par notre équipe</span></li>
              <li className="animate-fadeup list-animate-2" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-main)' }}><CheckCircle2 size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} /> <span>Base de données locale totalement privée et sécurisée</span></li>
              <li className="animate-fadeup list-animate-3" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-main)' }}><CheckCircle2 size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} /> <span>Formation incluse pour le personnel administratif</span></li>
              <li className="animate-fadeup list-animate-4" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-main)' }}><CheckCircle2 size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} /> <span>Assistance prioritaire via WhatsApp toute l'année</span></li>
            </ul>

            <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-pulse btn-shine" style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
              Contacter pour commander
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="nav-brand" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div className="nav-brand-circle">
                  <img src={logo} alt="Guinée École Logo" />
                </div>
                <span style={{
                  fontWeight: 900,
                  fontSize: '1.35rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase'
                }}>
                  <span style={{ color: 'var(--text-main)' }}>Guinée </span>
                  <span style={{ color: 'var(--primary-color)' }}>École</span>
                </span>
              </div>
              <p style={{ fontSize: '0.95rem' }}>Le logiciel de gestion scolaire moderne conçu spécifiquement pour les écoles guinéennes.</p>
            </div>

            <div>
              <div className="footer-title">Ressources</div>
              <div className="footer-links">
                <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer">Télécharger l'application</a>
                <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer">Télécharger le compilateur</a>
                <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noopener noreferrer">Vidéos de démonstration</a>
              </div>
            </div>

            <div id="contact">
              <div className="footer-title">Contact & Support</div>
              <div className="footer-links">
                <a href={waLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <WhatsAppBusinessIcon size={16} /> +224 620 465 582
                </a>
                <a href="#">Demander une présentation physique</a>
              </div>
            </div>

            <div>
              <div className="footer-title">Réseaux Sociaux</div>
              <div className="footer-links" style={{ flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon size={24} /></a>
                <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedInIcon size={24} /></a>
                <a href="#" className="social-icon" aria-label="TikTok"><TikTokIcon size={24} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2026 Guinée École. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={waLink} target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', background: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)', zIndex: 1000, transition: 'transform 0.2s' }} className="whatsapp-float" aria-label="Contactez-nous sur WhatsApp">
        <WhatsAppIcon size={32} />
      </a>
    </>
  );
}

export default App;
