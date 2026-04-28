import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, XCircle, CheckCircle2, TrendingUp, Zap, Server, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Pymes.css';

const Pymes = () => {
    const navigate = useNavigate();

    const quickWins = [
        {
            icon: <TrendingUp size={24} />,
            title: "Automatización Financiera",
            desc: "Facturación electrónica, conciliaciones bancarias automáticas y reportes al instante. Cero errores de digitación."
        },
        {
            icon: <Zap size={24} />,
            title: "Operaciones Ágiles",
            desc: "Control de inventarios, gestión de órdenes y trazabilidad logística sin depender de hojas de cálculo infinitas."
        },
        {
            icon: <Server size={24} />,
            title: "Dashboards de Control (BI)",
            desc: "Un panel central con los KPIs más importantes de su negocio para tomar decisiones basadas en datos reales."
        }
    ];

    return (
        <div className="pymes-page">
            {/* HERO */}
            <section className="pymes-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Potencia Enterprise <span>al alcance de su PYME</span></h1>
                    <p>
                        Deje de perder tiempo en tareas manuales. Implementamos soluciones de software y automatización a su medida, diseñadas para generar resultados en semanas, no en años.
                    </p>
                    <button className="pymes-cta" onClick={() => navigate('/contact')}>
                        Solicitar Diagnóstico PYME <ChevronRight size={20} />
                    </button>
                </motion.div>
            </section>

            {/* PAIN POINTS VS SOLUTION */}
            <section className="pymes-section">
                <h2 className="pymes-section-title">El verdadero costo de no automatizar</h2>
                <div className="pymes-vs-grid">
                    <div className="vs-col vs-bad">
                        <h3><XCircle size={24} /> Como opera hoy</h3>
                        <div className="vs-item"><XCircle size={18} color="#f43f5e" style={{flexShrink:0, marginTop:3}} /> Caos en Excel y múltiples versiones de un mismo archivo.</div>
                        <div className="vs-item"><XCircle size={18} color="#f43f5e" style={{flexShrink:0, marginTop:3}} /> Dependencia de tareas repetitivas que consumen el tiempo de su equipo.</div>
                        <div className="vs-item"><XCircle size={18} color="#f43f5e" style={{flexShrink:0, marginTop:3}} /> Información desconectada y decisiones basadas en intuición.</div>
                        <div className="vs-item"><XCircle size={18} color="#f43f5e" style={{flexShrink:0, marginTop:3}} /> Cuellos de botella al intentar crecer o atender más clientes.</div>
                    </div>
                    <div className="vs-col vs-good">
                        <h3><CheckCircle2 size={24} /> Como operará con SOLID</h3>
                        <div className="vs-item"><CheckCircle2 size={18} color="#10b981" style={{flexShrink:0, marginTop:3}} /> Dashboards centralizados y datos precisos en tiempo real.</div>
                        <div className="vs-item"><CheckCircle2 size={18} color="#10b981" style={{flexShrink:0, marginTop:3}} /> Procesos robóticos (RPA) trabajando 24/7 sin margen de error.</div>
                        <div className="vs-item"><CheckCircle2 size={18} color="#10b981" style={{flexShrink:0, marginTop:3}} /> Un ecosistema tecnológico integrado y flujos de trabajo claros.</div>
                        <div className="vs-item"><CheckCircle2 size={18} color="#10b981" style={{flexShrink:0, marginTop:3}} /> Capacidad instalada para escalar las ventas sin colapsar la operación.</div>
                    </div>
                </div>
            </section>

            {/* QUICK WINS */}
            <section className="pymes-section pymes-section-alt">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="pymes-section-title">Resultados rápidos: Paquetes Ágiles</h2>
                    <div className="pymes-grid">
                        {quickWins.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="pymes-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="pymes-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODELO DE TRABAJO */}
            <section className="pymes-section" style={{ textAlign: 'center' }}>
                <h2 className="pymes-section-title">Crecimiento por Fases</h2>
                <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                    No necesita hacer grandes inversiones iniciales. Nuestro modelo le permite incorporar tecnología paso a paso, pagándose a sí misma con el ahorro que genera.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#bfdbfe', marginBottom: '0.5rem' }}>1</div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Diagnóstico</h4>
                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Identificamos el cuello de botella crítico.</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#bfdbfe', marginBottom: '0.5rem' }}>2</div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Quick Win</h4>
                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Implementamos una solución rápida y visible.</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', width: '250px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#bfdbfe', marginBottom: '0.5rem' }}>3</div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Escalabilidad</h4>
                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Agregamos módulos a medida que crece.</p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION BOTTOM */}
            <section className="pymes-section pymes-section-alt" style={{ textAlign: 'center', paddingBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>Hablemos de su negocio</h2>
                <p style={{ color: '#475569', marginBottom: '2rem' }}>Una breve sesión para descubrir cómo podemos ayudarle a ser más eficiente.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="pymes-cta" onClick={() => navigate('/contact')}>
                        Agenda tu Diagnóstico <ChevronRight size={20} />
                    </button>
                    <a href="https://wa.me/573172652487" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#25D366', color: 'white', borderRadius: '99px', textDecoration: 'none', fontWeight: '700', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)' }}>
                        <MessageSquare size={20} /> Chat por WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Pymes;
