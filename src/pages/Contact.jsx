import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    MessageSquare,
    MapPin,
    Linkedin,
    Send,
    ArrowRight,
    Globe,
    Phone
} from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
                        Inicie su <span style={{ color: 'var(--deep-navy-800)' }}>Transformación</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
                        Estamos listos para diagnosticar sus procesos y proponer soluciones de alto impacto.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <div style={{ spaceY: '3rem' }}>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700' }}>Canales Directos</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ padding: '1rem', background: 'rgba(0, 32, 96, 0.2)', borderRadius: '12px', color: 'var(--deep-navy-800)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</p>
                                        <p style={{ fontSize: '1.1rem' }}>contacto@solutions.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ padding: '1rem', background: 'rgba(39, 201, 63, 0.1)', borderRadius: '12px', color: '#27c93f' }}>
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>WhatsApp</p>
                                        <p style={{ fontSize: '1.1rem' }}>+57 300 000 0000</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div style={{ padding: '1rem', background: 'rgba(0, 60, 180, 0.1)', borderRadius: '12px', color: 'var(--deep-navy-800)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Ubicación</p>
                                        <p style={{ fontSize: '1.1rem' }}>Cali, Colombia</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginTop: '2rem',
                                    padding: '2rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    border: '1px solid var(--deep-navy-400)'
                                }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--deep-navy-800)' }}>Compromiso Tecnológico</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                        Nos adaptamos a su stack: Desarrollamos desde sistemas legacy en <strong>Java Swing</strong> hasta ecosistemas modernos con <strong>FastAPI</strong> y <strong>React</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder with Premium Style */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '3rem',
                        borderRadius: '32px',
                        border: '1px solid var(--deep-navy-400)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>NOMBRE COMPLETO</label>
                                <input type="text" style={{
                                    background: 'rgba(0, 13, 39, 0.5)',
                                    border: '1px solid var(--deep-navy-400)',
                                    borderRadius: '12px',
                                    padding: '1rem',
                                    color: 'white',
                                    outline: 'none'
                                }} placeholder="John Doe" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>EMAIL CORPORATIVO</label>
                                <input type="email" style={{
                                    background: 'rgba(0, 13, 39, 0.5)',
                                    border: '1px solid var(--deep-navy-400)',
                                    borderRadius: '12px',
                                    padding: '1rem',
                                    color: 'white',
                                    outline: 'none'
                                }} placeholder="john@empresa.com" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>MENSAJE / REQUISITOS</label>
                                <textarea rows="4" style={{
                                    background: 'rgba(0, 13, 39, 0.5)',
                                    border: '1px solid var(--deep-navy-400)',
                                    borderRadius: '12px',
                                    padding: '1rem',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'none'
                                }} placeholder="¿Cómo podemos ayudarle?"></textarea>
                            </div>
                            <button style={{
                                backgroundColor: 'var(--deep-navy-800)',
                                color: 'white',
                                padding: '1.2rem',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: '700',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                cursor: 'pointer',
                                marginTop: '1rem',
                                boxShadow: '0 10px 20px rgba(0, 60, 180, 0.3)'
                            }}>
                                Enviar Solicitud <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
