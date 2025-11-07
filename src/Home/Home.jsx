import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './wildlogo.png';
import './Home.css';
import Inicio from '../Inicio/Inicio';
import { useState } from 'react';
import Alto from './alto.png';
import Cartoon from './cartoon.jpg';
import Disney from './disney.png';
import Hbo from './hbo.jpg';
import Playa from './playa.png';
import Resort from './resort.png';

const Home = () => {
  const [selectedService, setSelectedService] = useState('estrategia');

  const services = {
    estrategia: {
      title: 'Estrategia',
      description: 'Desarrollamos estrategias de posicionamiento e identidad de marca basadas en un análisis profundo y personalizado, que incluye el estudio de la competencia, la industria y el mercado. Ayudamos a tu marca a crecer con propósito y vuelo creativo'
    },
    branding: {
      title: 'Branding',
      description: 'Creamos marcas con identidad y coherencia. Desarrollamos identidad visual y conceptual de tu marca: naming, logo, identidad gráfica, tone of voice..'
    },
    web: {
      title: 'Web & E-commerce',
      description: 'Diseñamos y desarrollamos sitios web que reflejan la identidad de tu marca y tus objetivos de negocio. Ya sea una landing page, un sitio institucional o una tienda online, creamos experiencias digitales funcionales, estéticas y orientadas a la conversión.'
    },
    filmmaking: {
      title: 'Filmmaking & Content Creation',
      description: 'Capturamos tu marca desde nuevas alturas. Realizamos producciones audiovisuales creativas con enfoque cinematográfico: filmaciones con drone, spots publicitarios, reels y contenido digital que transmiten la esencia de tu marca con impacto visual y calidad profesional.'
    },
    advertising: {
      title: 'Advertising',
      description: 'Creamos e implementamos campañas de Paid Media en Meta Ads y Google Ads, potenciadas con inteligencia artificial para optimizar resultados. Estrategia, datos y creatividad se combinan para impulsar rendimiento, crecimiento y conversión.'
    },
    socialMedia: {
      title: 'Social Media & Influencer Marketing',
      description: 'Creamos estrategias de contenido que conectan. Desde la planificación editorial, community management y diseño de piezas, hasta campañas con influencers y partnerships estratégicos para amplificar tu mensaje.'
    },
    produccion: {
      title: 'Producción & Eventos',
      description: 'Ofrecemos un servicio integral que une: estrategia, creatividad y producción. Coordinamos eventos de gran escala o experiencias boutique, activaciones BTL e integración de marcas cuidando cada detalle del proceso.'
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      color: '#152139',
      backgroundColor: '#fff'
    }}>
      
      {/* Header y Navigation (Responsive) */}
      <header className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Oculto en móvil */}
            <div className="col-md-2 d-flex gap-3 hide-mobile">
              <Facebook size={20} className="social-icon" />
              <Instagram size={20} className="social-icon" />
              <Linkedin size={20} className="social-icon" />
            </div>
            {/* Logo centrado en móvil y escritorio */}
            <div className="col-12 col-md-8 text-center">
                <a href='/'>
                    <img src={Logo} alt="Wildbird Logo" style={{ height: '40px' }} />
                </a>
            </div>
            {/* Oculto en móvil */}
            <div className="col-md-2 text-end hide-mobile">
              <a href="#contacto" className="nav-link-custom">
                <button className="custom-button mt-4">
                    <span>CONTÁCTANOS</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navegación Principal (OCULTA EN MÓVIL mediante la clase "mobile-nav") */}
      <nav className="py-3 border-bottom mobile-nav" style={{ borderColor: '#152139' }}>
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

      <Inicio />

      {/* Animated Text Line */}
      <div className="animated-text-line">
        <div className="animated-text-content">
            DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; 
        </div>
      </div>

      {/* About Section - Nueva estética */}
      <section id='nosotros' className="py-5 about-services-bg">
        <div className="container">
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '600', 
            color: '#152139',
            letterSpacing: '2px',
            textTransform: 'uppercase', 
            paddingBottom: '15px',
            borderBottom: '2px solid #152139', 
            marginBottom: '30px' 
          }}>
            SOBRE WILDBIRD
          </h2>
          
          <div className="row">
            <div className="col-12">
              <p style={{ 
                lineHeight: '1.8', 
                fontSize: '16px',
                color: '#152139',
                marginBottom: '30px'
              }}>
                En WildBird creemos en las marcas que se animan a volar alto y desafiar lo establecido.
                Combinamos estrategia, creatividad y tecnología para construir marcas con propósito, integrando branding, comunicación y herramientas digitales e IA.
                Ayudamos a empresas y emprendedores a crecer y destacar en sus industrias
              </p>
              <a href="#servicios">
                <button className="custom-button mt-3">
                  <span>CONOCÉ NUESTRO TRABAJO</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Nueva estructura */}
      <section id='servicios' className="py-5" style={{ backgroundColor: '#152139' }}>
        <div className="container">
          
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '600', 
            color: '#fff',
            letterSpacing: '2px',
            textTransform: 'uppercase', 
            paddingBottom: '15px',
            borderBottom: '1px solid #fff', 
            marginBottom: '30px' 
          }}>
            SERVICIOS
          </h2>

          <div className="row">
            {/* Lista de servicios clickeables */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div style={{ position: 'sticky', top: '20px' }}>
                {Object.entries(services).map(([key, service]) => (
                  <p 
                    key={key}
                    onClick={() => setSelectedService(key)}
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '700',
                      letterSpacing: '1.5px',
                      marginBottom: '15px',
                      color: selectedService === key ? '#F78ACE' : '#fff',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#F78ACE'}
                    onMouseLeave={(e) => e.target.style.color = selectedService === key ? '#F78ACE' : '#fff'}
                  >
                    {service.title}
                  </p>
                ))}
              </div>
            </div>

            {/* Descripción del servicio seleccionado */}
            <div className="col-12 col-md-8">
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(247, 138, 206, 0.1)',
                borderRadius: '8px',
                minHeight: '300px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  color: '#F78ACE',
                  marginBottom: '20px'
                }}>
                  {services[selectedService].title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#fff'
                }}>
                  {services[selectedService].description}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="#contacto">
              <button className="custom-button-light" style={{ padding: '15px 27px', fontSize: '18px' }}>
                <span>CONTÁCTANOS</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Seccion Clientes - SIN CAMBIOS */}
      <section id='clientes' className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            letterSpacing: '2px',
            color: '#152139',
            textTransform: 'uppercase', 
            paddingBottom: '15px',
            borderBottom: '1px solid #152139',
            marginBottom: '25px' 
          }}>
            NUESTROS CLIENTES
          </h2>

          <div className="row g-4 g-md-5 align-items-center justify-content-center">
            
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Disney} alt='disney' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Hbo} alt='hbo' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Playa} alt='playa' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Resort} alt='resort' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Alto} alt='alto' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
            <div className="col-4 col-md-2 text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <img src={Cartoon} alt='cartoon' style={{maxHeight:"80px", maxWidth: "100%", objectFit: "contain"}}/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;