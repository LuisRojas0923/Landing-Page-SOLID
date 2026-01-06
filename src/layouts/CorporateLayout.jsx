import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './CorporateLayout.css';
import { Building2, Menu, X } from 'lucide-react';

const CorporateLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="corporate-layout">
            <nav className="corporate-nav">
                <Link to="/" className="logo">
                    <Building2 size={28} className="logo-icon" />
                    <span>Solutions</span>
                </Link>

                {/* Desktop Links */}
                <div className="links desktop-only">
                    <Link to="/">Inicio</Link>
                    <Link to="/solutions">Soluciones</Link>
                    <Link to="/about">Quienes Somos</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/contact" className="btn-consultancy">
                        Agendar Diagnóstico
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                    <Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Soluciones</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>Quienes Somos</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                    <Link to="/contact" className="btn-consultancy" onClick={() => setIsMenuOpen(false)}>
                        Agendar Diagnóstico
                    </Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div className="logo" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                            <Building2 size={24} className="logo-icon" />
                            <span>Solutions</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '0.95rem' }}>
                            Ingeniería de procesos y automatización industrial avanzada. Transformamos la complejidad en eficiencia operativa.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '2rem', justifyContent: 'flex-end' }}>
                            <Link to="/privacy">Privacidad</Link>
                            <Link to="/terms">Términos</Link>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Solutions Enterprise. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CorporateLayout;
