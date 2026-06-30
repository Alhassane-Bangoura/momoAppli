import React from 'react';
import { Download, CheckCircle2, Rocket, GraduationCap, Shield } from 'lucide-react';

export default function Installation() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je voudrais une aide pour l'installation de Guinée École.")}`;
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="section container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ display: 'inline-block', background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
          Téléchargement
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Installer <span className="gradient-text">Guinée École</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.05rem' }}>
          Téléchargez les deux fichiers ci-dessous. Le compilateur est obligatoire pour le bon fonctionnement du logiciel.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <div className="download-card" style={{ flex: '1', minWidth: '300px', maxWidth: '420px' }}>
            <div className="download-card-header">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#0078D4">
                <path d="M0 3.449L9.75 2.101v8.948H0V3.449zM10.5 1.996L24 0.11v10.938H10.5V1.996zM0 11.834h9.75v8.95L0 19.434V11.834zM10.5 11.834H24v10.835L10.5 20.73V11.834z"/>
              </svg>
              <div className="download-card-title">Guinée École — Application</div>
            </div>
            <div className="download-links-list">
              <a href="/Setup_Guinee_Ecole.exe" download className="download-item">
                <div className="download-item-name">
                  <span>Guinée École (Installateur)</span>
                  <span>Windows 64/32 bits</span>
                </div>
                <div className="download-item-icon"><Download size={20}/></div>
              </a>
            </div>
          </div>

          <div className="download-card" style={{ flex: '1', minWidth: '300px', maxWidth: '420px' }}>
            <div className="download-card-header">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#6366F1">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <div className="download-card-title">Compilateur (Obligatoire)</div>
            </div>
            <div className="download-links-list">
              <a href="/Setup_Compilateur.exe" download className="download-item">
                <div className="download-item-name">
                  <span>Compilateur Requis</span>
                  <span>Indispensable pour le fonctionnement</span>
                </div>
                <div className="download-item-icon"><Download size={20}/></div>
              </a>
            </div>
          </div>
        </div>

        {/* Steps */}
        <h2 style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Comment installer ?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto 4rem' }}>
          {[
            { step: '01', title: 'Télécharger le compilateur', desc: 'Installez d\'abord le compilateur — c\'est la base du logiciel.' },
            { step: '02', title: 'Installer le compilateur', desc: 'Lancez Setup_Compilateur.exe et suivez les instructions.' },
            { step: '03', title: 'Installer Guinée École', desc: 'Lancez Setup_Guinee_Ecole.exe et complétez l\'installation.' },
            { step: '04', title: 'Démarrer !', desc: 'Ouvrez Guinée École et configurez votre établissement.' },
          ].map(s => (
            <div key={s.step} style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.2rem', padding: '1.5rem', textAlign: 'left' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-color)', opacity: 0.3, lineHeight: 1 }}>{s.step}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.5rem 0' }}>{s.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div style={{ background: 'linear-gradient(135deg, var(--primary-color), #4F46E5)', borderRadius: '2rem', padding: '3rem', color: 'white', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', marginBottom: '2rem' }}>Nous vous accompagnons</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Rocket size={22}/>, t: 'Installation Express', d: 'Notre équipe installe et configure en moins de 24h.' },
              { icon: <GraduationCap size={22}/>, t: 'Formation incluse', d: 'Personnel formé sur place. Maîtrise en 30 minutes.' },
              { icon: <Shield size={22}/>, t: 'Support WhatsApp', d: 'Assistance prioritaire réactive toute l\'année.' },
            ].map((b, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '0.4rem' }}>{b.t}</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.85, lineHeight: 1.5 }}>{b.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ display: 'inline-block', background: 'white', color: 'var(--primary-color)', borderRadius: '0.75rem', padding: '0.9rem 2.5rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem' }}>
              Contacter notre équipe →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
