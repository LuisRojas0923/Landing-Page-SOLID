import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';

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
        <div style={{ 
            backgroundColor: 'transparent', 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '40px 20px' 
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                {/* HERO ABOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Quiénes <span style={{ color: 'var(--deep-navy-800)' }}>Somos</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                        Más que una agencia de desarrollo, somos un aliado de ingeniería. Diseñamos soluciones de software y automatización inteligente para resolver retos complejos con solidez, precisión y enfoque en resultados.
                    </p>
                </motion.div>
 
                {/* PILLARS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                padding: '2rem',
                                borderRadius: '24px',
                                border: '1px solid var(--deep-navy-800)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--deep-navy-800)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                                {pillar.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem' }}>{pillar.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', textAlign: 'center' }}>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
