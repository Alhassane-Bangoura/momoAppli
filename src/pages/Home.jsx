import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Play, Rocket } from 'lucide-react';

export default function Home() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je suis intéressé par le logiciel Guinée École.")}`;

  const updateSliderRef = React.useRef(null);
  const schoolSliderRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { rootMargin: '50px', threshold: 0.01 });
    document.querySelectorAll('.animate-fadeup,.animate-fadeup-d1,.animate-fadeup-d2,.animate-fadeup-d3,.animate-scale,.hero-image-animate,.reveal-up')
      .forEach(el => observer.observe(el));
      
    const intervalId = setInterval(() => {
      [updateSliderRef, schoolSliderRef].forEach(ref => {
        if (ref.current) {
          ref.current.scrollLeft += 1;
          if (ref.current.scrollLeft >= ref.current.scrollWidth - ref.current.clientWidth) {
            ref.current.scrollLeft = 0;
          }
        }
      });
    }, 30);
    
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main>
      {/* Slider Mises à jour */}
      <section className="container animate-fadeup" style={{ paddingTop: '100px', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Rocket size={24} color="var(--primary-color)" />
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Nouvelles Mises à jour</h2>
        </div>
        <div ref={updateSliderRef} className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem' }}>
          {[
            { badge: 'Nouveau', title: 'Version v2026', desc: 'Interface repensée et performances améliorées.', color: '#34D399' },
            { badge: 'Mise à jour', title: 'Génération PDF', desc: 'Création de bulletins 3x plus rapide.', color: '#818CF8' },
            { badge: 'Module', title: 'Cartes Scolaires', desc: 'Impression en lot automatique avec photo.', color: '#F472B6' },
            { badge: 'Sécurité', title: 'Sauvegarde auto', desc: 'Double vérification des sauvegardes locales.', color: '#FBBF24' },
          ].map((update, i) => (
            <div key={i} className="premium-card" style={{ minWidth: '300px', padding: '1.5rem', borderRadius: '1.25rem', flexShrink: 0 }}>
              <div style={{ display: 'inline-block', background: `${update.color}20`, color: update.color, padding: '0.3rem 0.8rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>{update.badge}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{update.title}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{update.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero */}
      <section className="hero container" style={{ paddingTop: '4rem', minHeight: 'auto' }}>
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
            <a href="/Setup_Guinee_Ecole.exe" download className="btn btn-primary hero-btn">
              <Download size={20} /> L'Application (.exe)
            </a>
            <a href="/Setup_Compilateur.exe" download className="btn btn-secondary hero-btn">
              <Download size={20} /> Compilateur (.exe)
            </a>
            <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noopener noreferrer"
              className="btn hero-btn" style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={20} color="var(--primary-color)" /> Vidéos Démo
            </a>
          </div>
          <div className="hero-stats animate-fadeup-d3">
            {[{ val: '10+', label: 'Écoles équipées' }, { val: '20 000+', label: 'Élèves gérés' }, { val: '100%', label: 'Hors ligne' }].map(s => (
              <div key={s.label}>
                <div className="hero-stat-value">{s.val}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual animate-fadeup-d3">
          <img src="/guinea_classroom.png" alt="École en Guinée" className="hero-image-animate"
            style={{ width: '100%', maxWidth: '520px', borderRadius: '1.5rem', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Slider Ecoles */}
      <section className="container" style={{ padding: '3rem 0 2rem', overflow: 'hidden' }}>
        <h3 className="animate-fadeup" style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2.5rem', fontWeight: 700 }}>Ces écoles nous font confiance</h3>
        <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
          <div ref={schoolSliderRef} className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', width: '100%' }}>
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {["Complexe Scolaire Les Élites", "Groupe Scolaire Ousmane Camara", "Lycée d'Excellence de Kipé", "École Internationale", "Institut Rive Sud", "Lycée Albert Camus", "Groupe Scolaire d'Avenir"].map((school, j) => (
                  <div key={`${i}-${j}`} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '999px', margin: '0 1rem', whiteSpace: 'nowrap', fontSize: '1rem', fontWeight: 600, color: '#CBD5E1', transition: 'transform 0.3s', cursor: 'default', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                    {school}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '100%', background: 'linear-gradient(to right, var(--bg-color), transparent)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '100%', background: 'linear-gradient(to left, var(--bg-color), transparent)' }} />
        </div>
      </section>

      {/* Features Teaser */}
      <section className="section container" style={{ background: 'var(--surface-color)', borderRadius: '2rem', padding: '5rem 2rem', margin: '2rem auto' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Pourquoi Guinée École ?
          </div>
          <h2>Tout ce dont votre école <span className="text-primary">a besoin.</span></h2>
          <p style={{ margin: '0 auto', maxWidth: '500px' }}>16 modules complets, intuitifs, fonctionnant 100% hors ligne — conçus pour la réalité des écoles guinéennes.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {['Dashboard', 'Élèves', 'Promotions', 'Classes', 'Enseignants', 'Matières', 'Cours', 'Emploi du temps', 'Frais scolaires', 'Paiements', 'Documents', 'Notes', 'Bulletins & Rapports', 'Analytique', 'Préscolaire', 'Paramètres'].map((f, i) => (
            <div key={f} className="feature-card reveal-up" style={{ transitionDelay: `${i * 40}ms`, textAlign: 'center', padding: '1.2rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{f}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/fonctionnalites" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem' }}>
            Explorer toutes les fonctionnalités →
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 className="animate-fadeup">Un investissement <span className="gradient-text">transparent</span></h2>
        <p className="animate-fadeup-d1" style={{ margin: '1rem auto 2rem', maxWidth: '500px' }}>Achat unique + licence annuelle abordable. Aucun abonnement mensuel caché.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.5rem', padding: '2rem 3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Achat (une fois)</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)' }}>1 000 000 <span style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>GNF</span></div>
          </div>
          <div style={{ background: 'var(--primary-transparent)', border: '1px solid var(--primary-color)', borderRadius: '1.5rem', padding: '2rem 3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', textTransform: 'uppercase', fontWeight: 700 }}>Licence annuelle</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-color)' }}>500 000 <span style={{ fontSize: '1rem' }}>GNF/an</span></div>
          </div>
        </div>
        <Link to="/tarifs" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>Voir les détails →</Link>
      </section>
    </main>
  );
}
