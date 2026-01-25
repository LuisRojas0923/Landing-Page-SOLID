import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Database, EyeOff, TrendingUp, ArrowRight, X } from 'lucide-react';

const FrictionSlide = ({ slide }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <motion.div
            className="friction-slide-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            {/* Background elements specific to this design */}
            <div className="engineering-grid"></div>
            <div className="ambient-glow-1"></div>
            <div className="ambient-glow-2"></div>

            <div className="max-w-6xl mx-auto z-10 w-full" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
                {/* Encabezado */}
                <motion.div className="mb-12" variants={itemVariants} style={{ marginBottom: '3rem' }}>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        ¿Qué detiene su <span className="highlight-italic">escalabilidad</span> hoy?
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl border-l-2 border-blue-500 pl-4" style={{ fontSize: '1.25rem', color: '#94a3b8', borderLeft: '3px solid #3b82f6', paddingLeft: '1.5rem', maxWidth: '700px' }}>
                        La <span className="text-white font-semibold" style={{ color: 'white', fontWeight: '600' }}>fricción operativa</span> es el impuesto oculto que impide el crecimiento. Detectamos estos síntomas críticos de freno:
                    </p>
                </motion.div>

                {/* Grid de Problemas */}
                <div className="friction-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {slide.points.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedCard(p)}
                            className="friction-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-5 card-bg-icon">
                                {React.cloneElement(p.icon, { size: 80 })}
                            </div>
                            <div className="item-icon" style={{ color: '#3b82f6', marginBottom: '1.5rem' }}>
                                {React.cloneElement(p.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>{p.label}</h3>
                            <p className="text-slate-400 leading-relaxed" style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                {p.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de "Ingeniería de Precisión" */}
                <motion.div
                    className="friction-analysis-box"
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        background: 'rgba(30, 58, 138, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        padding: '2rem',
                        borderRadius: '24px'
                    }}
                >
                    <div className="flex-1" style={{ flex: 1 }}>
                        <div className="flex items-center gap-2 text-blue-400 mb-2 font-mono text-sm uppercase tracking-widest" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                            <TrendingUp size={16} />
                            <span>Análisis de Eficiencia Técnica</span>
                        </div>
                        <p className="text-lg text-slate-300 italic" style={{ fontSize: '1.15rem', color: '#cbd5e1', fontStyle: 'italic' }}>
                            "{slide.quote}"
                        </p>
                    </div>

                    <div className="analysis-divider" style={{ width: '1px', height: '60px', background: '#334155' }}></div>

                    <div className="flex-1 text-center md:text-right" style={{ flex: 1, textAlign: 'right' }}>
                        <p className="text-blue-400 font-bold text-lg mb-1" style={{ color: '#60a5fa', fontWeight: '700', marginBottom: '0.25rem' }}>
                            SU INFORMACIÓN DEJA DE SER UN OBSTÁCULO
                        </p>
                        <p className="text-2xl font-bold text-white flex items-center justify-center md:justify-end gap-2" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                            ES EL MOTOR DE SU RENTABILIDAD
                            <ArrowRight className="text-blue-500" style={{ color: '#3b82f6' }} />
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Modal functionality */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCard(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedCard(null)}>
                                <X size={20} />
                            </button>
                            <div className="item-icon" style={{ color: '#3b82f6', marginBottom: '1.5rem' }}>
                                {React.cloneElement(selectedCard.icon, { size: 48 })}
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>{selectedCard.label}</h2>
                            <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '2rem' }}>
                                {selectedCard.text}
                            </p>
                            <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                <p style={{ fontSize: '0.9rem', color: '#60a5fa', fontWeight: '600' }}>
                                    Impacto en la Rentabilidad: Alta Fricción Detectada
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FrictionSlide;
