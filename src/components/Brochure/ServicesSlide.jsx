import React from 'react';
import { motion } from 'framer-motion';

const ServicesSlide = ({ slide }) => {
    return (
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
    );
};

export default ServicesSlide;
