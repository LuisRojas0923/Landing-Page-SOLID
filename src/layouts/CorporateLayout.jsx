import React, { useState } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import './CorporateLayout.css';
import { Building2, Menu, X } from 'lucide-react';

const CorporateLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="corporate-layout">
            <nav className="corporate-nav">
                <Link to="/" className="logo" aria-label="SOLID SOLUTIONS - Inicio">
                    <img
                        src="/projects/logotipo.png"
                        alt="SOLID SOLUTIONS"
                        className="logo-img"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="links desktop-only">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Inicio</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>Quienes Somos</NavLink>
                    <NavLink to="/method" className={({ isActive }) => isActive ? 'nav-active' : ''}>Nuestro Método</NavLink>
                    <NavLink to="/solutions" className={({ isActive }) => isActive ? 'nav-active' : ''}>Soluciones</NavLink>
                    <NavLink to="/brochure" className={({ isActive }) => isActive ? 'nav-active nav-brochure' : 'nav-brochure'}>Brochure</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>Contacto</NavLink>
                    <Link to="/contact" className="btn-consultancy">
                        Agenda tu Diagnóstico
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
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Inicio</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Quienes Somos</NavLink>
                    <NavLink to="/method" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Nuestro Método</NavLink>
                    <NavLink to="/solutions" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Soluciones</NavLink>
                    <NavLink to="/brochure" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Brochure</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
                    <Link to="/contact" className="btn-consultancy" onClick={() => setIsMenuOpen(false)}>
                        Agenda tu Diagnóstico
                    </Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer style={{ 
                padding: '2.5rem 1rem 1.5rem', 
                background: 'rgba(0, 3, 10, 0.95)', 
                borderTop: '1px solid rgba(0, 122, 255, 0.2)'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div className="logo" style={{ 
                            marginBottom: '1.5rem', 
                            fontSize: '1.4rem', 
                            fontWeight: '800', 
                            fontStyle: 'italic', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.4rem',
                            letterSpacing: '-0.02em'
                        }}>
                            <Building2 size={24} className="logo-icon" style={{ color: '#fff' }} />
                            <span style={{ color: '#fff' }}>Solid</span>
                            <span style={{ color: '#60a5fa' }}>Solutions</span>
                        </div>
                        <p style={{ 
                            color: 'var(--text-secondary)', 
                            maxWidth: '400px', 
                            fontSize: '1.05rem',
                            fontFamily: "'Roboto', sans-serif",
                            fontStyle: 'italic',
                            lineHeight: '1.6',
                            opacity: 0.8
                        }}>
                            Ingeniería de procesos y automatización industrial avanzada. Transformamos la complejidad en eficiencia operativa.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'flex-end', fontWeight: '600' }}>
                            <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacidad</Link>
                            <Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Términos</Link>
                        </div>
                        <p style={{ fontStyle: 'italic', opacity: 0.7 }}>&copy; {new Date().getFullYear()} SOLID SOLUTIONS Enterprise. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CorporateLayout;
