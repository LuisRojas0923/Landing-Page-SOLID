import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    BarChart3,
    Smartphone,
    Bot,
    Database,
    ShieldCheck,
    Workflow,
    Zap,
    ChevronRight,
    Search,
    Layers,
    Code2,
    CheckCircle2,
    ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Software a Medida",
            icon: <Code2 className="text-emerald-400" />,
            items: [
                "Sistemas de escritorio en Java (Swing/FX)",
                "Backends de alto rendimiento con FastAPI",
                "Interfaces modernas en React + Tailwind",
                "Arquitecturas escalables y seguras"
            ]
        },
        {
            title: "Ingeniería de Automatización",
            icon: <Workflow className="text-cyan-400" />,
            items: [
                "Orquestación con n8n y Python-RPA",
                "Bots de extracción de datos (Scraping)",
                "Integración de APIs y Webhooks",
                "Automatización de nómina y facturación"
            ]
        },
        {
            title: "Data & Business Intelligence",
            icon: <BarChart3 className="text-purple-400" />,
            items: [
                "Dashboards interactivos en PowerBI/Looker",
                "Arquitectura de SQL y Data Lakes",
                "Limpieza y validación masiva de datos",
                "Reportes automatizados por correo"
            ]
        },
        {
            title: "Procesamiento de Documentos (OCR)",
            icon: <Search className="text-orange-400" />,
            items: [
                "Extracción de datos en facturas y recibos",
                "Validación de identidad y documentos legales",
                "Registro automático de incapacidades (RRHH)",
                "Digitalización predictiva de archivos legacy"
            ]
        },
        {
            title: "Ecosistemas & Solid ERP",
            icon: <Layers className="text-blue-400" />,
            items: [
                "Infraestructura Java Enterprise",
                "Implementación de módulos Solid ERP",
                "Migración de datos desde sistemas legacy",
                "Integración con APIs de terceros"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
                        Soluciones de <span style={{ color: 'var(--deep-navy-800)' }}>Ingeniería</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        Desarrollamos infraestructura digital diseñada para escalar su negocio y eliminar la fricción operativa.
                    </p>
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            style={{
                                background: 'rgba(0, 13, 39, 0.4)',
                                padding: '3rem',
                                borderRadius: '24px',
                                border: '1px solid var(--deep-navy-400)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                {category.icon}
                            </div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>{category.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {category.items.map((item, i) => (
                                    <li key={i} style={{
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1rem',
                                        fontSize: '1rem'
                                    }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--deep-navy-800)', borderRadius: '50%' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* FEATURED PRODUCT - Solid ERP (Moved from Home) */}
                <section style={{ padding: '8rem 0', marginTop: '4rem', background: 'linear-gradient(180deg, transparent, rgba(0, 32, 96, 0.05), transparent)' }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '40px',
                        border: '1px solid var(--deep-navy-400)',
                        padding: '4rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap-reverse',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ flex: '1.2', minWidth: '300px' }}>
                            <div style={{ color: 'var(--deep-navy-800)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>PRODUCTO DESTACADO</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ecosistema <span style={{ color: 'var(--deep-navy-800)' }}>Solid ERP</span></h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                Nuestra plataforma de gestión empresarial diseñada para la alta complejidad. Construido sobre un <strong>Núcleo Unificado de Alto Rendimiento (Java Enterprise)</strong>, Solid ERP garantiza una estabilidad absoluta y una escalabilidad vertical masiva, centralizando finanzas, inventarios y nómina en un ecosistema robusto y seguro.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                                {["Arquitectura en la Nube", "Módulos Configurables", "Seguridad de Grado Bancario", "Integración Nativa con BI"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                        <CheckCircle2 size={18} color="var(--deep-navy-800)" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/contact')} style={{ backgroundColor: 'var(--deep-navy-800)', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontWeight: '700', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Solicitar Demo <ExternalLink size={18} />
                            </motion.button>
                        </div>
                        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <motion.img src="/projects/logotipo.png" alt="Solid ERP Logo" style={{ width: '100%', maxWidth: '350px', filter: 'drop-shadow(0 0 20px rgba(0, 32, 96, 0.2))' }} whileHover={{ scale: 1.1, rotate: -2 }} />
                        </div>
                    </div>
                </section>

                {/* PRODUCT IN ACTION (VIDEO) (Moved from Home) */}
                <section style={{ padding: '8rem 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ color: 'var(--deep-navy-800)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>PRODUCTO EN ACCIÓN</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ecosistema <span style={{ color: 'var(--deep-navy-800)' }}>Solid Service Portal</span></h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>Visualice la simplicidad operativa. Centralice solicitudes, tickets y procesos internos en una interfaz diseñada para la velocidad.</p>
                    </div>

                    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', background: '#1e1e1e', borderRadius: '24px', border: '1px solid #333', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                        <div style={{ background: '#2d2d2d', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
                            </div>
                            <div style={{ background: '#1e1e1e', flex: 1, height: '28px', borderRadius: '6px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', padding: '0 1rem', color: '#666' }}>
                                solid_service_portal.solutions/dashboard
                            </div>
                        </div>

                        <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
                            <video src="/videos/portal-demo.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </section>

                {/* Tech Bar */}
                <section style={{
                    marginTop: '100px',
                    padding: '2.5rem 1rem',
                    background: 'rgba(0, 13, 39, 0.4)'
                }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
                        <div className="impact-badge-container" style={{ textAlign: 'center', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                            <span className="impact-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.6rem 2.5rem', margin: '0 auto', width: 'fit-content' }}>
                                <Zap size={18} /> Stack Tecnológico de Élite
                            </span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 'clamp(0.5rem, 2vw, 2rem)',
                            alignItems: 'center',
                            padding: '0',
                            flexWrap: 'wrap'
                        }}>
                            {[
                                { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '3776AB' },
                                { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '4169E1' },
                                { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '61DAFB' },
                                { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B', color: '02569B' },
                                { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/f89820', color: 'f89820' },
                                { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75C2', color: '8E75C2' },
                                { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '2496ED' },
                                { name: 'Power BI', icon: 'https://img.icons8.com/color/96/power-bi.png', color: 'F2C811' },
                                { name: 'Power Query', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png', color: '217346' },
                                { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF6D5A', color: 'FF6D5A' }
                            ].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, y: -4 }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '70px' }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <span style={{
                                        fontSize: '0.6rem',
                                        fontWeight: '800',
                                        color: 'var(--text-secondary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        textAlign: 'center',
                                        display: 'block',
                                        width: '100%'
                                    }}>{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
