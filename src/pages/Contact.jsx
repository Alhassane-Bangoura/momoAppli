import React from 'react';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  const waLink = `https://wa.me/224620465582?text=${encodeURIComponent("Bonjour, je suis intéressé par le logiciel Guinée École. J'aimerais avoir plus d'informations ou une démo.")}`;
  const [form, setForm] = React.useState({ nom: '', ecole: '', tel: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour, je m'appelle ${form.nom} de l'école ${form.ecole}. ${form.message} Mon numéro: ${form.tel}`;
    window.open(`https://wa.me/224620465582?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="section container" style={{ paddingTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-block', background: 'var(--primary-transparent)', color: 'var(--primary-color)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Contact & Support
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '1rem' }}>
            Parlons de votre <span className="gradient-text">école</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem' }}>
            Notre équipe répond dans les meilleurs délais. Envoyez-nous un message et nous vous rappelons dans la journée.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'start' }}>
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#25D36618', border: '1px solid #25D36640', borderRadius: '1.2rem', padding: '1.5rem', textDecoration: 'none', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#25D36620', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                <WhatsAppIcon size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>WhatsApp (Recommandé)</div>
                <div style={{ color: '#25D366', fontWeight: 700, fontSize: '1.1rem' }}>+224 620 465 582</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Réponse rapide garantie</div>
              </div>
            </a>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.2rem', padding: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>Localisation</div>
                <div style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Conakry, République de Guinée</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.2rem', padding: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>Disponibilité</div>
                <div style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Lun – Sam : 8h00 – 20h00</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.5rem', padding: '2.5rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Message envoyé !</h3>
                <p style={{ color: 'var(--text-muted)' }}>Nous vous contacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h2 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Envoyer un message</h2>
                {[
                  { key: 'nom', label: 'Votre nom', type: 'text', placeholder: 'Ex: Mamadou Diallo' },
                  { key: 'ecole', label: 'Nom de votre école', type: 'text', placeholder: 'Ex: Lycée Moderne de Conakry' },
                  { key: 'tel', label: 'Numéro de téléphone', type: 'tel', placeholder: '+224 6XX XXX XXX' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: '100%', background: 'var(--bg-color)', border: '1px solid var(--surface-border)', borderRadius: '0.75rem', padding: '0.8rem 1rem', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Votre message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin, demandez une démo ou posez une question..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-color)', border: '1px solid var(--surface-border)', borderRadius: '0.75rem', padding: '0.8rem 1rem', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.05rem', fontWeight: 800, width: '100%' }}>
                  Envoyer via WhatsApp →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
