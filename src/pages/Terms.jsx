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

const Terms = () => {
    return (
        <div style={{
            backgroundColor: 'transparent',
            padding: 'clamp(4rem, 8vw, 7rem) 20px',
            minHeight: '70vh'
        }}>
            <Helmet>
                <title>Términos y Condiciones - SOLID SOLUTIONS</title>
                <meta name="description" content="Términos y condiciones de uso del sitio web de SOLID SOLUTIONS." />
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
                        Condiciones de uso
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem'
                    }}>
                        Términos y <span style={{ color: 'var(--deep-navy-800)' }}>Condiciones</span>
                    </h1>
                    <p style={{ ...paragraphStyle, maxWidth: '760px', margin: '0 auto' }}>
                        Estos términos regulan el acceso y uso del sitio web de SOLID SOLUTIONS, así como la información publicada sobre servicios de consultoría, automatización, ingeniería de datos y desarrollo de software.
                    </p>
                </header>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>1. Aceptación de los términos</h2>
                    <p style={paragraphStyle}>
                        Al navegar este sitio web, el usuario acepta estas condiciones de uso. Si no está de acuerdo con ellas, debe abstenerse de utilizar el sitio o enviar información a través de sus canales de contacto.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>2. Objeto del sitio</h2>
                    <p style={paragraphStyle}>
                        El sitio tiene como finalidad presentar los servicios, capacidades, metodologías y canales de contacto de SOLID SOLUTIONS en áreas como arquitectura de datos, automatización de procesos, software a medida, ERP, analítica y transformación digital.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>3. Alcance de la información publicada</h2>
                    <p style={paragraphStyle}>
                        La información contenida en este sitio es de carácter general e informativo. No constituye una oferta contractual, garantía de resultados ni compromiso específico de prestación de servicios sin una evaluación, cotización, aceptación del alcance y acuerdo comercial previo.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>4. Prestación de servicios</h2>
                    <p style={paragraphStyle}>
                        Cualquier servicio solicitado estará sujeto a diagnóstico, definición funcional y técnica, estimación de alcance, condiciones comerciales, responsabilidades, tiempos de ejecución y criterios de aceptación acordados entre las partes.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>5. Uso permitido</h2>
                    <ul style={listStyle}>
                        <li>Consultar la información publicada en el sitio.</li>
                        <li>Solicitar información, diagnóstico o contacto comercial.</li>
                        <li>Compartir enlaces al sitio respetando la integridad de la marca y del contenido.</li>
                    </ul>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>6. Propiedad intelectual</h2>
                    <p style={paragraphStyle}>
                        Los textos, diseños, logotipos, recursos visuales, metodologías, estructura de contenidos y demás elementos del sitio pertenecen a SOLID SOLUTIONS o a sus respectivos titulares. No se permite su copia, modificación, distribución o explotación comercial sin autorización previa.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>7. Enlaces y servicios de terceros</h2>
                    <p style={paragraphStyle}>
                        El sitio puede incluir enlaces a plataformas externas como WhatsApp, servicios de hosting, redes sociales, herramientas de analítica o proveedores tecnológicos. SOLID SOLUTIONS no controla las políticas, disponibilidad o prácticas de dichos terceros.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>8. Limitación de responsabilidad</h2>
                    <p style={paragraphStyle}>
                        SOLID SOLUTIONS procura mantener información clara y actualizada; sin embargo, no garantiza que el sitio esté libre de interrupciones, errores técnicos o desactualizaciones. Las decisiones empresariales o tecnológicas deben tomarse con base en análisis específico, diagnóstico y validación del contexto de cada organización.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>9. Modificaciones</h2>
                    <p style={paragraphStyle}>
                        SOLID SOLUTIONS podrá actualizar estos términos, contenidos, servicios o condiciones del sitio cuando lo considere necesario. La versión vigente estará disponible en esta página.
                    </p>
                </section>

                <section style={sectionStyle}>
                    <h2 style={titleStyle}>10. Ley aplicable</h2>
                    <p style={paragraphStyle}>
                        Estos términos se interpretarán conforme a la normativa colombiana, salvo que un contrato específico entre las partes establezca condiciones diferentes.
                    </p>
                </section>
            </article>
        </div>
    );
};

export default Terms;
