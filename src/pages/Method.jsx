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
import './Method.css';

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
        <div className="diagram-container">
            {/* Source Box */}
            <motion.div
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                className="diagram-node-wrapper"
            >
                <div className="diagram-node-icon" style={{ borderColor: `${current[0].color}66`, color: current[0].color, boxShadow: `0 0 15px ${current[0].color}22` }}>
                    {current[0].icon}
                </div>
                <span className="diagram-node-label">{current[0].label}</span>
            </motion.div>

            {/* Connector 1 */}
            <div className="diagram-connector">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0 50 Q 50 0, 100 50" className="connector-path-bg" />
                    <motion.path
                        d="M 0 50 Q 50 0, 100 50" className="connector-path-active"
                        initial={{ pathLength: 0.1, opacity: 0, pathOffset: 0 }}
                        animate={{ opacity: [0, 1, 0], pathOffset: [0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Central Node */}
            <motion.div
                animate={{
                    translateY: [-3, 3, -3],
                    filter: ['drop-shadow(0 0 10px #3b82f622)', 'drop-shadow(0 0 25px #3b82f666)', 'drop-shadow(0 0 10px #3b82f622)']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="diagram-node-wrapper central"
            >
                <div className="diagram-node-icon central-icon">
                    {current[1].icon}
                </div>
                <span className="diagram-node-label central-label">{current[1].label}</span>
            </motion.div>

            {/* Connector 2 */}
            <div className="diagram-connector">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0 50 Q 50 100, 100 50" className="connector-path-bg" />
                    <motion.path
                        d="M 0 50 Q 50 100, 100 50" className="connector-path-active"
                        initial={{ pathLength: 0.1, opacity: 0, pathOffset: 0 }}
                        animate={{ opacity: [0, 1, 0], pathOffset: [0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Target Box */}
            <motion.div
                whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                className="diagram-node-wrapper"
            >
                <div className="diagram-node-icon" style={{ borderColor: `${current[2].color}66`, color: current[2].color, boxShadow: `0 0 15px ${current[2].color}22` }}>
                    {current[2].icon}
                </div>
                <span className="diagram-node-label">{current[2].label}</span>
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
        <div className="method-page">
            <Helmet>
                <title>Nuestro Método - SOLID SOLUTIONS</title>
                <meta name="description" content="Descubra cómo transformamos su operación en tres pasos: Organizamos, Sistematizamos y Automatizamos." />
            </Helmet>

            <section className="method-section">
                <div className="method-page-container">
                    <div className="method-header">
                        <h2 className="method-hero-title">
                            Nuestra <span className="accent-blue">Metodología</span>
                        </h2>
                        <p className="method-hero-desc">
                            Transformamos el caos operativo en flujos eficientes, sistemas escalables y procesos automatizados que generan control, velocidad y trazabilidad.
                        </p>
                    </div>

                    <div className="method-steps-grid">
                        {stepsDetailed.map((step, idx) => (
                            <motion.div
                                key={idx}
                                id={`method-step-${idx}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                                className={`method-step-card ${idx % 2 === 0 ? 'row' : 'row-reverse'}`}
                            >
                                <div className="method-info-col">
                                    <h2 className="method-step-num-title">
                                        0{idx + 1}. {step.title}
                                    </h2>
                                    <p className="method-step-tagline">
                                        {step.tagline}
                                    </p>
                                    <p className="method-step-desc">
                                        {step.desc}
                                    </p>

                                    {step.items && (
                                        <ul className="method-items-list">
                                            {step.items.map((item, i) => (
                                                <li key={i} className="method-item">
                                                    <span className="method-item-icon">{item.icon}</span>
                                                    <span className="method-item-label">{item.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="method-visual-col">
                                    <ProcessDiagram stepIdx={idx} />
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
