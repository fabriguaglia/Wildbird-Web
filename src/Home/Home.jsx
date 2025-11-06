import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './wildlogo.png';
import W from './W.jpeg';

const WildbirdLanding = () => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      color: '#152139',
      backgroundColor: '#fff'
    }}>
      <style>{`
        /* --- Estilos Existentes (Manteniendo la estructura original) --- */
        .animated-text-line {
          background-color: #152139;
          color: #fff;
          padding: 12px 0;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .animated-text-content {
          display: inline-block;
          animation: scroll-left 25s linear infinite;
          padding-left: 100%;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .custom-button {
          display: inline-block;
          border: none;
          /* Padding de Escritorio: 12px (top/bottom) 28px (left/right) */
          padding: 12px 28px;
          color: #152139;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1.5px;
          font-size: 17px;
          position: relative;
          background: transparent;
        }

        .custom-button::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%);
          /* Ancho de Escritorio: 100% del botón - 2 veces el padding horizontal (2 * 28px = 56px) */
          width: calc(100% - 56px); 
          height: 0.5em;
          background-color: #F78ACE;
          z-index: 0;
        }

        .custom-button span {
          position: relative;
          z-index: 2;
        }

        .nav-link-custom {
          color: #152139;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 14px;
          padding: 8px 15px;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #F78ACE;
        }

        .social-icon {
          color: #152139;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          color: #F78ACE;
        }

        .section-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid #152139;
        }

        .service-item {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
          color: #152139;
          text-decoration: none;
          display: inline-block;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .service-item:hover {
          color: #F78ACE;
        }
        /* --- Fin Estilos Existentes --- */

        /* --- Estilos Específicos para Móviles (<768px) --- */
        @media (max-width: 767.98px) {
          .hide-mobile {
            display: none !important;
          }

          .hero-text-col {
            text-align: left !important;
          }

          .hero-title {
            font-size: 18px !important; 
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }

          .hero-section {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          
          /* Ajuste de Botón en Móvil */
          .custom-button {
             /* Nuevo Padding en Móvil: 8px (top/bottom) 15px (left/right) */
             padding: 8px 15px;
             font-size: 14px;
             letter-spacing: 1px;
          }
          
          /* AJUSTE CLAVE: Adaptar la barra rosa al nuevo padding de móvil */
          .custom-button::before {
            /* El nuevo ancho debe ser: 100% del botón - 2 veces el nuevo padding horizontal (2 * 15px = 30px) */
            width: calc(100% - 30px);
          }
        }
      `}</style>

      {/* Header y Navigation (Responsive) */}
      <header className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 d-flex gap-3 hide-mobile">
              <Facebook size={20} className="social-icon" />
              <Instagram size={20} className="social-icon" />
              <Linkedin size={20} className="social-icon" />
            </div>
            <div className="col-12 col-md-8 text-center">
                <img src={Logo} alt="Wildbird Logo" style={{ height: '40px' }} />
            </div>
            <div className="col-md-2 text-end hide-mobile">
              <a href="#contacto" className="nav-link-custom">
                CONTACTANOS
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-3">
              <a href="#nosotros" className="nav-link-custom">NOSOTROS</a>
            </div>
            <div className="col-3">
              <a href="#servicios" className="nav-link-custom">SERVICIOS</a>
            </div>
            <div className="col-3">
              <a href="#clientes" className="nav-link-custom">CLIENTES</a>
            </div>
            <div className="col-3">
              <a href="#portfolio" className="nav-link-custom">PORTFOLIO</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Responsive en 1 fila) */}
      <section className="py-5 hero-section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-6 hero-text-col">
              <h2 className="hero-title" style={{ 
                fontSize: '42px',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '30px'
              }}>
                TRANSFORMAMOS<br />
                SU VISIÓN<br />
                EN RESULTADOS DIGITALES.
              </h2>
              <button className="custom-button">
                <span>CONÓCENOS</span>
              </button>
            </div>
            
            <div className="col-6 text-center">
              <img 
                src={W} 
                alt="Wildbird W" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto', 
                  maxHeight: '300px'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Text Line */}
      <div className="animated-text-line">
        <div className="animated-text-content">
            DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; 
        </div>
      </div>

      {/* About & Services Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="section-title">SOBRE NOSOTROS</h3>
              <p style={{ lineHeight: '1.8', fontSize: '15px' }}>
                Somos un equipo apasionado y dedicado a lo que hacemos, motivados por el éxito de nuestros clientes. En un mundo saturado de información, analizamos meticulosamente lo que es mejor para su negocio. Al estudiar a su competencia, le ayudamos a forjar una presencia distintiva y a posicionarse estratégicamente en el mercado.
              </p>
              <button className="custom-button mt-3">
                <span>CONOCÉ NUESTRO TRABAJO</span>
              </button>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="section-title">NUESTROS SERVICIOS</h3>
              <a href="#web-design" className="service-item d-block">WEB DESIGN</a>
              <a href="#brand-design" className="service-item d-block">BRAND DESIGN</a>
              <a href="#editorial-design" className="service-item d-block">EDITORIAL DESIGN</a>
              <a href="#advertising" className="service-item d-block">ADVERTISING</a>
              <a href="#email-mkt" className="service-item d-block">EMAIL MKT</a>
              <button className="custom-button mt-4">
                <span>CONTACTÁNOS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WildbirdLanding;