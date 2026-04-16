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
    Search,
    Code2,
    Layers
} from 'lucide-react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

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
            desc: 'Construimos herramientas a medida que centralizan su información y conectan áreas que antes trabajaban aisladas.',
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

    return (
        <div className="home-container" style={{ color: 'var(--text-primary)' }}>
            <Helmet>
                <title>SOLID SOLUTIONS - Ingeniería de Precisión</title>
                <meta name="description" content="Potenciamos su empresa con soluciones autónomas y arquitectura de datos avanzada." />
            </Helmet>
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
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        padding: '0 clamp(1rem, 4vw, 2rem)',
                        margin: '0 auto'
                    }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.05',
                        marginBottom: '1.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto 1.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Potenciamos su empresa con <br />
                        <span style={{ color: 'var(--deep-navy-800)', display: 'block', marginTop: '0.5rem' }}>soluciones autónomas</span>
                    </h1>

                    <p className="hero-subtitle" style={{
                        fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
                        color: 'white',
                        fontWeight: '800',
                        maxWidth: '1000px',
                        margin: '0 auto 2rem',
                        lineHeight: '1.4'
                    }}>
                        Organizamos, sistematizamos y automatizamos su operación.
                    </p>

                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '1000px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.6',
                        fontStyle: 'italic',
                        fontFamily: "'Roboto', sans-serif"
                    }}>
                        En SOLID SOLUTIONS estructuramos su operación, diseñamos la arquitectura que conecta sus datos y automatizamos sus tareas críticas, eliminando la fricción operativa y preparando su empresa para crecer con tecnología e inteligencia artificial.
                    </p>

                    <div className="luxe-badge" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 2rem',
                        marginTop: '0',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '100%',
                        textTransform: 'none'
                    }}>
                        <Zap size={16} />
                        <span>Arquitectura de Datos e Ingeniería de Software</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'clamp(1rem, 3vw, 1.5rem)',
                        flexWrap: 'wrap',
                        width: '100%'
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            style={{
                                backgroundColor: 'var(--deep-navy-500)',
                                color: 'white',
                                padding: 'clamp(1rem, 2.5vw, 1.2rem) clamp(2rem, 5vw, 2.8rem)',
                                borderRadius: '12px',
                                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                                fontWeight: '700',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                boxShadow: '0 15px 35px rgba(0, 32, 96, 0.4)',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                width: '100%',
                                maxWidth: '300px',
                                justifyContent: 'center'
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
                                padding: 'clamp(1rem, 2.5vw, 1.2rem) clamp(2rem, 5vw, 2.8rem)',
                                borderRadius: '12px',
                                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                                fontWeight: '600',
                                border: '1px solid var(--deep-navy-400)',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                width: '100%',
                                maxWidth: '300px',
                                justifyContent: 'center'
                            }}
                        >
                            Explorar Soluciones
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            <section id="demo" style={{ padding: '8rem 2rem', background: 'rgba(0, 13, 39, 0.4)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div className="luxe-badge" style={{ marginBottom: '1.5rem' }}>Nuestro Método</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '0.5rem', fontWeight: '800' }}>Así transformamos su operación</h2>
                        <div style={{ color: '#5b8def', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Nuestras Verticales</div>
                        <p style={{ color: 'rgba(180, 210, 240, 0.75)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>De la fricción a la autonomía, en tres pasos.</p>
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
                                        <Workflow size={20} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Organizamos</h3>
                                <div className="method-pill">De caos operativo a flujos de alto valor</div>
                                <p className="method-desc">Mapeamos sus procesos, eliminamos operaciones que no agregan valor y diseñamos flujos eficientes.</p>
                                
                                <div className="mac-window phase-window">
                                    <div className="mac-header">
                                        <div className="mac-buttons">
                                            <div className="mac-btn red" />
                                            <div className="mac-btn yellow" />
                                            <div className="mac-btn green" />
                                        </div>
                                        <div className="mac-title">process_audit.flow</div>
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
                                </div>
                            </motion.div>

                            {/* PASO 02: Sistematizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                <div className="method-stepper">
                                    <div className="method-icon-badge illuminate-2">
                                        <Code2 size={20} color="currentColor" />
                                    </div>
                                    <span className="method-number illuminate-2">02</span>
                                </div>
                                <h3 className="method-title">Sistematizamos</h3>
                                <div className="method-pill">De procesos aislados a flujos conectados</div>
                                <p className="method-desc">Diseñamos procesos replicables y conectamos sistemas que antes operaban en silos aislados.</p>
                                
                                <div className="mac-window phase-window">
                                    <div className="mac-header">
                                        <div className="mac-buttons">
                                            <div className="mac-btn red" />
                                            <div className="mac-btn yellow" />
                                            <div className="mac-btn green" />
                                        </div>
                                        <div className="mac-title">process_engine.py</div>
                                    </div>
                                    <div className="terminal-content" style={{ fontSize: '0.78rem', textAlign: 'center', padding: '0.8rem 1rem' }}>
                                        <div className="terminal-line"><span style={{ color: '#c678dd' }}>import</span> pandas <span style={{ color: '#c678dd' }}>as</span> pd</div>
                                        <div className="terminal-line"><span style={{ color: '#c678dd' }}>from</span> solid_engine <span style={{ color: '#c678dd' }}>import</span> Pipeline</div>
                                        <div className="terminal-line">&nbsp;</div>
                                        <div className="terminal-line"><span style={{ color: '#e06c75' }}>def</span> <span style={{ color: '#61afef' }}>liquidar_novedades</span>(df):</div>
                                        <div className="terminal-line">&nbsp;&nbsp;df[<span style={{ color: '#98c379' }}>'recargos'</span>] = df.apply(calc)</div>
                                        <div className="terminal-line">&nbsp;&nbsp;<span style={{ color: '#c678dd' }}>return</span> df.merge_to_erp()</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* PASO 03: Automatizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <div className="method-stepper">
                                    <span className="method-number illuminate-3">03</span>
                                    <div className="method-icon-badge illuminate-3">
                                        <Bot size={20} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Automatizamos</h3>
                                <div className="method-pill">De tareas manuales a procesos 100% autónomos</div>
                                <p className="method-desc">Implementamos workflows inteligentes que operan de forma autónoma, eliminando el error humano.</p>
                                
                                <div className="mac-window phase-window">
                                    <div className="mac-header">
                                        <div className="mac-buttons">
                                            <div className="mac-btn red" />
                                            <div className="mac-btn yellow" />
                                            <div className="mac-btn green" />
                                        </div>
                                        <div className="mac-title">workflow_engine.n8n</div>
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
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VERTICALS SECTION */}
            <section id="services" style={{ padding: '8rem 2rem', background: 'rgba(0, 13, 39, 0.2)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="luxe-badge" style={{ marginBottom: '1.5rem' }}>Lo Que Hacemos</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>Nuestras Verticales</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>Tres pilares que eliminan la fricción operativa de su empresa.</p>
                    </div>
                    <div className="verticals-grid">
                        {verticals.map((v, i) => (
                            <motion.div
                                key={i}
                                className="vertical-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="vertical-card-top">
                                    <span className="vertical-number">{v.number}</span>
                                    <div className="vertical-icon">{v.icon}</div>
                                </div>
                                <h3 className="vertical-title">{v.title}</h3>
                                <span className="vertical-tagline">{v.tagline}</span>
                                <p className="vertical-desc">{v.desc}</p>
                                <ul className="vertical-items">
                                    {v.items.map((item, j) => (
                                        <li key={j} className="vertical-item">
                                            <span className="vertical-item-icon">{item.icon}</span>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => navigate('/solutions')} className="vertical-cta">
                                    Ver Detalles <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULTS SECTION - Versión Premium exacta a la imagen */}
            <section id="results" style={{ padding: '8rem 2rem', background: 'var(--deep-navy-200)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="impact-badge-container">
                        <span className="impact-badge">IMPACTO MEDIBLE</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff' }}>
                        Ingeniería que se paga sola.
                    </h2>
                    
                    <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '1.1rem', 
                        maxWidth: '850px', 
                        margin: '0 auto 5rem', 
                        lineHeight: '1.8',
                        fontFamily: "'Roboto', sans-serif"
                    }}>
                        Optimizamos el rendimiento corporativo automatizando procesos repetitivos, minimizando el error humano y aumentando su productividad, para que su talento se enfoque en iniciativas de alto valor estratégico al tiempo que reduce costos operativos.
                    </p>

                    <div className="results-pipeline-system">
                        <div className="results-pipeline-track">
                             <div className="pipeline-label-container">
                                <span className="pipeline-label">CALIDAD</span>
                                <span className="pipeline-label">CRECIMIENTO</span>
                                <span className="pipeline-label">EFICIENCIA</span>
                             </div>

                             <div className="pipeline-line">
                                <motion.div 
                                    className="pipeline-glow-particle"
                                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                             </div>
                        </div>

                        <div className="results-premium-grid">
                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper red"><ShieldCheck size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe">0%</div>
                                    <div className="stat-label-luxe">ERROR HUMANO</div>
                                </div>
                            </motion.div>

                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper amber"><Zap size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe">x10</div>
                                    <div className="stat-label-luxe">PRODUCTIVIDAD</div>
                                </div>
                            </motion.div>

                            <motion.div className="stat-card-premium">
                                <div className="stat-icon-wrapper green"><Clock size={24} /></div>
                                <div className="stat-content">
                                    <div className="stat-value-luxe">-80%</div>
                                    <div className="stat-label-luxe">COSTOS OPERATIVOS</div>
                                </div>
                            </motion.div>
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
                </div>
            </section>

            {/* PRODUCT IN ACTION (VIDEO) */}
            <section style={{ padding: '4rem 2rem 8rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                </div>
            </section>

            {/* TECH STACK BAR */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(0, 13, 39, 0.4)', borderTop: '1px solid var(--deep-navy-400)', borderBottom: '1px solid var(--deep-navy-400)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.3em', textAlign: 'center', fontWeight: '800', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                        Stack Tecnológico de Alto Nivel
                    </h2>
                    <div className="tech-stack-container" style={{
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
                            <motion.div key={i} whileHover={{ scale: 1.15, y: -8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '110px' }}>
                                <div className="tech-icon-box">
                                    <img src={tech.icon} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <span className="tech-name">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="contact" style={{ padding: 'clamp(4rem, 10vh, 10rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800' }}>¿Listo para escalar su infraestructura?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.6' }}>
                        Agende una consultoría técnica gratuita y descubra el potencial de automatización de su negocio.
                    </p>
                    <button onClick={() => navigate('/contact')} style={{ backgroundColor: 'white', color: 'var(--bg-main)', padding: 'clamp(1rem, 2.5vw, 1.2rem) clamp(2rem, 5vw, 3rem)', borderRadius: '12px', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: '700', border: 'none', cursor: 'pointer', width: '100%', maxWidth: '350px' }}>
                        Solicitar Diagnóstico
                    </button>
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
