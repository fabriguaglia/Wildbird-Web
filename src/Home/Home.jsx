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

        .logo-placeholder {
          width: 50px;
          height: 50px;
          background-color: #f0f0f0;
          border: 2px dashed #152139;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #152139;
        }

        .w-placeholder {
          width: 400px;
          height: 300px;
          background-color: #f0f0f0;
          border: 2px dashed #152139;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #152139;
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

        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }

          .col-md-8 {
            text-align: center !important;
          }

          h2 {
            font-size: 32px !important;
          }

          .service-item {
            font-size: 16px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 d-flex gap-3 hide-mobile">
              <Facebook size={20} className="social-icon" />
              <Instagram size={20} className="social-icon" />
              <Linkedin size={20} className="social-icon" />
            </div>
            <div className="col-md-8 text-center">
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

      {/* Navigation */}
      <nav className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-3">
              <a href="#nosotros" className="nav-link-custom">SOBRE NOSOTROS</a>
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

      {/* Hero Section */}
      <section className="py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ 
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
            <div className="col-md-6 text-center">
                <img src={W} alt="Wildbird W" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Text Line */}
      <div className="animated-text-line">
        <div className="animated-text-content">
          DISEÑO GRÁFICO DE ALTA CALIDAD / MARKETING QUE FUNCIONA / IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA / DISEÑO GRÁFICO DE ALTA CALIDAD / MARKETING QUE FUNCIONA / IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA / 
        </div>
      </div>

      {/* About & Services Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="section-title">SOBRE NOSOTROS</h3>
              <p style={{ lineHeight: '1.8', fontSize: '15px' }}>
                Somos un equipo apasionado y dedicado a lo que hacemos, motivados por el éxito de nuestros clientes. En un mundo saturado de información, analizamos meticulosamente lo que es mejor para su negocio. Al estudiar a su competencia, le ayudamos a forjar una presencia distintiva y a posicionarse estratégicamente en el mercado.
              </p>
              <button className="custom-button mt-3">
                <span>CONOCÉ NUESTRO TRABAJO</span>
              </button>
            </div>
            <div className="col-md-6">
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