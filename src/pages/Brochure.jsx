import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    ChevronLeft,
    ArrowRight,
    LayoutDashboard,
    Zap,
    ShieldCheck,
    Database,
    TrendingUp,
    Building2,
    Users,
    TicketCheck,
    Bot,
    Terminal,
    Layers,
    Target
} from 'lucide-react';
import './Brochure.css';

const slides = [
    {
        id: 'vision',
        title: "SOLID SOLUTIONS",
        subtitle: "Ingeniería de Precisión para Negocios en Escala.",
        quote: "Democratizar la ingeniería de alto nivel para empresas que buscan escala, eliminando la fricción técnica mediante automatización y software de precisión.",
        icon: <Target size={48} />,
        accent: "var(--deep-navy-800)"
    },
    {
        id: 'friction',
        title: "¿Qué detiene su escalabilidad hoy?",
        description: "La fricción operativa impide el crecimiento. Detectamos estos síntomas de freno:",
        points: [
            { icon: <Users />, label: "Procesos Manuales", text: "Tareas repetitivas que consumen talento humano." },
            { icon: <Database />, label: "Silos de Datos", text: "Excel desconectados que generan 'versiones de la verdad' contradictorias." },
            { icon: <BarChart3 />, label: "Ceguera Gerencial", text: "Reportes tardíos que impiden tomar decisiones a tiempo." }
        ],
        footer: "Su empresa trabaja para el dato, no el dato para su empresa.",
        accent: "#ef4444"
    },
    {
        id: 'products',
        title: "Software de Precisión: Nuestra Suite",
        description: "Soluciones propias diseñadas para la trazabilidad y el control.",
        products: [
            {
                name: "SOLID ERP",
                tagline: "El Núcleo Operativo",
                features: ["Finanzas & Reporting", "Logística en Tiempo Real", "CRM Integrado"],
                image: "/projects/erp-placeholder.png", // Placeholder
                isProduct: true
            },
            {
                name: "SOLID SERVICE PORTAL",
                tagline: "El Núcleo de Apoyo",
                features: ["Gestión de Tickets TI", "Requisiciones RRHH", "Solicitudes Centralizadas"],
                image: "/projects/portal-placeholder.png", // Placeholder
                isProduct: true
            }
        ],
        accent: "var(--deep-navy-800)"
    },
    {
        id: 'services',
        title: "Servicios para eliminar la fricción",
        description: "Aplicamos ingeniería donde el software estándar no llega.",
        services: [
            { icon: <Bot />, title: "RPA", desc: "Automatización Robótica de Procesos." },
            { icon: <Layers />, title: "Ingeniería de Datos", desc: "ETL, BI y visualización avanzada." },
            { icon: <Terminal />, title: "Desarrollo a Medida", desc: "Sistemas robustos en Java y Python." },
            { icon: <ShieldCheck />, title: "Consultoría", desc: "Mejora y diseño de flujos operativos." }
        ],
        accent: "var(--deep-navy-500)"
    },
    {
        id: 'tech',
        title: "Tecnología que Escala",
        description: "No usamos 'cajas negras'. Usamos estándares modernos.",
        techStack: [
            { name: "Java & Python", detail: "Backend Robusto" },
            { name: "SQL & Pipelines", detail: "Datos Gobernados" },
            { name: "Integración API", detail: "Conexión con Excel/ERP" },
            { name: "Seguridad", detail: "Protección de Grado Empresarial" }
        ],
        accent: "var(--deep-navy-800)"
    },
    {
        id: 'closing',
        title: "Su socio para escalar sin fricción",
        points: [
            "Visión Integral: Proceso + Datos + Tecnología.",
            "Automatización Real: Desde RPA hasta ERP propio.",
            "Sin fricción: Lenguaje claro para gerencia."
        ],
        cta: "Agendar Diagnóstico",
        accent: "var(--deep-navy-800)"
    }
];

const BarChart3 = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

