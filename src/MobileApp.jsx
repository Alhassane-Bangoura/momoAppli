import React, { useState, useEffect, useRef } from 'react';
import { Download, GraduationCap, Calculator, FileText, CreditCard, IdCard, WifiOff, Play, Shield, Rocket, Home, Star, MessageCircle, CheckCircle2, Settings, ArrowLeft } from 'lucide-react';
import { features, parametresSubFeatures } from './pages/Fonctionnalites';
import logo from './assets/logoguineeecole (2).png';

const waNumber = "+224620465582";
const waMessage = "Bonjour, je suis intéressé par le logiciel Guinée École. J'aimerais avoir plus d'informations ou une démo.";
const waLink = `https://wa.me/${waNumber.replace(/\+/g, '')}?text=${encodeURIComponent(waMessage)}`;

// Mobile animation keyframes injected once
const mobileStyles = `
  @keyframes mob-fadein { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes mob-scale  { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
  @keyframes mob-glow   { 0%,100% { box-shadow:0 0 0 0 rgba(99,102,241,0.55); } 60% { box-shadow:0 0 0 14px rgba(99,102,241,0); } }
  @keyframes mob-shine  { 0%{ left:-100%; } 18%{ left:200%; } 100%{ left:200%; } }
  @keyframes mob-float  { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-6px); } }
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .mob-card { animation: mob-fadein 0.45s cubic-bezier(.22,.68,0,1.2) both; }
  .mob-card:nth-child(2) { animation-delay:.07s; }
  .mob-card:nth-child(3) { animation-delay:.14s; }
  .mob-card:nth-child(4) { animation-delay:.21s; }
  .mob-card:nth-child(5) { animation-delay:.28s; }
  .mob-card:nth-child(6) { animation-delay:.35s; }
  .mob-btn-primary { animation: mob-glow 2.2s infinite; position:relative; overflow:hidden; }
  .mob-btn-primary::after { content:''; position:absolute; top:0; left:-100%; width:45%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent); transform:skewX(-18deg); animation:mob-shine 3s infinite; }
  .mob-hero-img { animation: mob-float 4s ease-in-out infinite; }
  .mob-badge { animation: mob-scale 0.5s cubic-bezier(.22,.68,0,1.2) both; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default function MobileApp() {
  const [tab, setTab] = useState('accueil');
  const [prevTab, setPrevTab] = useState('accueil');
  const [activeFeatureId, setActiveFeatureId] = useState(null);

  const updateSliderRef = useRef(null);
  const schoolSliderRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (tab === 'accueil') {
      intervalId = setInterval(() => {
        [updateSliderRef, schoolSliderRef].forEach(ref => {
          if (ref.current) {
            ref.current.scrollLeft += 1;
            if (ref.current.scrollLeft >= ref.current.scrollWidth - ref.current.clientWidth) {
              ref.current.scrollLeft = 0;
            }
          }
        });
      }, 30);
    }
    return () => clearInterval(intervalId);
  }, [tab]);

  const goTo = (id) => { 
    setPrevTab(tab); 
    setTab(id); 
    if (id !== 'features') setActiveFeatureId(null);
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#0F172A',
      color: '#F8FAFC',
      minHeight: '100dvh',
      paddingBottom: '85px',
      overflowX: 'hidden',
    }}>
      <style>{mobileStyles}</style>

      {/* TOP NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,23,42,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0.9rem 1.2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logo} alt="Logo" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          <span style={{ fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            <span style={{ color: '#F8FAFC' }}>Guinée </span>
            <span style={{ color: '#818CF8' }}>École</span>
          </span>
        </div>
        <span style={{
          background: 'rgba(129,140,248,0.15)',
          color: '#818CF8', fontSize: '0.7rem', fontWeight: 700,
          padding: '0.2rem 0.6rem', borderRadius: '999px', letterSpacing: '0.05em'
        }}>v2025</span>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: '60px' }}>

        {/* ======= ACCUEIL ======= */}
        {tab === 'accueil' && (
          <div>
            {/* Slider Mises à jour */}
            <div style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
              <div style={{ padding: '0 1.4rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Rocket size={18} color="#818CF8" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#F8FAFC' }}>Nouvelles Mises à jour</h3>
              </div>
              <div ref={updateSliderRef} className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '0 1.4rem' }}>
                {[
                  { badge: 'Nouveau', title: 'Version v2026', desc: 'Interface repensée et performances améliorées.', color: '#34D399' },
                  { badge: 'Mise à jour', title: 'Génération PDF', desc: 'Création de bulletins 3x plus rapide.', color: '#818CF8' },
                  { badge: 'Module', title: 'Cartes Scolaires', desc: 'Impression en lot automatique avec photo.', color: '#F472B6' },
                ].map((update, i) => (
                  <div key={i} style={{ minWidth: '80vw', background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '1.2rem', flexShrink: 0 }}>
                    <div style={{ display: 'inline-block', background: `${update.color}20`, color: update.color, padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.5rem' }}>{update.badge}</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.3rem' }}>{update.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.4 }}>{update.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero */}
            <div style={{
              background: 'linear-gradient(160deg, #1E293B 0%, #0F172A 60%)',
              padding: '2rem 1.4rem 2rem',
              textAlign: 'center',
              position: 'relative', overflow: 'hidden',
              marginTop: '1rem',
            }}>
              {/* Glow blob */}
              <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div className="mob-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.2)', borderRadius: '999px', padding: '0.3rem 0.9rem', fontSize: '0.75rem', fontWeight: 700, color: '#818CF8', marginBottom: '1.2rem' }}>
                🇬🇳 Logiciel N°1 en Guinée
              </div>

              <h1 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1rem', color: '#F8FAFC' }}>
                Gérez votre école<br />
                <span style={{ background: 'linear-gradient(135deg, #818CF8, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  sans effort.
                </span>
              </h1>

              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px', margin: '0 auto 2rem' }}>
                Notes, bulletins, paiements, cartes scolaires — tout en quelques clics, même sans internet.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[{ val: '10+', label: 'Écoles' }, { val: '20 000+', label: 'Élèves' }, { val: '100%', label: 'Hors ligne' }].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#818CF8' }}>{s.val}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Ecoles */}
            <div style={{ padding: '2rem 0', overflow: 'hidden' }}>
              <h3 style={{ textAlign: 'center', fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', fontWeight: 700 }}>Ils nous font confiance</h3>
              <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
                <div ref={schoolSliderRef} className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', width: '100%' }}>
                  {/* Duplicate list for infinite scroll effect */}
                  {[...Array(4)].map((_, i) => (
                    <React.Fragment key={i}>
                      {["Complexe Scolaire Les Élites", "Groupe Scolaire Ousmane Camara", "Lycée d'Excellence de Kipé", "École Internationale", "Institut Rive Sud"].map((school, j) => (
                        <div key={`${i}-${j}`} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '999px', margin: '0 0.5rem', whiteSpace: 'nowrap', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', flexShrink: 0 }}>
                          {school}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
                {/* Gradient Masks */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '100%', background: 'linear-gradient(to right, #0F172A, transparent)' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '100%', background: 'linear-gradient(to left, #0F172A, transparent)' }} />
              </div>
            </div>

            {/* Image */}
            <div style={{ padding: '0 1.4rem' }}>
              <img src="/guinea_classroom.png" alt="École en Guinée" className="mob-hero-img" style={{ width: '100%', borderRadius: '1.2rem', objectFit: 'cover', maxHeight: '200px', border: '1px solid rgba(255,255,255,0.06)' }} />
            </div>

            {/* Guarantees */}
            <div style={{ padding: '1.5rem 1.4rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #6366F1, #4F46E5)', borderRadius: '1.2rem', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Offre Exclusive</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '1.2rem' }}>Pourquoi agir aujourd'hui ?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {[
                    { icon: <Rocket size={16}/>, text: 'Installation Express en moins de 24h' },
                    { icon: <GraduationCap size={16}/>, text: 'Formation du personnel incluse' },
                    { icon: <Shield size={16}/>, text: 'Données 100% privées, support WhatsApp' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.8)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======= APPLI ======= */}
        {tab === 'appli' && (
          <div className="mob-card" style={{ padding: '2.5rem 1.4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(52,211,153,0.12)', color: '#34D399', padding: '0.3rem 0.9rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Téléchargement
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem', color: '#F8FAFC' }}>L'Application</h2>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Téléchargez les fichiers ci-dessous ou visionnez les démonstrations pour voir Guinée École en action.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer"
                className="mob-btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: 'linear-gradient(135deg, #6366F1, #818CF8)', color: 'white', padding: '1.1rem', borderRadius: '1rem', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 8px 25px rgba(99,102,241,0.4)' }}>
                <Download size={20} /> 1. Télécharger l'Application (.exe)
              </a>
              <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: 'rgba(129,140,248,0.08)', color: '#818CF8', padding: '1.1rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(129,140,248,0.25)' }}>
                <Download size={20} /> 2. Compilateur Requis (.exe)
              </a>
              <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: 'rgba(52,211,153,0.08)', color: '#34D399', padding: '1.1rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(52,211,153,0.2)' }}>
                <Play size={20} /> 3. Voir les Vidéos Démo
              </a>
            </div>
          </div>
        )}

        {/* ======= FEATURES ======= */}
        {tab === 'features' && (
          <div style={{ padding: '1.5rem 1.4rem' }}>
            {!activeFeatureId ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'inline-block', background: 'rgba(129,140,248,0.12)', color: '#818CF8', padding: '0.25rem 0.9rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>FONCTIONNALITÉS</div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Tout ce qu'il vous faut</h2>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.5rem' }}>Une solution complète, 100% hors ligne.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {features.map((f, i) => (
                    <div key={f.id} onClick={() => setActiveFeatureId(f.id)} className="mob-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(30,41,59,0.8)', padding: '1.2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '0.75rem', background: `${f.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>{f.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{f.label}</div>
                      </div>
                      <ArrowLeft size={16} color="#64748B" style={{ transform: 'rotate(180deg)' }} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              (() => {
                let current = features.find(f => f.id === activeFeatureId) || parametresSubFeatures.find(f => f.id === activeFeatureId);
                const isParam = !!parametresSubFeatures.find(f => f.id === activeFeatureId);
                
                return (
                  <div className="mob-card feature-content-enter">
                    <button onClick={() => {
                      if (isParam) setActiveFeatureId('parametres');
                      else setActiveFeatureId(null);
                    }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#818CF8', fontWeight: 700, padding: 0, marginBottom: '1.5rem', cursor: 'pointer' }}>
                      <ArrowLeft size={18} /> Retour
                    </button>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${current.color}20, ${current.color}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: current.color, flexShrink: 0, border: `1px solid ${current.color}30`, boxShadow: `0 8px 24px ${current.color}20` }}>
                        {React.cloneElement(current.icon, { size: 28 })}
                      </div>
                      <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#F8FAFC', margin: 0, lineHeight: 1.15, letterSpacing: '-0.02em' }}>{current.title}</h2>
                    </div>
                    
                    <div style={{ padding: '1.25rem', background: 'rgba(30,41,59,0.4)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
                      <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                        {current.description}
                      </p>
                    </div>
                    
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: current.color }}></span>
                      Points clés
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                      {current.points.map((p, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '1.25rem' }}>
                          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${current.color}20`, color: current.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '0.75rem' }}>
                            {i + 1}
                          </div>
                          <span style={{ fontSize: '0.95rem', color: '#E2E8F0', lineHeight: 1.5, fontWeight: 500 }}>{p}</span>
                        </div>
                      ))}
                    </div>

                    {/* Screenshot placeholder mobile */}
                    <div style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1.25rem', padding: '2rem 1.5rem', textAlign: 'center', color: '#94A3B8', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${current.color}, transparent)` }}></div>
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.8 }}>📱</div>
                      <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Interface Mobile/Tablette</div>
                      <div style={{ fontSize: '0.85rem' }}>Capture d'écran <strong>{current.title}</strong> à venir.</div>
                    </div>

                    {current.id === 'parametres' && (
                      <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sous-modules Paramètres</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {parametresSubFeatures.map(f => (
                            <div key={f.id} onClick={() => setActiveFeatureId(f.id)} style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(30,41,59,0.8)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                              <div style={{ width: 36, height: 36, borderRadius: '0.5rem', background: `${f.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>{React.cloneElement(f.icon, { size: 18 })}</div>
                              <div style={{ flex: 1, fontWeight: 700, fontSize: '0.9rem', color: '#F8FAFC' }}>{f.label}</div>
                              <ArrowLeft size={16} color="#64748B" style={{ transform: 'rotate(180deg)' }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            )}
          </div>
        )}

        {/* ======= PRICING ======= */}
        {tab === 'pricing' && (
          <div style={{ padding: '1.5rem 1.4rem', paddingBottom: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-block', background: 'rgba(129,140,248,0.12)', color: '#818CF8', padding: '0.25rem 0.9rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>TARIFICATION CLAIRE</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>Un investissement <span style={{ background: 'linear-gradient(135deg,#818CF8,#34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>transparent</span></h2>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>Pas d&apos;abonnement mensuel caché.</p>
            </div>

            <div style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <div style={{ height: '4px', background: 'linear-gradient(90deg, #6366F1, #34D399)' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ background: 'rgba(129,140,248,0.12)', color: '#818CF8', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>PACK DÉPLOIEMENT & LICENCE</span>
                </div>

                <div style={{ background: 'rgba(15,23,42,0.6)', padding: '1.25rem', borderRadius: '1rem', marginBottom: '0.75rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.4rem' }}>Achat du Logiciel — Une seule fois</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F8FAFC' }}>1 000 000 <span style={{ fontSize: '1rem', color: '#818CF8', fontWeight: 700 }}>GNF</span></div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.4rem' }}>Inclut l&apos;installation et la configuration initiale</div>
                </div>

                <div style={{ background: 'rgba(99,102,241,0.12)', padding: '1.25rem', borderRadius: '1rem', marginBottom: '1.5rem', textAlign: 'center', border: '1px solid rgba(129,140,248,0.3)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#818CF8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.4rem' }}>Renouvellement Licence — Annuel</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#818CF8' }}>500 000 <span style={{ fontSize: '1rem', fontWeight: 700 }}>GNF / an</span></div>
                  <div style={{ fontSize: '0.78rem', color: '#818CF8', opacity: 0.75, marginTop: '0.4rem' }}>Support, maintenance et mises à jour inclus</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  {[
                    'Installation complète par notre équipe',
                    'Base de données privée et sécurisée',
                    'Formation du personnel administratif',
                    'Assistance prioritaire via WhatsApp',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', background: 'rgba(15,23,42,0.4)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <a href={waLink} target="_blank" rel="noreferrer" className="mob-btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #6366F1, #818CF8)', color: 'white', padding: '1.1rem', borderRadius: '1rem', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.03em' }}>
                  Contacter pour Commander
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======= CONTACT ======= */}
        {tab === 'contact' && (
          <div style={{ padding: '1.5rem 1.4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-block', background: 'rgba(52,211,153,0.12)', color: '#34D399', padding: '0.25rem 0.9rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>CONTACT & SUPPORT</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>On est là pour vous</h2>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.5rem' }}>Notre équipe répond rapidement via WhatsApp.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={waLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#25D366', color: 'white', padding: '1.2rem', borderRadius: '1.2rem', textDecoration: 'none', fontWeight: 700, boxShadow: '0 8px 25px rgba(37,211,102,0.35)' }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>WhatsApp Business</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>+224 620 465 582</div>
                </div>
              </a>

              <a href="https://drive.google.com/drive/folders/1pZavlhgzo-J177cKO5spry4nesrbUy5d" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(255,255,255,0.07)', color: '#F8FAFC', padding: '1.2rem', borderRadius: '1.2rem', textDecoration: 'none', fontWeight: 700 }}>
                <Play size={24} color="#818CF8" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Vidéos de Démonstration</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Google Drive — Accès libre</div>
                </div>
              </a>

              <a href="/Setup_Guinee_Ecole.exe" download target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(255,255,255,0.07)', color: '#F8FAFC', padding: '1.2rem', borderRadius: '1.2rem', textDecoration: 'none', fontWeight: 700 }}>
                <Download size={24} color="#818CF8" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Télécharger l'Application</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Setup_Guinee_Ecole.exe</div>
                </div>
              </a>

              <a href="/Setup_Compilateur.exe" download target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(255,255,255,0.07)', color: '#F8FAFC', padding: '1.2rem', borderRadius: '1.2rem', textDecoration: 'none', fontWeight: 700 }}>
                <Download size={24} color="#818CF8" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Télécharger le Compilateur</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Setup_Compilateur.exe</div>
                </div>
              </a>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.75rem', color: '#334155' }}>
              © 2026 Guinée École. Tous droits réservés.
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM NAV BAR — 5 onglets = desktop navbar */}
      <nav style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(13,19,35,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(129,140,248,0.12)',
        display: 'flex', alignItems: 'stretch',
        padding: '0 0 env(safe-area-inset-bottom)',
        height: '65px',
      }}>
        {[
          { id: 'accueil',      icon: <Home size={22}/>,        label: 'Accueil' },
          { id: 'features',     icon: <Star size={22}/>,        label: 'Fonctions' },
          { id: 'pricing',      icon: <CreditCard size={22}/>,  label: 'Tarifs' },
          { id: 'contact',      icon: <MessageCircle size={22}/>, label: 'Contact' },
        ].map(item => (
          <button key={item.id} onClick={() => goTo(item.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '0.2rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: tab === item.id ? '#818CF8' : '#64748B',
            transition: 'color 0.25s',
            padding: '0.3rem 0.1rem',
            fontSize: '0.7rem', fontWeight: tab === item.id ? 700 : 500,
            borderTop: tab === item.id ? '2px solid #818CF8' : '2px solid transparent',
          }}>
            <div style={{ transform: tab === item.id ? 'translateY(-2px) scale(1.15)' : 'scale(1)', transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1)' }}>
              {item.icon}
            </div>
            {item.label}
          </button>
        ))}
        {/* Bouton Appli = call-to-action */}
        <a href="#" onClick={(e)=>{ e.preventDefault(); goTo('appli'); }} style={{
          flex: 1.2, display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '0.2rem',
          background: 'linear-gradient(135deg,#6366F1,#818CF8)',
          color: 'white', textDecoration: 'none',
          fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.02em',
          padding: '0.3rem 0.1rem',
          borderTop: '2px solid transparent',
        }}>
          <Download size={20}/>
          Appli
        </a>
      </nav>
    </div>
  );
}
