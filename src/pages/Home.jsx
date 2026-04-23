import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
    TrendingDown,
    Search,
    Code2,
    Layers
} from 'lucide-react';
import './Home.css';

const Home = () => {
    const verticals = [
        {
            icon: <Workflow size={28} />,
            number: '01',
            title: 'Organizamos',
            tagline: 'Orden antes de tecnología',
            desc: 'Mapeamos sus procesos, eliminamos lo que no agrega valor y diseñamos flujos claros y replicables.',
            items: [
                { icon: <Search size={16} />, label: 'Auditoría de procesos' },
                { icon: <FileSpreadsheet size={16} />, label: 'Estandarización de datos' },
                { icon: <Layers size={16} />, label: 'Diagramas de flujo optimizados' },
            ]
        },
        {
            icon: <Code2 size={28} />,
            number: '02',
            title: 'Sistematizamos',
            tagline: 'Software que conecta su operación',
            desc: 'Construimos herramientas a medida que centralizan su información and conectan áreas que antes trabajaban aisladas.',
            items: [
                { icon: <Database size={16} />, label: 'Ingeniería de datos & BI' },
                { icon: <Code2 size={16} />, label: 'Software a medida (Java, Python, React)' },
                { icon: <BarChart3 size={16} />, label: 'Dashboards en tiempo real' },
            ]
        },
        {
            icon: <Bot size={28} />,
            number: '03',
            title: 'Automatizamos',
            tagline: 'Procesos que se ejecutan solos',
            desc: 'Implementamos flujos de trabajo digitales que ejecutan tareas repetitivas sin intervención humana, con cero errores, 24/7.',
            items: [
                { icon: <Cpu size={16} />, label: 'RPA y workflows (n8n / Python)' },
                { icon: <Search size={16} />, label: 'OCR e inteligencia documental' },
                { icon: <Zap size={16} />, label: 'Integraciones y APIs automáticas' },
            ]
        }
    ];

    const navigate = useNavigate();
    const [activeImpact, setActiveImpact] = React.useState(null);



    return (
        <div className="home-container" style={{ color: 'var(--text-primary)' }}>
            <Helmet>
                <title>SOLID SOLUTIONS - Ingeniería de Precisión</title>
                <meta name="description" content="Potenciamos su empresa con soluciones autónomas y arquitectura de datos avanzada." />
            </Helmet>
            {/* Hero Section */}
            <section id="home" style={{
                padding: '2rem 2rem 8rem',
                textAlign: 'center',
                position: 'relative',
                background: 'radial-gradient(circle at 50% -20%, var(--deep-navy-500) 0%, transparent 60%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        padding: '0 clamp(1rem, 4vw, 2rem)',
                        margin: '0 auto'
                    }}
                >
                    <div className="luxe-badge" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 2rem',
                        marginTop: '0',
                        marginBottom: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '100%',
                        textTransform: 'none'
                    }}>
                        <Zap size={16} />
                        <span>Arquitectura de Datos e Ingeniería de Software</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        marginBottom: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto 2rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Potenciamos su empresa con <br />
                        <span style={{ color: 'var(--deep-navy-800)', display: 'block', marginTop: '0.75rem' }}>soluciones autónomas</span>
                    </h1>

                    <p className="hero-subtitle" style={{
                        fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
                        color: 'white',
                        fontWeight: '800',
                        maxWidth: '1000px',
                        margin: '0 auto 2.5rem',
                        lineHeight: '1.5'
                    }}>
                        Organizamos, sistematizamos y automatizamos su operación.
                    </p>

                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '1000px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        fontStyle: 'italic',
                        fontFamily: "'Roboto', sans-serif"
                    }}>
                        En <span className="method-title" style={{ fontSize: 'inherit', display: 'inline', margin: 0 }}>Solid</span> <span className="vertical-tagline" style={{ fontSize: 'inherit', display: 'inline', color: 'var(--deep-navy-800)', fontWeight: 800 }}>Solutions</span> estructuramos su operación, diseñamos la arquitectura que conecta sus datos y automatizamos sus tareas críticas, eliminando la fricción operativa y preparando su empresa para crecer con tecnología e inteligencia artificial.
                    </p>

                    {/* Buttons removed from here and moved to Diagnóstico */}
                </motion.div>
            </section>

            {/* RESULTS SECTION - Versión Premium exacta a la imagen */}
            <section id="impact" style={{ 
                padding: '4rem 2rem', 
                background: 'var(--deep-navy-200)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="impact-badge-container">
                        <span className="impact-badge">Impacto Medible</span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        Ingeniería que se paga sola
                    </h2>

                    <p style={{
                        color: 'var(--deep-navy-800)',
                        fontSize: '2rem',
                        fontWeight: '800',
                        letterSpacing: '-0.03em',
                        marginBottom: '2rem',
                        lineHeight: '1.2',
                        whiteSpace: 'nowrap'
                    }}>
                        Menor costo operativo, mayor rentabilidad
                    </p>

                    <p className="method-desc" style={{
                        maxWidth: '1000px',
                        margin: '0 auto 4rem',
                        fontSize: '1.25rem',
                        opacity: 0.9,
                        color: 'rgba(180, 210, 240, 0.75)'
                    }}>
                        Optimizamos el rendimiento corporativo automatizando procesos repetitivos para minimizar el error humano, reducir costos operativos y aumentar la productividad, de modo que su talento se enfoque en iniciativas estratégicas de alto valor que impulsen la rentabilidad.
                    </p>

                    <div className="impact-showcase-luxe">
                        <div className="impact-main-visual">
                            <div className="pipeline-premium-horizontal">
                                <motion.div
                                    className="pipeline-flow-beam"
                                    animate={{ left: ['0%', '100%'] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                    onUpdate={(latest) => {
                                        const x = parseFloat(latest.left);
                                        // Bubbles: Calidad (1st), Eficiencia (2nd), Crecimiento (3rd)
                                        // Cards: Error (Red), Productividad (Amber), Costos (Green)
                                        if (x >= 10 && x <= 23.2) setActiveImpact('calidad');
                                        else if (x >= 43.4 && x <= 56.6) setActiveImpact('eficiencia');
                                        else if (x >= 76.7 && x <= 89.9) setActiveImpact('crecimiento');
                                        else setActiveImpact(null);
                                    }}
                                />

                                <div className={`glass-capsule ${activeImpact === 'calidad' ? 'active' : ''}`}>
                                    <span className="pill-item-label">CALIDAD</span>
                                </div>
                                <div className={`glass-capsule ${activeImpact === 'eficiencia' ? 'active' : ''}`}>
                                    <span className="pill-item-label">PRODUCTIVIDAD</span>
                                </div>
                                <div className={`glass-capsule ${activeImpact === 'crecimiento' ? 'active' : ''}`}>
                                    <span className="pill-item-label">CRECIMIENTO</span>
                                </div>
                            </div>
                        </div>

                        <div className="results-premium-grid">
                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper red"><ShieldCheck size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <TrendingDown size={34} strokeWidth={3} />
                                        <span>$</span>
                                    </div>
                                    <div className="stat-label-luxe red">COSTOS OPERATIVOS</div>
                                </div>
                            </motion.div>

                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper amber"><Zap size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <TrendingUp size={34} strokeWidth={3} />
                                        <span>x</span>
                                    </div>
                                    <div className="stat-label-luxe amber">EFICIENCIA</div>
                                </div>
                            </motion.div>

                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper green"><TrendingUp size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <TrendingUp size={34} strokeWidth={3} />
                                        <span>$</span>
                                    </div>
                                    <div className="stat-label-luxe green">RENTABILIDAD</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="method" style={{ 
                padding: '4rem 2rem', 
                background: 'rgba(0, 13, 39, 0.4)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div className="luxe-badge" style={{ marginBottom: '1.5rem' }}>Nuestro Método</div>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: '1rem',
                            maxWidth: '1200px',
                            margin: '0 auto 1rem',
                            letterSpacing: '-0.03em',
                            whiteSpace: 'nowrap'
                        }}>
                            Así transformamos su operación
                        </h2>
                        <p style={{
                            color: 'var(--deep-navy-800)',
                            maxWidth: 'none',
                            margin: '0 auto',
                            fontSize: '2rem',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                        }}>
                            Tres pasos que eliminan la fricción operativa de su empresa
                        </p>
                    </div>

                    <div className="method-pipeline-container">
                        <div className="method-pipeline-track">
                            <div className="pipeline-particle" />
                        </div>

                        <div className="method-grid">
                            {/* PASO 01: Organizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="method-stepper">
                                    <span className="method-number illuminate-1">01</span>
                                    <div className="method-icon-badge illuminate-1">
                                        <Workflow size={16} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Organizamos</h3>
                                <span className="vertical-tagline">Orden antes de tecnología</span>


                                <div className="mac-window phase-window">
                                    <div className="mac-header">

                                        <div className="mac-title">process_audit.flow</div>
                                    </div>
                                    <div className="vertical-card-top" style={{ padding: '0.5rem', marginBottom: '0.5rem' }}>
                                        <span className="vertical-number">01</span>
                                        <div className="vertical-icon">
                                            <Workflow size={28} />
                                        </div>
                                    </div>
                                    <div className="flow-comparison">
                                        <div className="flow-side">
                                            <span className="flow-label">ANTES</span>
                                            <svg viewBox="0 0 160 100" className="flow-diagram">
                                                <line x1="20" y1="15" x2="80" y2="50" className="flow-line-messy" />
                                                <line x1="80" y1="50" x2="140" y2="20" className="flow-line-messy" />
                                                <line x1="30" y1="75" x2="80" y2="50" className="flow-line-messy" />
                                                <line x1="80" y1="50" x2="130" y2="80" className="flow-line-messy" />
                                                <line x1="20" y1="15" x2="60" y2="80" className="flow-line-messy" />
                                                <line x1="140" y1="20" x2="100" y2="75" className="flow-line-messy" />
                                                <circle cx="20" cy="15" r="6" className="flow-node-messy" />
                                                <circle cx="80" cy="50" r="6" className="flow-node-messy" />
                                                <circle cx="140" cy="20" r="6" className="flow-node-messy" />
                                                <circle cx="30" cy="75" r="6" className="flow-node-messy" />
                                                <circle cx="130" cy="80" r="6" className="flow-node-messy" />
                                                <circle cx="60" cy="80" r="6" className="flow-node-messy" />
                                                <circle cx="100" cy="75" r="6" className="flow-node-messy" />
                                            </svg>
                                            <span className="flow-stat">6 pasos, 8 cruces</span>
                                        </div>
                                        <div className="flow-arrow"><ArrowRight size={14} /></div>
                                        <div className="flow-side">
                                            <span className="flow-label flow-label-ok">DESPUÉS</span>
                                            <svg viewBox="0 0 160 100" className="flow-diagram">
                                                <line x1="80" y1="15" x2="80" y2="85" className="flow-line-clean" />
                                                <rect x="62" y="8" width="36" height="16" rx="4" className="flow-node-clean" />
                                                <text x="80" y="19" textAnchor="middle" fill="#27c93f" fontSize="9">✓</text>
                                                <rect x="62" y="38" width="36" height="16" rx="4" className="flow-node-clean" />
                                                <text x="80" y="49" textAnchor="middle" fill="#27c93f" fontSize="9">✓</text>
                                                <rect x="62" y="68" width="36" height="16" rx="4" className="flow-node-clean" />
                                                <text x="80" y="79" textAnchor="middle" fill="#27c93f" fontSize="9">✓</text>
                                            </svg>
                                            <span className="flow-stat flow-stat-ok">3 pasos de alto valor</span>
                                        </div>
                                    </div>

                                    <button className="vertical-cta" onClick={() => navigate('/solutions')}>
                                        Ver Detalles <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* PASO 02: Sistematizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                <div className="method-stepper">
                                    <div className="method-icon-badge illuminate-2">
                                        <Code2 size={16} color="currentColor" />
                                    </div>
                                    <span className="method-number illuminate-2">02</span>
                                </div>
                                <h3 className="method-title">Sistematizamos</h3>
                                <span className="vertical-tagline">Software que conecta su operación</span>


                                <div className="mac-window phase-window">
                                    <div className="mac-header">

                                        <div className="mac-title">process_engine.py</div>
                                    </div>
                                    <div className="vertical-card-top" style={{ padding: '0.5rem', marginBottom: '0.5rem' }}>
                                        <span className="vertical-number">02</span>
                                        <div className="vertical-icon">
                                            <Code2 size={28} />
                                        </div>
                                    </div>
                                    <div className="terminal-content" style={{ fontSize: '0.78rem', textAlign: 'center', padding: '0.8rem 1rem' }}>
                                        <div className="terminal-line"><span style={{ color: '#c678dd' }}>import</span> pandas <span style={{ color: '#c678dd' }}>as</span> pd</div>
                                        <div className="terminal-line"><span style={{ color: '#c678dd' }}>from</span> solid_engine <span style={{ color: '#c678dd' }}>import</span> Pipeline</div>
                                        <div className="terminal-line">&nbsp;</div>
                                        <div className="terminal-line"><span style={{ color: '#e06c75' }}>def</span> <span style={{ color: '#61afef' }}>liquidar_novedades</span>(df):</div>
                                        <div className="terminal-line">&nbsp;&nbsp;df[<span style={{ color: '#98c379' }}>'recargos'</span>] = df.apply(calc)</div>
                                        <div className="terminal-line">&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>return</span> df.merge_to_erp()</div>
                                    </div>

                                    <button className="vertical-cta" onClick={() => navigate('/solutions')}>
                                        Ver Detalles <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* PASO 03: Automatizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <div className="method-stepper">
                                    <span className="method-number illuminate-3">03</span>
                                    <div className="method-icon-badge illuminate-3">
                                        <Bot size={16} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Automatizamos</h3>
                                <span className="vertical-tagline">Procesos que se ejecutan solos</span>


                                <div className="mac-window phase-window">
                                    <div className="mac-header">

                                        <div className="mac-title">workflow_engine.n8n</div>
                                    </div>
                                    <div className="vertical-card-top" style={{ padding: '0.5rem', marginBottom: '0.5rem' }}>
                                        <span className="vertical-number">03</span>
                                        <div className="vertical-icon">
                                            <Bot size={28} />
                                        </div>
                                    </div>
                                    <div className="workflow-canvas-labeled">
                                        <div className="workflow-node-labeled">
                                            <div className="workflow-node-icon"><Mail size={18} /></div>
                                            <span className="workflow-node-label">TRIGGER</span>
                                        </div>
                                        <div className="workflow-connector">
                                            <div className="particle" />
                                        </div>
                                        <div className="workflow-node-labeled">
                                            <div className="workflow-node-icon"><Bot size={18} /></div>
                                            <span className="workflow-node-label">AI PROCESS</span>
                                        </div>
                                        <div className="workflow-connector">
                                            <div className="particle" />
                                        </div>
                                        <div className="workflow-node-labeled">
                                            <div className="workflow-node-icon"><Database size={18} /></div>
                                            <span className="workflow-node-label">ERP</span>
                                        </div>
                                    </div>

                                    <button className="vertical-cta" onClick={() => navigate('/solutions')}>
                                        Ver Detalles <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* RESULTS SECTION - Versión Premium exacta a la imagen */}




            {/* TECH STACK BAR */}
            <section id="tech-stack" style={{ 
                padding: '4rem 1rem', 
                background: 'rgba(0, 13, 39, 0.4)', 
                minHeight: '100vh',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
                    <div className="impact-badge-container" style={{ textAlign: 'center', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        <span className="impact-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.6rem 2.5rem', margin: '0 auto', width: 'fit-content' }}>
                            <Zap size={18} /> Stack Tecnológico de Alto Nivel
                        </span>
                    </div>
                    <div className="tech-stack-container" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'clamp(0.5rem, 2vw, 2rem)',
                        alignItems: 'center',
                        padding: '0'
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
                            <motion.div key={i} whileHover={{ scale: 1.1, y: -4 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '70px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0.25rem'
                                }}>
                                    <img src={tech.icon} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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

            {/* FINAL CTA */}
            <section id="diagnostico" style={{ 
                padding: '2rem', 
                textAlign: 'center',
                minHeight: '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="impact-badge-container" style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        <span className="impact-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.6rem 2.5rem', margin: '0 auto', width: 'fit-content' }}>
                            Diagnóstico
                        </span>
                    </div>
                    <h2 className="cta-title-nowrap" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800' }}>
                        ¿Listo para escalar su <span style={{ color: 'var(--deep-navy-800)' }}>infraestructura?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.6' }}>
                        Agende una consultoría técnica gratuita y descubra el potencial de automatización de su negocio.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'clamp(1rem, 3vw, 1.5rem)',
                        flexWrap: 'wrap',
                        width: '100%',
                        marginTop: '2rem'
                    }}>
                        <motion.div
                            className="mac-window cta-window"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 1.0, ease: [0.175, 0.885, 0.32, 1.275] }}
                            onClick={() => navigate('/contact')}
                        >
                            <button
                                className="vertical-cta"
                                style={{ paddingLeft: '0.5rem', fontSize: '1.25rem' }}
                            >
                                Agenda tu Diagnóstico <ChevronRight size={20} />
                            </button>
                        </motion.div>
                        <motion.div
                            className="mac-window cta-window cta-window-alt"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 1.0, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.1 }}
                            onClick={() => navigate('/solutions')}
                        >
                            <button
                                className="vertical-cta"
                                style={{ paddingLeft: '0.5rem', fontSize: '1.25rem', color: '#fff' }}
                            >
                                Explorar Soluciones <ChevronRight size={20} />
                            </button>
                        </motion.div>
                    </div>
                    <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
                        <a href="https://wa.me/573172652487" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                            <MessageSquare size={18} /> <span>O hable con un experto vía WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
