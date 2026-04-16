const fs = require('fs');

let code = fs.readFileSync('c:\\Users\\hosorio\\Landing-Page-SOLID\\src\\pages\\Home_original_utf8.jsx', 'utf8');

const servicesStart = code.lastIndexOf('            {/* VERTICALS - Organizamos, Sistematizamos, Automatizamos */}');
const techStackStart = code.indexOf('            {/* TECH STACK BAR */}');

if (servicesStart === -1 || techStackStart === -1) {
    console.error('Could not find #services or Tech Stack Bar section.');
    process.exit(1);
}

// 1. Extract the services section
const servicesSection = code.substring(servicesStart, techStackStart);

// 2. Remove it from the original code
code = code.substring(0, servicesStart) + code.substring(techStackStart);

// 3. Find where to insert it (Before Results Section)
const resultsStart = code.indexOf('            {/* RESULTS SECTION - Industrial Precision */}');
if (resultsStart === -1) {
    console.error('Could not find #results section.');
    process.exit(1);
}

// Insert it right before the results section
code = code.substring(0, resultsStart) + servicesSection + '\n' + code.substring(resultsStart);

// 4. Update the Phase 02 icon
code = code.replace(
    '<Workflow size={22} />\r\n                                </div>\r\n                                <span className="phase-number sync-number" style={{ animationDelay: \'1.5s\' }}>02</span>',
    '<Code2 size={22} />\r\n                                </div>\r\n                                <span className="phase-number sync-number" style={{ animationDelay: \'1.5s\' }}>02</span>'
);

code = code.replace(
    '<Workflow size={22} />\n                                </div>\n                                <span className="phase-number sync-number" style={{ animationDelay: \'1.5s\' }}>02</span>',
    '<Code2 size={22} />\n                                </div>\n                                <span className="phase-number sync-number" style={{ animationDelay: \'1.5s\' }}>02</span>'
);

// Fallback replace for Code2 just in case
if(!code.includes('<Code2 size={22} />')){
    // Look around line 335
    code = code.replace(
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\r\n                                    <Workflow size={22} />\r\n                                </div>',
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\r\n                                    <Code2 size={22} />\r\n                                </div>'
    );
     code = code.replace(
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\n                                    <Workflow size={22} />\n                                </div>',
        '<div className="phase-icon-badge sync-glow" style={{ animationDelay: \'1.5s\' }}>\n                                    <Code2 size={22} />\n                                </div>'
    );
}

// 5. Fix the missing closing div in #results section (stats-dashboard-banner)
// The original code was missing a closing div before </div></div></section>
const missingDivTarget = `                                <div className="stat-content">\r\n                                    <span className="stat-value">-80%</span>\r\n                                    <span className="stat-label" style={{ color: '#27c93f' }}>Costos Operativos</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>`;
const missingDivTargetLf = missingDivTarget.replace(/\r/g, '');

const missingDivReplacement = `                                <div className="stat-content">
                                    <span className="stat-value">-80%</span>
                                    <span className="stat-label" style={{ color: '#27c93f' }}>Costos Operativos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>`;

if (code.includes(missingDivTarget)) {
    code = code.replace(missingDivTarget, missingDivReplacement.replace(/\n/g, '\r\n'));
} else if (code.includes(missingDivTargetLf)) {
    code = code.replace(missingDivTargetLf, missingDivReplacement);
} else {
    console.log("Warning: Could not auto-fix the missing div in stats section. Continuing anyway.");
}

fs.writeFileSync('c:\\Users\\hosorio\\Landing-Page-SOLID\\src\\pages\\Home.jsx', code, 'utf8');
console.log('Successfully reverted and reordered Home.jsx');
