import React from 'react';
import {
    Mail,
    ArrowRight,
    CheckCircle2,
    ExternalLink,
    Building2,
    Zap,
} from 'lucide-react';
import './DesignSystem.css';

const COLORS = [
    { name: 'deep-navy-100', var: '--deep-navy-100', hex: '#000613' },
    { name: 'deep-navy-200', var: '--deep-navy-200', hex: '#000d27' },
    { name: 'deep-navy-300', var: '--deep-navy-300', hex: '#00133a' },
    { name: 'deep-navy-400', var: '--deep-navy-400', hex: '#001a4e' },
    { name: 'deep-navy-500', var: '--deep-navy-500', hex: '#002060' },
    { name: 'deep-navy-600', var: '--deep-navy-600', hex: '#003cb4' },
    { name: 'deep-navy-700', var: '--deep-navy-700', hex: '#075aff' },
    { name: 'deep-navy-800', var: '--deep-navy-800', hex: '#5a91ff' },
    { name: 'deep-navy-900', var: '--deep-navy-900', hex: '#acc8ff' },
    { name: 'powder-blue-500', var: '--powder-blue-500', hex: '#b4c6e7' },
    { name: 'text-primary', var: '--text-primary', hex: '#ffffff' },
    { name: 'text-secondary', var: '--text-secondary', hex: '#b4c6e7' },
];

const TYPE_SAMPLES = [
    { id: 'h1', label: 'H1', font: 'Inter', weight: '800', size: 'clamp(2.5rem, 8vw, 5rem)', text: 'Potenciamos su empresa con soluciones autónomas' },
    { id: 'h2', label: 'H2', font: 'Inter', weight: '700', size: '1.75rem', text: 'Nuestro Método' },
    { id: 'h3', label: 'H3', font: 'Inter', weight: '700', size: '1.5rem', text: 'Canales Directos' },
    { id: 'body', label: 'Body', font: 'Inter', weight: '400', size: '1rem', text: 'Texto secundario con powder-blue. Ingeniería de procesos y automatización industrial.', color: 'secondary' },
    { id: 'label', label: 'Small / Label', font: 'Roboto', weight: '400', size: '0.85rem', text: 'NOMBRE COMPLETO', style: 'italic', color: 'secondary' },
    { id: 'accent', label: 'Acento', font: 'Inter', weight: '700', size: '1rem', text: 'soluciones autónomas', color: 'accent' },
    { id: 'mono', label: 'Mono (código)', font: 'JetBrains Mono', weight: '400', size: '0.9rem', text: 'import pandas as pd' },
];

