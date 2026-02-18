import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Zap, Server, Search, Users, Rocket, Award } from 'lucide-react';

const About = () => {
    const pillars = [
        {
            title: "Misión",
            desc: "Democratizar la ingeniería de alto nivel para empresas que buscan escala, eliminando la fricción técnica mediante automatización y software de precisión.",
            icon: <Rocket size={32} />
        },
        {
            title: "Visión",
            desc: "Ser el referente regional en arquitectura de datos y software a medida, transformando la complejidad operativa en activos estratégicos.",
            icon: <Target size={32} />
        },
        {
            title: "Nuestro ADN",
            desc: "Ingeniería agnóstica a la tecnología: si el problema requiere Java Desktop, FastAPI o React, nos adaptamos para entregar el máximo ROI.",
            icon: <Lightbulb size={32} />
        }
    ];

    const steps = [
        {
            title: "Diagnóstico Predictivo",
            desc: "Identificamos cuellos de botella y fugas de capital operativo mediante el análisis de sus procesos actuales.",
            icon: <Search size={32} />
        },
        {
            title: "Ingeniería de Solución",
            desc: "Diseñamos una arquitectura a medida, integrando IA y automatización escalable.",
            icon: <Zap size={32} />
        },
        {
            title: "Implementación Ágil",
            desc: "Desplegamos en ciclos cortos para garantizar valor inmediato y adaptabilidad.",
            icon: <Server size={32} />
        },
        {
            title: "Optimización Continua",
            desc: "Escalamos la solución basándonos en datos reales y feedback de la operación.",
            icon: <TrendingUp size={32} />
        }
    ];

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* HERO ABOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '100px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
                        Quienes <span style={{ color: 'var(--deep-navy-800)' }}>Somos</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                        Más que una agencia de desarrollo, somos su brazo de ingeniería. Nos especializamos en resolver lo que otros consideran "imposible" mediante software robusto y automatización inteligente.
                    </p>
                </motion.div>

                {/* PILLARS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '120px' }}>
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                padding: '3rem',
                                borderRadius: '32px',
                                border: '1px solid var(--deep-navy-400)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--deep-navy-800)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {pillar.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{pillar.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* METHODOLOGY SECTION */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Nuestra Metodología de Ingeniería</h2>
                    <p style={{ color: 'var(--text-secondary)', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>El rigor técnico que acompaña cada línea de código.</p>
                </div>

                <div style={{ display: 'grid', gap: '6rem' }}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                gap: '4rem',
                                alignItems: 'center',
                                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                                textAlign: idx % 2 === 0 ? 'left' : 'right'
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 32, 96, 0.1)',
                                    borderRadius: '24px',
                                    color: 'var(--deep-navy-800)',
                                    marginBottom: '2rem'
                                }}>
                                    {step.icon}
                                </div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
                                    0{idx + 1}. {step.title}
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '500px', margin: idx % 2 === 0 ? '0' : '0 0 0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                    {step.desc}
                                </p>
                            </div>
                            <div style={{ flex: 1, height: '300px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '32px', border: '1px solid var(--deep-navy-400)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '10rem',
                                    fontWeight: '900',
                                    color: 'rgba(255, 255, 255, 0.03)',
                                    userSelect: 'none'
                                }}>
                                    {idx + 1}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
