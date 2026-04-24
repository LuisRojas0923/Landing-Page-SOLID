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
import Logo from '../components/Logo';


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
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '100px 20px 40px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Soluciones de <span style={{ color: 'var(--deep-navy-800)' }}>Ingeniería</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.25rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontStyle: 'italic',
                        lineHeight: '1.6'
                    }}>
                        Infraestructura digital diseñada para escalar su negocio y eliminar la fricción operativa.
                    </p>
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                padding: '2rem',
                                borderRadius: '24px',
                                border: '1px solid var(--deep-navy-400)',
                                position: 'relative',
                                overflow: 'hidden',
                                textAlign: 'left'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{ color: 'var(--deep-navy-800)' }}>
                                    {React.cloneElement(category.icon, { size: 24 })}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>{category.title}</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {category.items.map((item, i) => (
                                    <li key={i} style={{
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem',
                                        textAlign: 'left'
                                    }}>
                                        <div style={{ width: '5px', height: '5px', background: 'var(--deep-navy-800)', borderRadius: '50%', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* FEATURED PRODUCT - Solid ERP (Moved from Home) */}
                <section style={{ padding: '12rem 0 4rem 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{
                            background: 'rgba(0, 20, 60, 0.4)',
                            border: '1px solid rgba(96, 165, 250, 0.4)',
                            padding: '0.5rem 1.8rem',
                            borderRadius: '100px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: '#60a5fa',
                            display: 'inline-block',
                            marginBottom: '1.5rem',
                            letterSpacing: '0.05em',
                            textShadow: '0 0 8px rgba(96, 165, 250, 0.4)',
                            boxShadow: '0 0 12px rgba(96, 165, 250, 0.1)'
                        }}>PRODUCTOS EN ACCIÓN</div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Ecosistema <span style={{ color: 'var(--deep-navy-800)' }}>Solid</span></h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap-reverse',
                        position: 'relative'
                    }}>
                        <div style={{ flex: '1.2', minWidth: '300px' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Logo variant="erp" size="normal" animated={true} />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                Nuestra plataforma de gestión empresarial diseñada para la alta complejidad. Construido sobre un <strong>Núcleo Unificado de Alto Rendimiento (Java Enterprise)</strong>, Solid ERP garantiza una estabilidad absoluta y una escalabilidad vertical masiva, centralizando finanzas, inventarios y nómina en un ecosistema robusto y seguro.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem', marginBottom: '1rem', width: '100%' }}>
                                {["Arquitectura Robusta", "Módulos Configurables", "Seguridad de Grado Bancario", "Integración Nativa con BI"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                        <CheckCircle2 size={18} color="var(--deep-navy-800)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            {/* ERP Software Preview Card with Animations */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                animate={{ 
                                    y: [0, -10, 0],
                                }}
                                transition={{ 
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    duration: 0.8
                                }}
                                style={{ 
                                    width: '100%', 
                                    background: '#1e1e1e', 
                                    borderRadius: '20px', 
                                    border: '1px solid #333', 
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)', 
                                    overflow: 'hidden',
                                    marginBottom: '2.5rem',
                                    position: 'relative',
                                    perspective: '1000px'
                                }}
                            >
                                <div style={{ background: '#2d2d2d', padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '6px' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></span>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></span>
                                    </div>
                                    <div style={{ fontSize: '0.6rem', color: '#888', fontWeight: '600', letterSpacing: '0.05em' }}>SOLID ERP - CONTROL PANEL</div>
                                </div>
                                <div style={{ position: 'relative', paddingTop: '60%', background: '#f0f0f0', overflow: 'hidden' }}>
                                    <motion.img 
                                        src="/images/erp-screenshot.png" 
                                        alt="Solid ERP Interface" 
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            x: [0, -10, 0],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{ 
                                            duration: 10, 
                                            repeat: Infinity, 
                                            ease: "linear" 
                                        }}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                    {/* Logo Overlay to replace original header */}
                                    <div style={{ 
                                        position: 'absolute', 
                                        top: 0, 
                                        left: 0, 
                                        width: '100%', 
                                        height: '14%', 
                                        background: '#001a3d', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        padding: '0 1.5rem',
                                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                                        zIndex: 2
                                    }}>
                                        <Logo variant="erp" size="small" animated={true} />
                                    </div>
                                    {/* Scanning Light Effect - Enhanced */}
                                    <motion.div
                                        animate={{ 
                                            left: ['-100%', '200%'],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{ 
                                            duration: 4, 
                                            repeat: Infinity, 
                                            repeatDelay: 1,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            width: '60%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.15), transparent)',
                                            zIndex: 1,
                                            filter: 'blur(20px)',
                                            transform: 'skewX(-25deg)'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PRODUCT IN ACTION (VIDEO) (Moved from Home) */}
                <section style={{ padding: '4rem 0' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        position: 'relative'
                    }}>
                        <div style={{ flex: '1.2', minWidth: '300px' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Logo variant="portal" size="normal" animated={true} />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'left', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                Visualice la simplicidad operativa. Centralice solicitudes, tickets y procesos internos en una interfaz diseñada para la velocidad.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem', width: '100%' }}>
                                {["Arquitectura en la Nube", "Gestión de Solicitudes en tiempo real", "Flujos de Trabajo Automatizados", "Panel de Control Intuitivo"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                        <CheckCircle2 size={18} color="var(--deep-navy-800)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ flex: '1', minWidth: '300px', position: 'relative', background: '#1e1e1e', borderRadius: '24px', border: '1px solid #333', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                            <div style={{ background: '#2d2d2d', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
                                </div>
                                <div style={{ background: '#1e1e1e', flex: 1, height: '24px', borderRadius: '6px', fontSize: '0.65rem', display: 'flex', alignItems: 'center', padding: '0 0.75rem', color: '#666' }}>
                                    solid_service_portal.solutions/dashboard
                                </div>
                            </div>

                            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
                                <video src="/videos/portal-demo.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                {/* Logo Overlay for Portal */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    left: 0, 
                                    width: '100%', 
                                    height: '14%', 
                                    background: 'rgba(0, 26, 61, 0.9)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    padding: '0 1.5rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    zIndex: 2
                                }}>
                                    <Logo variant="portal" size="small" animated={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Centered Demo Button below columns */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem', width: '100%' }}>
                        <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            onClick={() => navigate('/contact')} 
                            style={{ 
                                backgroundColor: 'var(--deep-navy-800)', 
                                color: 'white', 
                                padding: '1.2rem 3rem', 
                                borderRadius: '14px', 
                                fontSize: '1.1rem',
                                fontWeight: '700', 
                                border: 'none', 
                                cursor: 'pointer', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.8rem',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            Solicitar Demo <ExternalLink size={20} />
                        </motion.button>
                    </div>
                </section>




            </div>
        </div>
    );
};

export default Services;
