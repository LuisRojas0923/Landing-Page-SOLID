import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Workflow,
    Code2,
    Bot,
    ArrowRight,
    ChevronRight,
    Mail,
    Database,
    Search
} from 'lucide-react';
import './Home.css'; // Reusing styles

const Method = () => {
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
            tagline: 'Procesos que se ejecutan solos',
            desc: 'Implementamos flujos de trabajo digitales que ejecutan tareas repetitivas sin intervención humana, con cero errores, 24/7.',
            items: [
                { icon: <Bot size={16} />, label: 'RPA y workflows (n8n / Python)' }, // Fixed icon reference
                { icon: <Search size={16} />, label: 'OCR e inteligencia documental' },
                { icon: <ArrowRight size={16} />, label: 'Integraciones y APIs automáticas' }, // Fixed icon reference
            ]
        }
    ];

    return (
        <div className="method-page" style={{ color: 'var(--text-primary)', paddingTop: '8rem' }}>
            <Helmet>
                <title>Nuestro Método - SOLID SOLUTIONS</title>
                <meta name="description" content="Descubra cómo transformamos su operación en tres pasos: Organizamos, Sistematizamos y Automatizamos." />
            </Helmet>

            <section id="method" style={{ padding: '4rem 2rem 8rem', background: 'transparent' }}>
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
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                                <div className="method-stepper">
                                    <span className="method-number illuminate-1">01</span>
                                    <div className="method-icon-badge illuminate-1">
                                        <Workflow size={16} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Organizamos</h3>
                                <span className="vertical-tagline">Orden antes de tecnología</span>
                                <p className="method-desc">Ordenamos su operación, eliminamos reprocesos y definimos flujos eficientes y replicables</p>

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
                                    <ul className="vertical-items window-inner-list">
                                        {verticals[0].items.map((item, j) => (
                                            <li key={j} className="vertical-item">
                                                <span className="vertical-item-icon">{item.icon}</span>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* PASO 02: Sistematizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                <div className="method-stepper">
                                    <div className="method-icon-badge illuminate-2">
                                        <Code2 size={16} color="currentColor" />
                                    </div>
                                    <span className="method-number illuminate-2">02</span>
                                </div>
                                <h3 className="method-title">Sistematizamos</h3>
                                <span className="vertical-tagline">Software que conecta su operación</span>
                                <p className="method-desc">Desarrollamos herramientas a medida que centralizan la información y conectan áreas que antes operaban de forma aislada.</p>

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
                                    <ul className="vertical-items window-inner-list">
                                        {verticals[1].items.map((item, j) => (
                                            <li key={j} className="vertical-item">
                                                <span className="vertical-item-icon">{item.icon}</span>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* PASO 03: Automatizamos */}
                            <motion.div className="method-column" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                <div className="method-stepper">
                                    <span className="method-number illuminate-3">03</span>
                                    <div className="method-icon-badge illuminate-3">
                                        <Bot size={16} color="currentColor" />
                                    </div>
                                </div>
                                <h3 className="method-title">Automatizamos</h3>
                                <span className="vertical-tagline">Procesos que se ejecutan solos</span>
                                <p className="method-desc">Implementamos flujos de trabajo inteligentes que automatizan tareas clave, reducen el error humano y liberan tiempo operativo.</p>

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
                                    <ul className="vertical-items window-inner-list">
                                        {verticals[2].items.map((item, j) => (
                                            <li key={j} className="vertical-item">
                                                <span className="vertical-item-icon">{item.icon}</span>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Method;
