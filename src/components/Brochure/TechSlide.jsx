import React from 'react';
import { Zap } from 'lucide-react';

const TechSlide = ({ slide }) => {
    return (
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
    );
};

export default TechSlide;