const Brochure = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(currentSlide - 1);
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const slide = slides[currentSlide];

    return (
        <div className="brochure-viewer">
            <div className="brochure-nav-hints">
                <div className="progress-bar">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`progress-dot ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => {
                                setDirection(i > currentSlide ? 1 : -1);
                                setCurrentSlide(i);
                            }}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="slide-container"
                >
                    <div className="slide-content">
                        {/* Vision Slide */}
                        {slide.id === 'vision' && (
                            <div className="vision-slide">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="vision-icon"
                                    style={{ color: slide.accent }}
                                >
                                    {slide.icon}
                                </motion.div>
                                <h1 className="slide-title">{slide.title}</h1>
                                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="vision-quote"
                                >
                                    <p>"{slide.quote}"</p>
                                </motion.div>
                            </div>
                        )}

                        {/* Friction Slide */}
                        {slide.id === 'friction' && (
                            <div className="friction-slide">
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-desc">{slide.description}</p>
                                <div className="friction-grid">
                                    {slide.points.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="friction-item"
                                        >
                                            <div className="item-icon">{p.icon}</div>
                                            <div className="item-text">
                                                <h3>{p.label}</h3>
                                                <p>{p.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="friction-footer">{slide.footer}</p>
                            </div>
                        )}

                        {/* Products Slide */}
                        {slide.id === 'products' && (
                            <div className="products-slide">
                                <h1 className="slide-title">{slide.title}</h1>
                                <div className="product-showcase">
                                    {slide.products.map((p, i) => (
                                        <div key={i} className="product-card">
                                            <div className="product-mockup">
                                                <div className="mockup-header">
                                                    <div className="dots"><span></span><span></span><span></span></div>
                                                    <div className="url-bar">{p.name.toLowerCase().replace(/ /g, '_')}.solutions</div>
                                                </div>
                                                <div className="mockup-content">
                                                    {/* Screen Capture Placeholder */}
                                                    <div className="screenshot-placeholder">
                                                        <LayoutDashboard size={48} opacity={0.1} />
                                                        <span>Captura de {p.name} aquí</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h3>{p.name}</h3>
                                                <span className="tagline">{p.tagline}</span>
                                                <ul>
                                                    {p.features.map((f, j) => <li key={j}><ChevronRight size={14} /> {f}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Services Slide */}
                        {slide.id === 'services' && (
                            <div className="services-slide">
                                <h1 className="slide-title">{slide.title}</h1>
                                <div className="services-grid">
                                    {slide.services.map((s, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5 }}
                                            className="service-card"
                                        >
                                            <div className="service-icon">{s.icon}</div>
                                            <h3>{s.title}</h3>
                                            <p>{s.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech Slide */}
                        {slide.id === 'tech' && (
                            <div className="tech-slide">
                                <h1 className="slide-title">{slide.title}</h1>
                                <div className="tech-list">
                                    {slide.techStack.map((t, i) => (
                                        <div key={i} className="tech-item">
                                            <div className="tech-bubble">
                                                <Zap size={20} />
                                            </div>
                                            <div className="tech-info">
                                                <h3>{t.name}</h3>
                                                <p>{t.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Closing Slide */}
                        {slide.id === 'closing' && (
                            <div className="closing-slide">
                                <h1 className="slide-title">{slide.title}</h1>
                                <div className="closing-points">
                                    {slide.points.map((p, i) => (
                                        <div key={i} className="closing-point">
                                            <ShieldCheck size={24} />
                                            <span>{p}</span>
                                        </div>
                                    ))}
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cta-button"
                                >
                                    {slide.cta} <ArrowRight />
                                </motion.button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="controls">
                <button onClick={prevSlide} disabled={currentSlide === 0} className="nav-btn">
                    <ChevronLeft /> Anterior
                </button>
                <span className="slide-counter">{currentSlide + 1} / {slides.length}</span>
                <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="nav-btn">
                    Siguiente <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Brochure;
