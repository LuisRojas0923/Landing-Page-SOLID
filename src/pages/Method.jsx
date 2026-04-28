import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Workflow,
    Code2,
    Bot,
    Search,
    Zap,
    Server,
    TrendingUp,
    Database,
    FileText,
    Layout,
    Cloud,
    BarChart3,
    Rocket,
    Table,
    ArrowRight,
    Mail
} from 'lucide-react';
import './Home.css';

const ProcessDiagram = ({ stepIdx }) => {
    const diagrams = [
        [
            { icon: <FileText size={28} />, label: 'Desorden', color: '#ef4444' },
            { icon: <Search size={40} />, label: 'Auditoría', color: 'var(--deep-navy-800)' },
            { icon: <Layout size={28} />, label: 'Estructura', color: '#10b981' }
        ],
        [
            { icon: <Database size={28} />, label: 'Datos', color: '#f59e0b' },
            { icon: <Code2 size={40} />, label: 'Sistemas', color: 'var(--deep-navy-800)' },
            { icon: <Cloud size={28} />, label: 'Nube', color: '#8b5cf6' }
        ],
        [
            { icon: <Table size={28} />, label: 'Excel', color: '#10b981' },
            { icon: <Bot size={40} />, label: 'Bot', color: 'var(--deep-navy-800)' },
            { icon: <FileText size={28} />, label: 'Reportes', color: '#60a5fa' }
        ],
        [
            { icon: <BarChart3 size={28} />, label: 'Métricas', color: 'var(--deep-navy-800)' },
            { icon: <Zap size={40} />, label: 'IA', color: '#f59e0b' },
            { icon: <Rocket size={28} />, label: 'Escala', color: '#ec4899' }
        ]
    ];

    const current = diagrams[stepIdx] || diagrams[0];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            gap: '0.2rem',
            perspective: '1000px',
            paddingBottom: '2rem' // Espacio para las etiquetas absolutas
        }}>
            {/* Source Box */}
            <motion.div
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
            >
                <div style={{
                    width: '74px', height: '74px', borderRadius: '20px',
                    background: 'rgba(10, 20, 40, 0.6)', border: `1px solid ${current[0].color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: current[0].color,
                    boxShadow: `0 0 15px ${current[0].color}11`
                }}>{current[0].icon}</div>
                <span style={{
                    position: 'absolute', top: '85px', fontSize: '0.7rem', fontWeight: '800',
                    color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em',
                    whiteSpace: 'nowrap'
                }}>{current[0].label}</span>
            </motion.div>

            {/* Connector 1 */}
            <div style={{ width: '90px', height: '74px', position: 'relative' }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    <path d="M 0 50 Q 50 0, 100 50" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                    <path d="M 0 50 Q 50 0, 100 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="3" strokeDasharray="4,6" />
                    <motion.path
                        d="M 0 50 Q 50 0, 100 50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0.1, opacity: 0, pathOffset: 0 }}
                        animate={{ opacity: [0, 1, 0], pathOffset: [0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Central Node (Bot) */}
            <motion.div
                animate={{
                    translateY: [-3, 3, -3],
                    filter: ['drop-shadow(0 0 10px #3b82f622)', 'drop-shadow(0 0 25px #3b82f666)', 'drop-shadow(0 0 10px #3b82f622)']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}
            >
                <div style={{
                    width: '96px', height: '96px', borderRadius: '28px',
                    background: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3b82f6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6',
                    boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.2)',
                    position: 'relative', overflow: 'hidden'
                }}>
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                            transform: 'skewX(-20deg)'
                        }}
                    />
                    {current[1].icon}
                </div>
                <span style={{
                    position: 'absolute', top: '110px', fontSize: '0.8rem', fontWeight: '900',
                    color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.15em',
                    textShadow: '0 0 10px #3b82f644', whiteSpace: 'nowrap'
                }}>{current[1].label}</span>
            </motion.div>

            {/* Connector 2 */}
            <div style={{ width: '90px', height: '74px', position: 'relative' }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    <path d="M 0 50 Q 50 100, 100 50" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                    <path d="M 0 50 Q 50 100, 100 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="3" strokeDasharray="4,6" />
                    <motion.path
                        d="M 0 50 Q 50 100, 100 50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0.1, opacity: 0, pathOffset: 0 }}
                        animate={{ opacity: [0, 1, 0], pathOffset: [0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
                    />
                </svg>
            </div>

            {/* Result Box */}
            <motion.div
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
            >
                <div style={{
                    width: '74px', height: '74px', borderRadius: '20px',
                    background: 'rgba(10, 20, 40, 0.6)', border: `1px solid ${current[2].color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: current[2].color,
                    boxShadow: `0 0 15px ${current[2].color}11`
                }}>{current[2].icon}</div>
                <span style={{
                    position: 'absolute', top: '85px', fontSize: '0.7rem', fontWeight: '800',
                    color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em',
                    whiteSpace: 'nowrap'
                }}>{current[2].label}</span>
            </motion.div>
        </div>
    );
};

