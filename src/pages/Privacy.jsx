import React from 'react';
import { Helmet } from 'react-helmet-async';

const sectionStyle = {
    marginBottom: '2rem'
};

const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '800',
    marginBottom: '0.75rem',
    color: 'var(--deep-navy-800)'
};

const paragraphStyle = {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    lineHeight: '1.7',
    fontFamily: "'Roboto', sans-serif",
    fontStyle: 'italic'
};

const listStyle = {
    ...paragraphStyle,
    paddingLeft: '1.25rem'
};

const Privacy = () => {
    return (
        <div style={{
            backgroundColor: 'transparent',
            padding: 'clamp(4rem, 8vw, 7rem) 20px',
            minHeight: '70vh'
        }}>
            <Helmet>
                <title>Política de Privacidad - SOLID SOLUTIONS</title>
                <meta name="description" content="Política de privacidad y tratamiento de datos personales de SOLID SOLUTIONS." />
            </Helmet>

            <article style={{ maxWidth: '920px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{
                        color: 'var(--deep-navy-800)',
                        fontWeight: '800',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                    }}>
                        Tratamiento de datos personales
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem'
                    }}>
                        Política de <span style={{ color: 'var(--deep-navy-800)' }}>Privacidad</span>
                    </h1>
                    <p style={{ ...paragraphStyle, maxWidth: '760px', margin: '0 auto' }}>
                        Esta política explica cómo SOLID SOLUTIONS recolecta, utiliza, conserva y protege la información personal recibida a través de este sitio web, formularios de contacto y canales digitales.
                    </p>
                </header>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>1. Responsable del tratamiento</h2>
                    <p style={paragraphStyle}>
                        El responsable del tratamiento de los datos personales es SOLID SOLUTIONS. Para consultas, solicitudes o reclamos relacionados con datos personales, puede contactarnos a través del correo electrónico y los canales publicados en la página de contacto.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>2. Información que podemos recolectar</h2>
                    <ul style={listStyle}>
                        <li>Nombre completo.</li>
                        <li>Correo electrónico corporativo.</li>
                        <li>Número de teléfono o WhatsApp, cuando sea suministrado.</li>
                        <li>Empresa, cargo, necesidad, mensaje o requerimiento enviado.</li>
                        <li>Información técnica básica de navegación, cuando aplique, para seguridad, analítica y mejora del sitio.</li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>3. Finalidades del tratamiento</h2>
                    <ul style={listStyle}>
                        <li>Responder solicitudes recibidas por el sitio web o canales digitales.</li>
                        <li>Agendar diagnósticos, reuniones o conversaciones comerciales.</li>
                        <li>Elaborar propuestas, alcances técnicos o recomendaciones de solución.</li>
                        <li>Gestionar la relación comercial, contractual o precontractual.</li>
                        <li>Mejorar nuestros servicios, contenidos, procesos de atención y experiencia digital.</li>
                        <li>Mantener trazabilidad de comunicaciones y requerimientos.</li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>4. Autorización</h2>
                    <p style={paragraphStyle}>
                        Al enviar información mediante formularios, WhatsApp, correo electrónico u otros canales de contacto, el usuario autoriza el tratamiento de sus datos personales para las finalidades descritas en esta política.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>5. Derechos del titular</h2>
                    <p style={paragraphStyle}>
                        El titular de los datos personales puede conocer, actualizar, rectificar, solicitar la supresión de sus datos, revocar la autorización otorgada y presentar consultas o reclamos conforme a la normativa aplicable sobre protección de datos personales.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>6. Conservación y seguridad</h2>
                    <p style={paragraphStyle}>
                        La información será conservada durante el tiempo necesario para atender la solicitud, gestionar la relación comercial o cumplir obligaciones legales, contractuales, administrativas o de trazabilidad. SOLID SOLUTIONS aplica medidas razonables de seguridad para proteger la información contra acceso, uso o divulgación no autorizada.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>7. Terceros y herramientas tecnológicas</h2>
                    <p style={paragraphStyle}>
                        Para operar el sitio y atender solicitudes, pueden intervenir proveedores tecnológicos como servicios de hosting, correo electrónico, mensajería, analítica, CRM o automatización. Estos terceros deberán tratar la información conforme a sus propias políticas y a las finalidades autorizadas.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>8. Vigencia</h2>
                    <p style={paragraphStyle}>
                        Esta política rige desde su publicación y podrá actualizarse cuando existan cambios normativos, comerciales, técnicos o de operación. La versión vigente estará disponible en este sitio web.
                    </p>
                </section>
            </article>
        </div>
    );
};

export default Privacy;
