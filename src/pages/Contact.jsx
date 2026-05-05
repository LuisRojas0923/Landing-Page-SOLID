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
        <div style={{ 
            backgroundColor: 'transparent', 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '40px 20px' 
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Inicie su <span style={{ color: 'var(--deep-navy-800)' }}>Transformación</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                        Estamos listos para diagnosticar sus procesos y proponer soluciones de alto impacto.
                    </p>
                </motion.div>
 
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Contact Info */}
                    <div style={{ spaceY: '2rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '700' }}>Canales Directos</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ padding: '0.75rem', background: 'rgba(0, 32, 96, 0.2)', borderRadius: '10px', color: 'var(--deep-navy-800)' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>Email</p>
                                        <p style={{ fontSize: '1rem' }}>contacto@solutions.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ padding: '0.75rem', background: 'rgba(39, 201, 63, 0.1)', borderRadius: '10px', color: '#27c93f' }}>
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>WhatsApp</p>
                                        <p style={{ fontSize: '1rem' }}>+57 317 265 2487</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '20px',
                                    border: '1px solid var(--deep-navy-800)'
                                }}>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--deep-navy-800)' }}>Compromiso Tecnológico</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>
                                        Nos adaptamos a su stack: Desarrollamos desde sistemas legacy en <strong>Java Swing</strong> hasta ecosistemas modernos con <strong>FastAPI</strong> y <strong>React</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    {/* Contact Form Placeholder with Premium Style */}
                    <div style={{
                        background: 'linear-gradient(165deg, var(--bg-card) 0%, var(--bg-main) 100%)',
                        padding: '2rem',
                        borderRadius: '24px',
                        border: '1px solid var(--deep-navy-400)',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
                    }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>NOMBRE COMPLETO</label>
                                <input type="text" style={{
                                    background: 'var(--bg-card-alt)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '10px',
                                    padding: '0.75rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} placeholder="John Doe" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>EMAIL CORPORATIVO</label>
                                <input type="email" style={{
                                    background: 'var(--bg-card-alt)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '10px',
                                    padding: '0.75rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} placeholder="john@empresa.com" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>MENSAJE / REQUISITOS</label>
                                <textarea rows="3" style={{
                                    background: 'var(--bg-card-alt)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '10px',
                                    padding: '0.75rem',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    resize: 'none'
                                }} placeholder="¿Cómo podemos ayudarle?"></textarea>
                            </div>
                            <button style={{
                                backgroundColor: 'var(--deep-navy-800)',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '10px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer',
                                marginTop: '0.5rem',
                                boxShadow: '0 10px 20px rgba(0, 60, 180, 0.3)'
                            }}>
                                Enviar Solicitud <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