const Method = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location]);

    const verticals = [
        {
            icon: <Workflow size={28} />,
            number: '01',
            title: 'Organizamos',
            tagline: 'Primero el orden, luego la tecnología',
            desc: 'Mapeamos sus procesos, eliminamos lo que no agrega valor y diseñamos flujos claros y replicables.',
            items: [
                { icon: <Search size={16} />, label: 'Auditoría de procesos' },
                { icon: <Search size={16} />, label: 'Estandarización de datos' }, // Fixed icon reference
                { icon: <Search size={16} />, label: 'Diagramas de flujo optimizados' }, // Fixed icon reference
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
                { icon: <ArrowRight size={16} />, label: 'Dashboards en tiempo real' }, // Fixed icon reference
            ]
        },
        {
            icon: <Bot size={28} />,
            number: '03',
            title: 'Automatizamos',
            tagline: 'Procesos altamente automatizados',
            desc: 'Implementamos flujos de trabajo digitales que ejecutan tareas repetitivas sin intervención humana, con cero errores, 24/7.',
            items: [
                { icon: <Bot size={16} />, label: 'RPA y workflows (n8n / Python)' }, // Fixed icon reference
                { icon: <Search size={16} />, label: 'OCR e inteligencia documental' },
                { icon: <ArrowRight size={16} />, label: 'Integraciones y APIs automáticas' }, // Fixed icon reference
            ]
        }
    ];

    const stepsDetailed = [
        {
            title: "Organizamos",
            tagline: "Primero el orden, luego la tecnología",
            desc: "Ordenamos la operación, eliminamos reprocesos y definimos flujos claros, eficientes y replicables.",
            icon: <Search size={32} />,
            items: [
                { icon: <Search size={16} />, label: 'Auditoría de procesos' },
                { icon: <Search size={16} />, label: 'Estandarización de datos' },
                { icon: <Search size={16} />, label: 'Diagramas de flujo optimizados' },
            ]
        },
        {
            title: "Sistematizamos",
            tagline: "Software que conecta su operación",
            desc: "Desarrollamos herramientas a medida que centralizan la información y conectan áreas que antes operaban de forma aislada.",
            icon: <Code2 size={32} />,
            items: [
                { icon: <Database size={16} />, label: 'Ingeniería de datos & BI' },
                { icon: <Code2 size={16} />, label: 'Software a medida (Java, Python, React)' },
                { icon: <ArrowRight size={16} />, label: 'Dashboards en tiempo real' },
            ]
        },
        {
            title: "Automatizamos",
            tagline: "Procesos altamente automatizados",
            desc: "Implementamos flujos de trabajo inteligentes que automatizan tareas clave, reducen el error humano y liberan capacidad operativa.",
            icon: <Bot size={32} />,
            items: [
                { icon: <Bot size={16} />, label: 'RPA y workflows (n8n / Python)' },
                { icon: <Search size={16} />, label: 'OCR e inteligencia documental' },
                { icon: <ArrowRight size={16} />, label: 'Integraciones y APIs automáticas' },
            ]
        },
        {
            title: "Optimización Continua",
            tagline: "Evolución basada en datos",
            desc: "Medimos el desempeño de la solución, identificamos oportunidades de mejora y escalamos con base en datos reales y retroalimentación operativa.",
            icon: <TrendingUp size={32} />,
            items: [
                { icon: <BarChart3 size={16} />, label: 'Métricas de desempeño' },
                { icon: <TrendingUp size={16} />, label: 'Mejora continua' },
                { icon: <Rocket size={16} />, label: 'Escalabilidad e iteración' }
            ]
        }
    ];

    return (
        <div className="method-page" style={{ color: 'var(--text-primary)', paddingTop: '4rem' }}>
            <Helmet>
                <title>Nuestro Método - SOLID SOLUTIONS</title>
                <meta name="description" content="Descubra cómo transformamos su operación en tres pasos: Organizamos, Sistematizamos y Automatizamos." />
            </Helmet>



            {/* Nueva sección de Metodología Detallada */}
            <section style={{ padding: '2rem 2rem 8rem', background: 'transparent' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Nuestra <span style={{ color: 'var(--deep-navy-800)' }}>Metodología</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                            Transformamos el caos operativo en flujos eficientes, sistemas escalables y procesos automatizados que generan control, velocidad y trazabilidad.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '6rem' }}>
                        {stepsDetailed.map((step, idx) => (
                            <motion.div
                                key={idx}
                                id={`method-step-${idx}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                                style={{
                                    display: 'flex',
                                    gap: '4rem',
                                    alignItems: 'center',
                                    flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                                    textAlign: idx % 2 === 0 ? 'left' : 'right',
                                    scrollMarginTop: '100px'
                                }}
                            >
                                <div style={{ flex: 1 }}>

                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800', textAlign: 'left' }}>
                                        0{idx + 1}. {step.title}
                                    </h2>
                                    <p style={{
                                        color: 'var(--deep-navy-800)',
                                        fontSize: '1.4rem',
                                        fontWeight: '600',
                                        marginBottom: '0.2rem',
                                        letterSpacing: '-0.02em',
                                        textAlign: 'left'
                                    }}>
                                        {step.tagline}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '500px', margin: '0', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', marginBottom: '2rem', textAlign: 'left' }}>
                                        {step.desc}
                                    </p>

                                    {step.items && (
                                        <ul style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: '0',
                                            maxWidth: '500px'
                                        }}>
                                            {step.items.map((item, i) => (
                                                <li key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start',
                                                    flexDirection: 'row',
                                                    gap: '1rem',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '1.1rem',
                                                    marginBottom: '0.8rem',
                                                    fontFamily: "'Roboto', sans-serif",
                                                    fontWeight: '500',
                                                    textAlign: 'left'
                                                }}>
                                                    <span style={{ color: 'var(--deep-navy-800)', display: 'flex' }}>{item.icon}</span>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div style={{
                                    flex: 1,
                                    height: '350px',
                                    background: 'rgba(0, 5, 15, 0.4)',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)'
                                }}>
                                    <ProcessDiagram stepIdx={idx} />
                                    {/* Fondo decorativo con número */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: '12rem',
                                        fontWeight: '900',
                                        color: 'rgba(255, 255, 255, 0.02)',
                                        userSelect: 'none',
                                        zIndex: 1
                                    }}>
                                        {idx + 1}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Method;
