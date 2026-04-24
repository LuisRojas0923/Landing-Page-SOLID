import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'normal', color = 'white', variant = 'full', animated = false }) => {
    const isSmall = size === 'small';
    const isLarge = size === 'large';
    const isShort = variant === 'short';
    const isERP = variant === 'erp';
    const isPortal = variant === 'portal';
    const isIconOnly = variant === 'icon';
    
    const fontSize = isLarge ? '2.2rem' : (isSmall ? '1.1rem' : '1.4rem');
    const barWidth = isLarge ? 8 : (isSmall ? 4 : 5);
    const barGap = isLarge ? 4 : (isSmall ? 2 : 3);
    const containerGap = isLarge ? '0.8rem' : '0.5rem';

    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isIconOnly ? '0' : containerGap,
            cursor: 'pointer',
            userSelect: 'none'
        }}>
            {/* Texto: Solid / Solid-Solutions / Solid-ERP (Oculto si es icon) */}
            {!isIconOnly && (
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
                    {!isShort && (
                        <>
                            <span style={{ color: color, margin: '0 0.1em' }}>-</span>
                            <span>{isERP ? 'ERP' : (isPortal ? 'Portal de Servicios' : 'Solutions')}</span>
                        </>
                    )}
                </div>
            )}

            {/* Gráfico de Barras */}
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
                        animate={animated ? { 
                            height: [`${bar.h * 50}%`, `${bar.h * 100}%`, `${bar.h * 50}%`]
                        } : {
                            height: `${bar.h * 100}%`
                        }}
                        transition={animated ? { 
                            duration: 1.5 + i * 0.2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        } : {
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
