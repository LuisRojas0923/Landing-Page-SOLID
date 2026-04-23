import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'normal', color = 'white' }) => {
    const isSmall = size === 'small';
    const isLarge = size === 'large';
    
    const fontSize = isLarge ? '2.2rem' : (isSmall ? '1.1rem' : '1.4rem');
    const barWidth = isLarge ? 8 : (isSmall ? 4 : 5);
    const barGap = isLarge ? 4 : (isSmall ? 2 : 3);
    const containerGap = isLarge ? '0.8rem' : '0.5rem';

    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: containerGap,
            cursor: 'pointer',
            userSelect: 'none'
        }}>
            {/* Texto: Solid-Solutions */}
            <div style={{ 
                color: color,
                fontSize: fontSize,
                fontWeight: '800',
                fontStyle: 'italic',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                lineHeight: 1
            }}>
                <span>Solid</span>
                <span style={{ color: color, margin: '0 0.1em' }}>-</span>
                <span>Solutions</span>
            </div>

            {/* Gráfico de Barras (A la derecha) */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'flex-end', 
                gap: barGap,
                height: isLarge ? '32px' : (isSmall ? '18px' : '24px'),
                paddingBottom: '2px'
            }}>
                {[
                    { h: 0.4, c: '#ffffff', glow: false },
                    { h: 0.7, c: 'var(--powder-blue-400)', glow: false },
                    { h: 1.0, c: 'var(--deep-navy-800)', glow: true }
                ].map((bar, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.h * 100}%` }}
                        transition={{ 
                            duration: 0.8, 
                            delay: i * 0.15,
                            type: 'spring',
                            stiffness: 100
                        }}
                        style={{
                            width: barWidth,
                            background: bar.c,
                            borderRadius: '0',
                            boxShadow: bar.glow ? '0 0 12px rgba(90, 145, 255, 0.6)' : 'none'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Logo;
