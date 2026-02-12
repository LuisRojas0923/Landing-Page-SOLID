import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    ChevronRight,
    ChevronLeft,
    Target,
    Users,
    Database,
    EyeOff,
    Target as TargetIcon,
    ShieldCheck,
    Bot,
    Terminal,
    Layers,
    Zap,
    Home
} from 'lucide-react';
import './Brochure.css';

// Slide Components
import VisionSlide from '../components/Brochure/VisionSlide';
import FrictionSlide from '../components/Brochure/FrictionSlide';
import ProductsSlide from '../components/Brochure/ProductsSlide';
import ServicesSlide from '../components/Brochure/ServicesSlide';
import TechSlide from '../components/Brochure/TechSlide';
import ClosingSlide from '../components/Brochure/ClosingSlide';

const slides = [
    {
        id: 'vision',
        title: "SOLID SOLUTIONS",
        subtitle: "Ingeniería de Precisión para Negocios en Escala.",
        quote: "Democratizar la ingeniería de alto nivel para empresas que buscan escala, eliminando la fricción técnica mediante automatización y software de precisión.",
        icon: <TargetIcon size={48} />,
        accent: "var(--deep-navy-800)"
    },
    {
        id: 'friction',
        title: "¿Qué detiene su escalabilidad hoy?",
        description: "La fricción operativa es el impuesto oculto que impide el crecimiento. Detectamos estos síntomas críticos de freno:",
        points: [
            { icon: <Users />, label: "Fuga de Talento", text: "Procesos manuales y tareas repetitivas que anclan el potencial humano a labores mecánicas de bajo valor." },
            { icon: <Database />, label: "Caos Informativo", text: "Silos de datos y hojas de Excel desconectados que generan 'versiones de la verdad' contradictorias." },
            { icon: <EyeOff />, label: "Incapacidad de Reacción", text: "Ceguera gerencial por reportes tardíos. El negocio sucede más rápido que su capacidad de medirlo." }
        ],
        quote: "Sin un núcleo digital sólido, cada nuevo cliente aumenta la fricción operativa, no la rentabilidad.",
        footer: "SU INFORMACIÓN DEJA DE SER UN OBSTÁCULO, ES EL MOTOR DE SU RENTABILIDAD",
        accent: "#3b82f6"
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
                image: "/projects/erp-placeholder.png",
                isProduct: true
            },
            {
                name: "SOLID SERVICE PORTAL",
                tagline: "El Núcleo de Apoyo",
                features: ["Gestión de Tickets TI", "Requisiciones RRHH", "Solicitudes Centralizadas"],
                video: "/videos/portal-demo.mp4",
                isProduct: true
            }
        ],
        integrationNote: "Ecosistema Unificado: Solid Service Portal alimenta nativamente el núcleo de datos de SOLID ERP.",
        accent: "var(--deep-navy-800)"
    },
    {
        id: 'services',
        title: "Servicios para eliminar la fricción",
        description: "Aplicamos ingeniería donde el software estándar no llega.",
        services: [
            { icon: <Bot />, title: "RPA", desc: "Liberamos a su equipo de tareas repetitivas conectando sistemas que no hablan entre sí.", interactive: true },
            { icon: <Layers />, title: "Ingeniería de Datos", desc: "Extracción, transformación y visualización avanzada para Business Intelligence." },
            { icon: <Terminal />, title: "Desarrollo a Medida", desc: "Soluciones de software robustas en Java y Python alineadas específicamente a su negocio." },
            { icon: <ShieldCheck />, title: "Consultoría", desc: "Mejora y diseño estratégico de flujos de trabajo antes de automatizar." }
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
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)'
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)'
        })
    };

    const slide = slides[currentSlide];

    const renderSlide = () => {
        switch (slide.id) {
            case 'vision':
                return <VisionSlide slide={slide} />;
            case 'friction':
                return <FrictionSlide slide={slide} />;
            case 'products':
                return <ProductsSlide slide={slide} />;
            case 'services':
                return <ServicesSlide slide={slide} />;
            case 'tech':
                return <TechSlide slide={slide} />;
            case 'closing':
                return <ClosingSlide slide={slide} />;
            default:
                return null;
        }
    };

    return (
        <div className="brochure-viewer">
            <Helmet>
                <title>Brochure Interactivo | SOLID SOLUTIONS</title>
                <meta name="description" content="Presentación interactiva de SOLID SOLUTIONS: Democratizando la ingeniería de alto nivel." />
            </Helmet>
            <Link to="/" className="brochure-back-home" aria-label="Volver al inicio">
                <Home size={16} />
                <span>Inicio</span>
            </Link>
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
                        x: { type: "spring", stiffness: 200, damping: 25 },
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                        filter: { duration: 0.4, ease: "easeOut" } // Use duration instead of spring for filter
                    }}
                    className="slide-container"
                >
                    <div className="slide-content">
                        {renderSlide()}
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

            {/* Strategic Branding Footer */}
            <div className="brochure-footer-brand">
                <div className="brand-dot"></div>
                SOLID SOLUTIONS • PRESENTACIÓN ESTRATÉGICA 2026
            </div>
        </div>
    );
};

export default Brochure;
