import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    BarChart3,
    Smartphone,
    Bot,
    Database,
    ShieldCheck,
    Workflow,
    Zap,
    ChevronRight,
    Search,
    Layers,
    Code2
} from 'lucide-react';

const Services = () => {
    const categories = [
        {
            title: "Software a Medida",
            icon: <Code2 className="text-emerald-400" />,
            items: [
                "Sistemas de escritorio en Java (Swing/FX)",
                "Backends de alto rendimiento con FastAPI",
                "Interfaces modernas en React + Tailwind",
                "Arquitecturas escalables y seguras"
            ]
        },
        {
            title: "Ingeniería de Automatización",
            icon: <Workflow className="text-cyan-400" />,
            items: [
                "Orquestación con n8n y Python-RPA",
                "Bots de extracción de datos (Scraping)",
                "Integración de APIs y Webhooks",
                "Automatización de nómina y facturación"
            ]
        },
        {
            title: "Data & Business Intelligence",
            icon: <BarChart3 className="text-purple-400" />,
            items: [
                "Dashboards interactivos en PowerBI/Looker",
                "Arquitectura de SQL y Data Lakes",
                "Limpieza y validación masiva de datos",
                "Reportes automatizados por correo"
            ]
        },
        {
            title: "Procesamiento de Documentos (OCR)",
            icon: <Search className="text-orange-400" />,
            items: [
                "Extracción de datos en facturas y recibos",
                "Validación de identidad y documentos legales",
                "Registro automático de incapacidades (RRHH)",
                "Digitalización predictiva de archivos legacy"
            ]
        },
        {
            title: "Ecosistemas & Solid ERP",
            icon: <Layers className="text-blue-400" />,
            items: [
                "Infraestructura Java Enterprise",
                "Implementación de módulos Solid ERP",
                "Migración de datos desde sistemas legacy",
                "Integración con APIs de terceros"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
                        Soluciones de <span style={{ color: 'var(--deep-navy-800)' }}>Ingeniería</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                        Desarrollamos infraestructura digital diseñada para escalar su negocio y eliminar la fricción operativa.
                    </p>
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            style={{
                                background: 'rgba(0, 13, 39, 0.4)',
                                padding: '3rem',
                                borderRadius: '24px',
                                border: '1px solid var(--deep-navy-400)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                {category.icon}
                            </div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>{category.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {category.items.map((item, i) => (
                                    <li key={i} style={{
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1rem',
                                        fontSize: '1rem'
                                    }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--deep-navy-800)', borderRadius: '50%' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        marginTop: '100px',
                        padding: '4rem',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 32, 96, 0.1), transparent)',
                        borderRadius: '32px',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ marginBottom: '3rem', fontSize: '1.5rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Stack Tecnológico de Élite</h2>
                    <div style={{
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
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.15, y: -8 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '110px' }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '14px',
                                    boxShadow: `0 0 20px rgba(0, 0, 0, 0.2), 0 0 10px #${tech.color}33`,
                                    transition: 'all 0.3s ease'
                                }}>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: tech.name.includes('Power') ? 'none' : 'drop-shadow(0 0 4px rgba(0,0,0,0.5))' }}
                                    />
                                </div>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
