import React from 'react';
import { motion } from 'framer-motion';
import {
    Bot,
    Zap,
    ArrowRight,
    Cpu,
    BarChart3,
    Table as ExcelIcon,
    Database,
    LayoutDashboard,
    Files
} from 'lucide-react';
import './RPASolutions.css';

const ProcessPath = ({ direction = "up" }) => {
    // direction "up" means start -> up -> end
    // direction "down" means start -> down -> end
    const path = direction === "up"
        ? "M 0 50 Q 50 0, 100 50"
        : "M 0 50 Q 50 100, 100 50";

    return (
        <div className="connector-svg-wrapper">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="connector-svg">
                <path
                    d={path}
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                />
                <motion.path
                    d={path}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </svg>
        </div>
    );
};

const RPASolutions = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    return (
        <div className="rpa-solutions-page">
            <div className="engineering-grid"></div>

            <motion.div
                className="rpa-hero"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="technical-tag" style={{ justifyContent: 'center' }}>
                    <Zap size={16} /> Ingeniería de Automatización
                </div>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    RPA: El Motor de <span className="highlight-italic">Precisión</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    Visualice cómo transformamos el caos de procesos manuales en flujos de datos estructurados y estratégicos. Una herramienta diseñada para la consultoría de alto nivel.
                </p>
            </motion.div>

            <motion.div
                className="rpa-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. Excel -> Bot -> Reports */}
                <div className="showcase-item">
                    <div className="showcase-text">
                        <div className="technical-tag">
                            <Bot size={16} /> Automatización de Entregables
                        </div>
                        <h2 className="rpa-title">De Hojas de Cálculo a Reportes Finales</h2>
                        <p className="rpa-description">
                            El bot toma múltiples fuentes de Excel, procesa la lógica del negocio y genera automáticamente reportes ejecutivos en PDF o Documentos, listos para ser enviados.
                        </p>
                    </div>
                    <div className="showcase-visual">
                        <div className="pipeline-horizontal">
                            <motion.div className="source-box excel" whileHover={{ scale: 1.05 }}>
                                <ExcelIcon size={32} />
                                <span>Excel</span>
                            </motion.div>

                            <ProcessPath direction="up" />

                            <motion.div
                                className="bot-node"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Bot size={48} color="#3b82f6" />
                            </motion.div>

                            <ProcessPath direction="down" />

                            <motion.div className="result-box reports">
                                <Files size={32} />
                                <span>Reportes</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* 2. DB/Excel -> Bot -> Dashboard */}
                <div className="showcase-item">
                    <div className="showcase-text">
                        <div className="technical-tag">
                            <BarChart3 size={16} /> Visibilidad en Tiempo Real
                        </div>
                        <h2 className="rpa-title">Alimentación de Dashboards Estratégicos</h2>
                        <p className="rpa-description">
                            Conectamos sus bases de datos u hojas de cálculo con cuadros de mando interactivos. El bot actualiza los indicadores dinámicamente, reflejando el estado real de su empresa.
                        </p>
                    </div>
                    <div className="showcase-visual">
                        <div className="pipeline-horizontal">
                            <div className="source-stack" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <motion.div className="source-box db" style={{ width: '80px', height: '50px' }}>
                                    <Database size={20} /> <span style={{ fontSize: '0.7rem' }}>DB</span>
                                </motion.div>
                                <motion.div className="source-box excel" style={{ width: '80px', height: '50px' }}>
                                    <ExcelIcon size={20} /> <span style={{ fontSize: '0.7rem' }}>Excel</span>
                                </motion.div>
                            </div>

                            <ProcessPath direction="down" />

                            <motion.div className="bot-node">
                                <Bot size={48} color="#3b82f6" />
                            </motion.div>

                            <ProcessPath direction="up" />

                            <motion.div className="result-box dashboard" style={{ width: '140px', height: '100px', padding: '10px' }}>
                                <LayoutDashboard size={24} style={{ marginBottom: '10px' }} />
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '40px', width: '100%' }}>
                                    {[30, 80, 50, 90, 40].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            style={{ flex: 1, background: '#3b82f6', borderRadius: '2px' }}
                                            animate={{ height: [`${h}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* 3. Excel -> Bot -> SOLID ERP */}
                <div className="showcase-item">
                    <div className="showcase-text">
                        <div className="technical-tag">
                            <ArrowRight size={16} /> Integración con el Núcleo
                        </div>
                        <h2 className="rpa-title">Puente Directo a SOLID ERP</h2>
                        <p className="rpa-description">
                            Evite la migración manual de datos. El bot captura la información de sus herramientas actuales y la inyecta directamente en el núcleo de SOLID ERP, manteniendo la integridad absoluta de sus activos digitales.
                        </p>
                    </div>
                    <div className="showcase-visual">
                        <div className="pipeline-horizontal">
                            <motion.div className="source-box excel big">
                                <ExcelIcon size={40} />
                                <span>Legacy Data</span>
                            </motion.div>

                            <ProcessPath direction="up" />

                            <motion.div className="bot-node circle">
                                <Bot size={40} color="#3b82f6" />
                            </motion.div>

                            <ProcessPath direction="down" />

                            <motion.div
                                className="result-box erp-nucleus"
                                animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.2)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.2)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Database size={40} color="#3b82f6" />
                                <span style={{ fontWeight: '900', color: 'white', marginTop: '10px' }}>SOLID ERP</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <section style={{ textAlign: 'center', marginTop: '100px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>¿Listo para automatizar su flujo de trabajo?</h3>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'white',
                        color: '#020617',
                        padding: '1.2rem 3rem',
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        fontWeight: '800',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    Agendar Diagnóstico RPA <ArrowRight size={20} />
                </motion.button>
            </section>
        </div>
    );
};

export default RPASolutions;
