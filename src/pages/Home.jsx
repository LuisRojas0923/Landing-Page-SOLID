import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    ShieldCheck,
    Zap,
    BarChart3,
    Globe,
    Database,
    Cpu,
    Smartphone,
    PieChart,
    Bot,
    ExternalLink,
    ChevronRight,
    CheckCircle2,
    Mail,
    Workflow,
    FileSpreadsheet,
    Clock,
    Terminal as TerminalIcon,
    MessageSquare,
    TrendingUp,
    Search,
    Code2,
    Layers
} from 'lucide-react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Search size={24} />,
            title: "Inteligencia de Documentos (OCR)",
            desc: "Convertimos documentos físicos en datos accionables: de facturas e incapacidades a registros digitales en segundos."
        },
        {
            icon: <Code2 size={24} />,
            title: "Software a Medida",
            desc: "Ingeniería agnóstica: nos adaptamos a su necesidad con Java Swing para escritorio o backends robustos con FastAPI y React."
        },
        {
            icon: <Cpu size={24} />,
            title: "Automatización Industrial",
            desc: "Orquestación de procesos mediante workflows inteligentes (n8n/Python) que eliminan el error humano."
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Business Intelligence",
            desc: "Dashboards de alta fidelidad para control de nómina, inventarios y finanzas en tiempo real."
        }
    ];

    return (
        <div className="home-container" style={{ color: 'var(--text-primary)' }}>
            {/* Hero Section */}
            <section id="home" style={{
                padding: 'clamp(6rem, 15vh, 10rem) 2rem 8rem',
                textAlign: 'center',
                position: 'relative',
                background: 'radial-gradient(circle at 50% -20%, var(--deep-navy-500) 0%, transparent 60%)',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '100px',
                        background: 'rgba(0, 32, 96, 0.3)',
                        border: '1px solid var(--deep-navy-400)',
                        color: 'var(--deep-navy-800)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '2rem'
                    }}>
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Arquitectura de Datos e Ingeniería de Software</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.05',
                        marginBottom: '1.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto 1.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Potenciamos su empresa con <br />
                        <span style={{ color: 'var(--deep-navy-800)' }}>soluciones autónomas.</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '750px',
                        margin: '0 auto 4rem',
                        lineHeight: '1.6'
                    }}>
                        SOLID SOLUTIONS elimina la fricción operativa. Conectamos sus sistemas, automatizamos sus procesos y preparamos sus datos para la era de la IA.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            style={{
                                backgroundColor: 'var(--deep-navy-500)',
                                color: 'white',
                                padding: '1.2rem 2.8rem',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                boxShadow: '0 15px 35px rgba(0, 32, 96, 0.4)',
                                cursor: 'pointer'
                            }}
                        >
                            Agendar Diagnóstico <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ background: 'rgba(255,255,255,0.05)' }}
                            onClick={() => navigate('/solutions')}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                padding: '1.2rem 2.8rem',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                border: '1px solid var(--deep-navy-400)',
                                cursor: 'pointer'
                            }}
                        >
                            Explorar Soluciones
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* TECH SHOWCASE SECTION - Mac Style Windows */}
            <section id="demo" style={{ padding: '8rem 2rem', background: 'rgba(0, 13, 39, 0.4)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Capacidades en Acción</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Una muestra visual de nuestra ingeniería aplicada.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                        {/* n8n Window */}
                        <div className="mac-window">
                            <div className="mac-header">
                                <div className="mac-buttons">
                                    <div className="mac-btn red"></div>
                                    <div className="mac-btn yellow"></div>
                                    <div className="mac-btn green"></div>
                                </div>
                                <div className="mac-title">workflow_engine.n8n</div>
                            </div>
                            <div className="workflow-canvas">
                                {/* Simulated Nodes */}
                                <motion.div
                                    className="workflow-node"
                                    style={{ top: '20%', left: '10%' }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <div className="node-icon-wrapper"><Mail size={24} color="#002060" /></div>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>EMAIL TRIGGER</span>
                                </motion.div>

                                <motion.div
                                    className="workflow-node"
                                    style={{ top: '50%', left: '40%' }}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <div className="node-icon-wrapper" style={{ border: '2px solid var(--deep-navy-800)' }}><Bot size={24} color="#002060" /></div>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>AI CLASSIFICATION</span>
                                </motion.div>

                                <motion.div
                                    className="workflow-node"
                                    style={{ top: '30%', left: '75%' }}
                                >
                                    <div className="node-icon-wrapper"><Database size={24} color="#002060" /></div>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>ERP UPDATE</span>
                                </motion.div>

                                {/* Animated Particles */}
                                <motion.div
                                    className="particle"
                                    animate={{
                                        left: ['15%', '42%'],
                                        top: ['35%', '55%'],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="particle"
                                    animate={{
                                        left: ['50%', '76%'],
                                        top: ['55%', '43%'],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                />
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Automatización n8n</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Orquestación de flujos multi-plataforma.</p>
                                </div>
                                <Zap size={20} color="var(--deep-navy-800)" />
                            </div>
                        </div>

                        {/* Code Window */}
                        <div className="mac-window">
                            <div className="mac-header">
                                <div className="mac-buttons">
                                    <div className="mac-btn red"></div>
                                    <div className="mac-btn yellow"></div>
                                    <div className="mac-btn green"></div>
                                </div>
                                <div className="mac-title">payroll_processor.py</div>
                            </div>
                            <div className="terminal-content">
                                <div className="terminal-line"><span style={{ color: '#c678dd' }}>import</span> pandas <span style={{ color: '#c678dd' }}>as</span> pd</div>
                                <div className="terminal-line"><span style={{ color: '#c678dd' }}>from</span> solutions_engine <span style={{ color: '#c678dd' }}>import</span> calc_overtime</div>
                                <div className="terminal-line">&nbsp;</div>
                                <div className="terminal-line"><span style={{ color: '#e06c75' }}>def</span> <span style={{ color: '#61afef' }}>liquidar_novedades</span>(df):</div>
                                <div className="terminal-line">&nbsp;&nbsp;&nbsp;&nbsp;df[<span style={{ color: '#98c379' }}>'recargos'</span>] = df.apply(calc_overtime)</div>
                                <div className="terminal-line">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>return</span> df.merge_to_erp()</div>
                                <div className="terminal-line">&nbsp;</div>
                                <div className="terminal-line"><span style={{ color: '#5c6370' }}># Sistema procesando 4,500 registros...</span></div>
                                <div className="terminal-line"><span style={{ color: '#98c379' }}>[SUCCESS]</span> Nómina procesada en 12.4s <span className="terminal-cursor"></span></div>
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Python Scraping & RPA</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Procesamiento masivo de alta precisión.</p>
                                </div>
                                <TerminalIcon size={20} color="var(--deep-navy-800)" />
                            </div>
                        </div>

                        {/* Migration Window */}
                        <div className="mac-window">
                            <div className="mac-header">
                                <div className="mac-buttons">
                                    <div className="mac-btn red"></div>
                                    <div className="mac-btn yellow"></div>
                                    <div className="mac-btn green"></div>
                                </div>
                                <div className="mac-title">data_migration.sql</div>
                            </div>
                            <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src="/projects/migration.png"
                                    alt="Migration Visualization"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                                />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                                    <Database size={48} color="white" />
                                </div>
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ingeniería de Datos</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Migraciones críticas y ETL robusto.</p>
                                </div>
                                <Layers size={20} color="var(--deep-navy-800)" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS SECTION - Industrial Precision */}
            <section id="results" style={{ padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ color: 'var(--deep-navy-800)', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Impacto Medible</div>
                            <h2 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '2rem' }}>Ingeniería que se paga sola.</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                                En un caso reciente para una planta industrial, redujimos el tiempo de liquidación de novedades mensuales en un 80%, eliminando errores de digitación y liberando al equipo contable para tareas estratégicas.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-value">0%</span>
                                    <span className="stat-label">Margen de Error</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">x10</span>
                                    <span className="stat-label">Velocidad</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">+70h</span>
                                    <span className="stat-label">Horas Libres</span>
                                </div>
                            </div>
                        </div>

                        {/* Savings Graph */}
                        <div className="mac-window" style={{ background: 'var(--deep-navy-100)', padding: '0' }}>
                            <div className="savings-comparison-container">
                                <div className="savings-bar-wrapper">
                                    <span className="savings-bar-value" style={{ color: '#ff5f56' }}>87h</span>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: '180px' }}
                                        viewport={{ once: true }}
                                        className="savings-bar"
                                        style={{ background: 'rgba(255, 95, 86, 0.2)', border: '1px solid #ff5f56' }}
                                    />
                                    <span className="savings-bar-label">ANTES (MANUAL)</span>
                                </div>

                                <div className="savings-arrow-wrapper">
                                    <ArrowRight size={32} />
                                </div>

                                <div className="savings-bar-wrapper">
                                    <span className="savings-bar-value" style={{ color: '#27c93f' }}>17h</span>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: '40px' }}
                                        viewport={{ once: true }}
                                        className="savings-bar"
                                        style={{ background: 'rgba(39, 201, 63, 0.2)', border: '1px solid #27c93f', boxShadow: '0 0 20px rgba(39, 201, 63, 0.3)' }}
                                    />
                                    <span className="savings-bar-label">AHORA (AUTÓNOMO)</span>
                                </div>
                            </div>
                            <p style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0' }}>
                                Optimización del procesamiento mensual de novedades
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCT - Solid ERP */}
            <section style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, transparent, rgba(0, 32, 96, 0.05), transparent)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Nuestra plataforma de gestión empresarial diseñada para la alta complejidad. Construido sobre un <strong>Núcleo Unificado de Alto Rendimiento (Java Enterprise)</strong>, Solid ERP garantiza una estabilidad absoluta y una escalabilidad vertical masiva, centralizando finanzas, inventarios y nómina en un ecosistema robusto y seguro.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                                {[
                                    "Arquitectura en la Nube",
                                    "Módulos Configurables",
                                    "Seguridad de Grado Bancario",
                                    "Integración Nativa con BI"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                                        <CheckCircle2 size={18} color="var(--deep-navy-800)" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                style={{
                                    backgroundColor: 'var(--deep-navy-800)',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    fontWeight: '700',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Solicitar Demo <ExternalLink size={18} />
                            </motion.button>
                        </div>
                        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <motion.img
                                src="/projects/logotipo.png"
                                alt="Solid ERP Logo"
                                style={{ width: '100%', maxWidth: '350px', filter: 'drop-shadow(0 0 20px rgba(0, 32, 96, 0.2))' }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                            />
                        </div>

                        {/* Decorative Background Elements */}
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--deep-navy-500) 0%, transparent 70%)', opacity: 0.1, zIndex: -1 }} />
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section id="services" style={{ padding: '8rem 2rem', background: 'rgba(0, 13, 39, 0.2)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Nuestras Verticales</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '3rem',
                                    background: 'var(--deep-navy-100)',
                                    borderRadius: '24px',
                                    border: '1px solid var(--deep-navy-400)',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ color: 'var(--deep-navy-800)', marginBottom: '1.5rem' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{s.desc}</p>
                                <button
                                    onClick={() => navigate('/solutions')}
                                    style={{ background: 'none', border: 'none', color: 'var(--deep-navy-800)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}
                                >
                                    Ver Detalles <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK BAR */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(0, 13, 39, 0.4)', borderTop: '1px solid var(--deep-navy-400)', borderBottom: '1px solid var(--deep-navy-400)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.3em', textAlign: 'center', fontWeight: '800' }}>
                        Stack Tecnológico de Alto Nivel
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 'clamp(2rem, 5vw, 3rem)',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '3rem',
                        borderRadius: '32px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
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
                                whileHover={{ scale: 1.15, y: -8 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '110px' }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '14px',
                                    boxShadow: `0 0 20px rgba(0, 0, 0, 0.2), 0 0 10px #${tech.color}33`,
                                    transition: 'all 0.3s ease'
                                }}>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: tech.name.includes('Power') ? 'none' : 'drop-shadow(0 0 4px rgba(0,0,0,0.5))' }}
                                    />
                                </div>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="contact" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: '800' }}>¿Listo para escalar su infraestructura?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                        Agende una consultoría técnica gratuita y descubra el potencial de automatización de su negocio.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--bg-main)',
                            padding: '1.2rem 3rem',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Solicitar Diagnóstico
                    </button>
                    <div style={{ marginTop: '3rem' }}>
                        <a
                            href="https://wa.me/573163227764?text=Hola,%20quisiera%20agendar%20un%20diagnóstico%20de%20automatización%20para%20mi%20empresa."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
                        >
                            <MessageSquare size={18} /> O hable con un experto vía WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
