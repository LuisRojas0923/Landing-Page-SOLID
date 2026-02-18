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
                    <NavLink to="/solutions" className={({ isActive }) => isActive ? 'nav-active' : ''}>Soluciones</NavLink>
                    <NavLink to="/brochure" className={({ isActive }) => isActive ? 'nav-active nav-brochure' : 'nav-brochure'}>Brochure</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>Contacto</NavLink>
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
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Inicio</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Quienes Somos</NavLink>
                    <NavLink to="/solutions" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Soluciones</NavLink>
                    <NavLink to="/brochure" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Brochure</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
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
                            <span>SOLID SOLUTIONS</span>
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
                        <p>&copy; {new Date().getFullYear()} SOLID SOLUTIONS Enterprise. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CorporateLayout;
