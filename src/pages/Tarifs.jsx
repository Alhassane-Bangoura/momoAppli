import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Tarifs() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je voudrais commander Guinée École.")}`;
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="section container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ display: 'inline-block', background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
          Tarification Claire
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Un investissement <span className="gradient-text">transparent</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 4rem', fontSize: '1.05rem' }}>
          Pas d'abonnement mensuel caché. Un achat unique, puis une licence annuelle très abordable.
        </p>

        <div className="animate-fadeup-d2 premium-card" style={{ maxWidth: '550px', margin: '0 auto', borderRadius: '1.5rem', padding: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--primary-color)', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.05em' }}>PACK DÉPLOIEMENT & LICENCE</span>
          </div>

          <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1rem', border: '1px solid var(--surface-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Achat du Logiciel (Une seule fois)</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>1 000 000</span>
              <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>GNF</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Inclut l'installation et la configuration initiale</div>
          </div>

          <div style={{ background: 'var(--primary-transparent)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid var(--primary-color)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Renouvellement Licence (Annuel)</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>500 000</span>
              <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>GNF / an</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', opacity: 0.8, marginTop: '0.5rem' }}>Support technique, maintenance et mises à jour</div>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', padding: '0 0.5rem' }}>
            {['Installation complète sur vos machines par notre équipe', 'Base de données locale totalement privée et sécurisée', 'Formation incluse pour le personnel administratif', 'Assistance prioritaire via WhatsApp toute l\'année'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-main)' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent-color)' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-pulse" style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem', textTransform: 'uppercase', fontWeight: 800 }}>
            Contacter pour commander
          </a>
        </div>
      </section>
    </main>
  );
}