const DesignSystem = () => {
    return (
        <div className="ds-page">
            <header className="ds-header">
                <h1 className="ds-title">Sistema de diseño</h1>
                <p className="ds-subtitle">Componentes y tokens de la landing SOLID SOLUTIONS. Acceso solo por URL.</p>
            </header>

            <main className="ds-main">
                {/* Paleta de colores */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Colores</h2>
                    <div className="ds-color-grid">
                        {COLORS.map((c) => (
                            <div key={c.name} className="ds-swatch" style={{ background: `var(${c.var})` }}>
                                <span className="ds-swatch-name">{c.name}</span>
                                <span className="ds-swatch-hex">{c.hex}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tipografía */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Tipografía</h2>
                    <div className="ds-type-sample">
                        {TYPE_SAMPLES.map((t) => (
                            <div key={t.id} className="ds-type-block">
                                <div className="ds-type-row">
                                    <span className="ds-type-label">{t.label}</span>
                                    <span
                                        className="ds-type-text"
                                        style={{
                                            fontFamily: t.font === 'Roboto' ? "'Roboto', sans-serif" : t.font === 'JetBrains Mono' ? "'JetBrains Mono', monospace" : 'var(--font-main)',
                                            fontWeight: t.weight,
                                            fontSize: t.size,
                                            color: t.color === 'secondary' ? 'var(--text-secondary)' : t.color === 'accent' ? 'var(--deep-navy-800)' : 'var(--text-primary)',
                                            fontStyle: t.style || 'normal',
                                        }}
                                    >
                                        {t.text}
                                    </span>
                                </div>
                                <div className="ds-type-meta">
                                    {t.font} · {t.weight} · {t.size}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Botones */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Botones</h2>
                    <div className="ds-buttons">
                        <a href="#btns" className="btn-consultancy">Agendar Diagnóstico</a>
                        <button type="button" className="ds-btn ds-btn-primary">Primario (deep-navy-800)</button>
                        <button type="button" className="ds-btn ds-btn-outline">Outline</button>
                        <button type="button" className="ds-btn ds-btn-ghost">Ghost</button>
                    </div>
                </section>

                {/* Links */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Enlaces</h2>
                    <div className="ds-links">
                        <a href="#links" className="ds-link-nav">Enlace navegación</a>
                        <a href="#links" className="ds-link-nav ds-link-active">Enlace activo</a>
                        <a href="#links" className="ds-link-brochure">Brochure (acento)</a>
                        <span className="ds-link-inline">VER DETALLE TÉCNICO <ExternalLink size={14} /></span>
                    </div>
                </section>

                {/* Cards */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Tarjetas</h2>
                    <div className="ds-cards-grid">
                        <div className="ds-card ds-card-service">
                            <span className="ds-card-badge">Fase 01</span>
                            <div className="ds-card-icon"><Zap size={28} /></div>
                            <h3>Servicio ejemplo</h3>
                            <p>Descripción de la tarjeta de servicio con texto secundario.</p>
                            <span className="ds-card-cta">VER DETALLE <ExternalLink size={14} /></span>
                        </div>
                        <div className="ds-card ds-card-contact">
                            <div className="ds-card-icon-sm" style={{ background: 'rgba(0, 32, 96, 0.2)', color: 'var(--deep-navy-800)' }}>
                                <Mail size={24} />
                            </div>
                            <p className="ds-card-label">Email</p>
                            <p>contacto@solutions.com</p>
                        </div>
                        <div className="ds-card ds-card-box">
                            <h4 style={{ color: 'var(--deep-navy-800)', marginBottom: '0.5rem' }}>Compromiso Tecnológico</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nos adaptamos a su stack: Java Swing hasta FastAPI y React.</p>
                        </div>
                    </div>
                </section>

                {/* Formularios */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Formularios</h2>
                    <div className="ds-form-demo">
                        <div className="ds-field">
                            <label>NOMBRE COMPLETO</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="ds-field">
                            <label>EMAIL CORPORATIVO</label>
                            <input type="email" placeholder="john@empresa.com" />
                        </div>
                        <div className="ds-field">
                            <label>MENSAJE</label>
                            <textarea rows={3} placeholder="¿Cómo podemos ayudarle?" />
                        </div>
                        <button type="button" className="ds-btn ds-btn-submit">Enviar</button>
                    </div>
                </section>

                {/* Iconos */}
                <section className="ds-section">
                    <h2 className="ds-section-title">Iconos (Lucide)</h2>
                    <div className="ds-icons">
                        <div className="ds-icon-item"><Mail size={24} /><span>Mail</span></div>
                        <div className="ds-icon-item"><ArrowRight size={24} /><span>ArrowRight</span></div>
                        <div className="ds-icon-item"><CheckCircle2 size={24} /><span>CheckCircle2</span></div>
                        <div className="ds-icon-item"><ExternalLink size={24} /><span>ExternalLink</span></div>
                        <div className="ds-icon-item"><Building2 size={24} /><span>Building2</span></div>
                        <div className="ds-icon-item"><Zap size={24} /><span>Zap</span></div>
                    </div>
                </section>

                {/* Footer de la página de diseño */}
                <footer className="ds-footer">
                    <p>Sistema de diseño — SOLID SOLUTIONS. No enlazado desde la navegación pública.</p>
                </footer>
            </main>
        </div>
    );
};

export default DesignSystem;
