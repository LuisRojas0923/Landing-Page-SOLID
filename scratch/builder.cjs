const fs = require('fs');

let code = fs.readFileSync('c:\\Users\\hosorio\\Landing-Page-SOLID\\src\\pages\\Home.jsx', 'utf8');

// 1. Remove the old #services section from the bottom
const servicesOldStart = code.indexOf('            {/* VERTICALS - Organizamos, Sistematizamos, Automatizamos */}');
const techStackStart = code.indexOf('            {/* TECH STACK BAR */}');
if (servicesOldStart !== -1 && techStackStart !== -1) {
    code = code.substring(0, servicesOldStart) + code.substring(techStackStart);
}

// 2. Remove the old #results section
const resultsOldStart = code.indexOf('            {/* RESULTS SECTION - Industrial Precision */}');
const erpStart = code.indexOf('            {/* FEATURED PRODUCT - Solid ERP */}');
if (resultsOldStart !== -1 && erpStart !== -1) {
    code = code.substring(0, resultsOldStart) + code.substring(erpStart);
}

// 3. Prepare the new block to insert right after demo ends
const insertPoint = code.indexOf('            {/* FEATURED PRODUCT - Solid ERP */}');

// The pristine #services section
const newServices = `            {/* VERTICALS - Organizamos, Sistematizamos, Automatizamos */}
            <section id="services" style={{ padding: '8rem 2rem', background: 'rgba(0, 13, 39, 0.2)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ color: 'var(--deep-navy-800)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Lo Que Hacemos</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>Nuestras Verticales</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic' }}>Tres pilares que eliminan la fricción operativa de su empresa.</p>
                    </div>
                    <div className="verticals-grid">
                        {verticals.map((v, i) => (
                            <motion.div
                                key={i}
                                className="vertical-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="vertical-card-top">
                                    <span className="vertical-number">{v.number}</span>
                                    <div className="vertical-icon">{v.icon}</div>
                                </div>
                                <h3 className="vertical-title">{v.title}</h3>
                                <span className="vertical-tagline">{v.tagline}</span>
                                <p className="vertical-desc">{v.desc}</p>
                                <ul className="vertical-items">
                                    {v.items.map((item, j) => (
                                        <li key={j} className="vertical-item">
                                            <span className="vertical-item-icon">{item.icon}</span>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate('/solutions')}
                                    className="vertical-cta"
                                >
                                    Ver Detalles <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

`;

// The pristine NEW user #results section with synced glowing cards
const newResults = `            {/* RESULTS SECTION - Industrial Precision */}
            <section id="results" style={{ padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            display: 'inline-block',
                            color: '#61afef',
                            fontWeight: '800',
                            fontSize: '1rem',
                            marginBottom: '1.5rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            background: 'rgba(97, 175, 239, 0.1)',
                            border: '1px solid rgba(97, 175, 239, 0.3)',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '100px',
                            boxShadow: '0 0 20px rgba(97, 175, 239, 0.2)'
                        }}>Impacto Medible</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: '800' }}>Ingeniería que se paga sola.</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '950px', margin: '0 auto', fontSize: '1.3rem', fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', opacity: 0.9 }}>
                            Optimizamos el rendimiento corporativo automatizando procesos repetitivos, minimizando el error humano y aumentando su productividad, para que su talento se enfoque en iniciativas de alto valor estratégico al tiempo que reduce costos operativos.
                        </p>
                    </div>

                    <div className="stats-dashboard-banner">
                        <div className="banner-connector">
                            <div className="banner-particle" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                            <div className="phase-example sync-pill-glow-1" style={{ marginBottom: '1.5rem', width: 'auto', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Calidad</div>
                            <div className="stat-glass-card stat-card-red" style={{ width: '100%' }}>
                                <div className="stat-icon-wrapper" style={{ color: '#ff5f56' }}>
                                    <ShieldCheck size={28} />
                                </div>
                                <div className="stat-content">
                                    <span className="stat-value">0%</span>
                                    <span className="stat-label" style={{ color: '#ff5f56' }}>Error Humano</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                            <div className="phase-example sync-pill-glow-2" style={{ marginBottom: '1.5rem', width: 'auto', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Crecimiento</div>
                            <div className="stat-glass-card stat-card-amber" style={{ width: '100%' }}>
                                <div className="stat-icon-wrapper" style={{ color: '#fca311' }}>
                                    <Zap size={28} />
                                </div>
                                <div className="stat-content">
                                    <span className="stat-value">x10</span>
                                    <span className="stat-label" style={{ color: '#fca311' }}>Productividad</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                            <div className="phase-example sync-pill-glow-3" style={{ marginBottom: '1.5rem', width: 'auto', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Eficiencia</div>
                            <div className="stat-glass-card stat-card-green" style={{ width: '100%' }}>
                                <div className="stat-icon-wrapper" style={{ color: '#27c93f' }}>
                                    <Clock size={28} />
                                </div>
                                <div className="stat-content">
                                    <span className="stat-value">-80%</span>
                                    <span className="stat-label" style={{ color: '#27c93f' }}>Costos Operativos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

`;

code = code.substring(0, insertPoint) + newServices + newResults + code.substring(insertPoint);

// 4. Transform Workflow -> Code2 icon ONLY in phase 2 section
if (code.includes('<Workflow size={22} />')) {
	code = code.replace(
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\\n                                    <Workflow size={22} />',
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\\n                                    <Code2 size={22} />'
	);
	// standard replace
	code = code.replace(
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\r\n                                    <Workflow size={22} />',
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\r\n                                    <Code2 size={22} />'
	);
	// fallback matching
	const p2str = 'style={{ animationDelay: \'1.5s\' }}>\\r\\n                                    <Workflow size={22} />';
	code = code.replace(/<Workflow size=\{22\} \/>([\s\S]*?)02<\/span>/, '<Code2 size={22} />$102</span>');
}

fs.writeFileSync('c:\\Users\\hosorio\\Landing-Page-SOLID\\src\\pages\\Home.jsx', code, 'utf8');
console.log('Restoration and move completed!');
