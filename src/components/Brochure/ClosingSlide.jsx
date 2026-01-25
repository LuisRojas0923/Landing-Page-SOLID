import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ClosingSlide = ({ slide }) => {
    return (
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
    );
};

export default ClosingSlide;
