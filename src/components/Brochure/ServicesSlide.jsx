import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ServicesSlide = ({ slide }) => {
    const navigate = useNavigate();

    return (
        <div className="services-slide">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-desc" style={{ marginBottom: '3rem' }}>{slide.description}</p>
            <div className="services-grid">
                {slide.services.map((s, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10, borderColor: 'var(--deep-navy-800)' }}
                        className="service-card"
                        onClick={() => s.link && navigate(s.link)}
                        style={{ cursor: 'pointer' }}
                    >
                        {s.phase && (
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: '800',
                                color: 'var(--deep-navy-800)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '0.75rem',
                                display: 'block'
                            }}>{s.phase}</span>
                        )}
                        <div className="service-icon">{s.icon}</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{s.desc}</p>

                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--deep-navy-800)',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                marginTop: 'auto'
                            }}
                            whileHover={{ x: 5 }}
                        >
                            VER DETALLE TÉCNICO <ExternalLink size={16} />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSlide;
