import React, { useState } from 'react';
import { Outlet, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './CorporateLayout.css';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

const CorporateLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        
        const performScroll = (id) => {
            if (id === 'diagnostico') {
                // Forzamos el scroll al final absoluto para asegurar Diagnóstico + Footer
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => performScroll(sectionId), 300);
        } else {
            performScroll(sectionId);
        }
    };

    return (
        <div className="corporate-layout">
            <nav className="corporate-nav">
                <Link to="/" className="logo-container" aria-label="SOLID SOLUTIONS - Inicio">
                    <Logo variant="icon" />
                </Link>

                {/* Desktop Links */}
                <div className="links desktop-only">
                    <div className="nav-item-has-dropdown">
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Inicio</NavLink>
                        <div className="nav-dropdown">
                            <button onClick={() => scrollToSection('home')} className="dropdown-link">Arquitectura de Datos e Ingeniería de Software</button>
                            <button onClick={() => scrollToSection('impact')} className="dropdown-link">Impacto Medible</button>
                            <button onClick={() => scrollToSection('method')} className="dropdown-link">Nuestro Método</button>
                            <button onClick={() => scrollToSection('tech-stack')} className="dropdown-link">Stack Tecnológico de Alto Nivel</button>
                            <button onClick={() => scrollToSection('diagnostico')} className="dropdown-link">Diagnóstico</button>
                        </div>
                    </div>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>Quiénes Somos</NavLink>
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
                    <button onClick={() => scrollToSection('impact')} className="mobile-link">Impacto Medible</button>
                    <button onClick={() => scrollToSection('method')} className="mobile-link">Nuestro Método</button>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'mobile-active' : ''} onClick={() => setIsMenuOpen(false)}>Quiénes Somos</NavLink>
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
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Logo size="large" />
                            </Link>
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
