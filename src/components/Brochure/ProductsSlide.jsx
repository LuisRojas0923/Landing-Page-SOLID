import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ChevronRight, Zap } from 'lucide-react';

const ProductsSlide = ({ slide }) => {
    return (
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
                                {p.video ? (
                                    <video
                                        src={p.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="screenshot-placeholder">
                                        <LayoutDashboard size={48} opacity={0.1} />
                                        <span>Captura de {p.name} aquí</span>
                                    </div>
                                )}
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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="integration-banner"
            >
                <Zap size={18} /> {slide.integrationNote}
            </motion.div>
        </div>
    );
};

export default ProductsSlide;
