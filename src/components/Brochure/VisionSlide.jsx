import React from 'react';
import { motion } from 'framer-motion';

const VisionSlide = ({ slide }) => {
    const quoteWords = slide.quote.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                y: { type: "spring", stiffness: 100, damping: 10 },
                opacity: { duration: 0.4 },
                filter: { duration: 0.4, ease: "easeOut" } // Avoid spring on blur to prevent negative values
            }
        }
    };

    return (
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
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="vision-quote"
            >
                <p>
                    {quoteWords.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </motion.div>
        </div>
    );
};

export default VisionSlide;
