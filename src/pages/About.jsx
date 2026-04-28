import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Zap, Server, Search, Users, Rocket, Award } from 'lucide-react';

const About = () => {
    const pillars = [
        {
            title: "Misión",
            desc: "Democratizar la ingeniería de alto nivel para empresas que buscan escalar, reduciendo la fricción operativa mediante automatización y software de precisión.",
            icon: <Rocket size={32} />
        },
        {
            title: "Visión",
            desc: "Ser el referente regional en arquitectura de datos y desarrollo de software a medida, convirtiendo la complejidad operativa en valor estratégico.",
            icon: <Target size={32} />
        },
        {
            title: "Nuestro ADN",
            desc: "No vendemos tecnologías; diseñamos soluciones. Analizamos cada necesidad del negocio y seleccionamos la arquitectura más adecuada para resolver cada reto con eficiencia, generar resultados concretos y maximizar el retorno de inversión.",
            icon: <Lightbulb size={32} />
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
                        Quiénes <span style={{ color: 'var(--deep-navy-800)' }}>Somos</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                        Más que una agencia de desarrollo, somos un aliado de ingeniería. Diseñamos soluciones de software y automatización inteligente para resolver retos complejos con solidez, precisión y enfoque en resultados.
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
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', textAlign: 'center' }}>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default About;
