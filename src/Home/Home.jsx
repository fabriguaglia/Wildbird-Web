import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap'; 
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaInstagram,
  FaBrain,
  FaPencilRuler,
  FaLaptopCode,
  FaVideo,
  FaBullhorn,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';
import { GiLibertyWing } from 'react-icons/gi';
import Logo from './wildlogo.png';
import './Home.css';
import Inicio from '../Inicio/Inicio';
import Alto from './alto.png';
import Cartoon from './cartoon.jpg';
import Disney from './disney.png';
import Hbo from './hbo.jpg';
import Playa from './playa.png';
import Resort from './resort.png';
import Warner from './warner.png';
import soda from './soda.png';
import quillehue from './quillehue.png';

const Home = () => {

  // Objeto de servicios actualizado con íconos
  const services = {
    estrategia: {
      title: 'Estrategia',
      icon: FaBrain,
      description: 'Desarrollamos estrategias de posicionamiento e identidad de marca basadas en un análisis profundo y personalizado, que incluye el estudio de la competencia, la industria y el mercado. Ayudamos a tu marca a crecer con propósito y vuelo creativo'
    },
    branding: {
      title: 'Branding',
      icon: FaPencilRuler,
      description: 'Creamos marcas con identidad y coherencia. Desarrollamos identidad visual y conceptual de tu marca: naming, logo, identidad gráfica, tone of voice..'
    },
    web: {
      title: 'Web & E-commerce',
      icon: FaLaptopCode,
      description: 'Diseñamos y desarrollamos sitios web que reflejan la identidad de tu marca y tus objetivos de negocio. Ya sea una landing page, un sitio institucional o una tienda online, creamos experiencias digitales funcionales, estéticas y orientadas a la conversión.'
    },
    filmmaking: {
      title: 'Filmmaking & Content Creation',
      icon: FaVideo,
      description: 'Capturamos tu marca desde nuevas alturas. Realizamos producciones audiovisuales creativas con enfoque cinematográfico: filmaciones con drone, spots publicitarios, reels y contenido digital que transmiten la esencia de tu marca con impacto visual y calidad profesional.'
    },
    advertising: {
      title: 'Advertising',
      icon: FaBullhorn,
      description: 'Creamos e implementamos campañas de Paid Media en Meta Ads y Google Ads, potenciadas con inteligencia artificial para optimizar resultados. Estrategia, datos y creatividad se combinan para impulsar rendimiento, crecimiento y conversión.'
    },
    socialMedia: {
      title: 'Social Media & Influencer Marketing',
      icon: FaUsers,
      description: 'Creamos estrategias de contenido que conectan. Desde la planificación editorial, community management y diseño de piezas, hasta campañas con influencers y partnerships estratégicos para amplificar tu mensaje.'
    },
    produccion: {
      title: 'Producción & Eventos',
      icon: FaCalendarAlt,
      description: 'Ofrecemos un servicio integral que une: estrategia, creatividad y producción. Coordinamos eventos de gran escala o experiencias boutique, activaciones BTL e integración de marcas cuidando cada detalle del proceso.'
    }
  };
  
  // Estilo unificado para los títulos de sección
  const sectionTitleStyle = {
    fontSize: '32px', 
    fontWeight: '700', 
    letterSpacing: '3px',
    color: '#152139',
    textTransform: 'uppercase', 
    margin: '0',
    marginBottom: '50px', 
    textAlign: 'center',
  };

  // Array de logos de clientes para el carrusel
  const clientLogos = [
    { src: Disney, alt: 'Disney' },
    { src: Hbo, alt: 'HBO' },
    { src: Playa, alt: 'Playa' },
    { src: Resort, alt: 'Resort' },
    { src: Alto, alt: 'Alto' },
    { src: Cartoon, alt: 'Cartoon Network' },
    { src: Warner, alt: 'Warner Bros' },
    { src: soda, alt: 'Sodastream' },
    { src: quillehue, alt: 'Quillehue' },
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      color: '#152139',
      backgroundColor: '#fff'
    }}>
      
      {/* Header y Navigation */}
      <header className="py-3 border-bottom" style={{ borderColor: '#152139' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 d-flex gap-3 hide-mobile">
              <a href='https://www.facebook.com/share/1D5w2CnTD7/?mibextid=wwXIfr'><Facebook size={20} className="social-icon" /></a>
              <a href='/'><Instagram size={20} className="social-icon" /></a>
              <a href='/'><Linkedin size={20} className="social-icon" /></a>
            </div>
            <div className="col-12 col-md-8 text-center">
                <a href='/'>
                    <img src={Logo} alt="Wildbird Logo" style={{ height: '40px' }} />
                </a>
            </div>
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

      {/* Navegación Principal */}
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

      {/* About Section - TEXTO MÁS GRANDE */}
      <section id='nosotros' className="py-5 about-services-bg">
        <div className="container">
          <h2 style={{ 
            ...sectionTitleStyle, 
            color: '#152139', 
            borderBottom: '1px solid #152139', 
            paddingBottom: '15px' 
          }}>
            SOBRE WILDBIRD
          </h2>
          
          <div className="row">
            <div className="col-12">
              <p style={{ 
                lineHeight: '1.8', 
                fontSize: '18px', // Aumentado a 18px
                color: '#152139',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                En <strong>WildBird</strong> creemos que las marcas más poderosas son las que se animan a volar alto y desafían lo establecido.
                Somos una agencia de marketing integral que combina <strong>estrategia, creatividad y autenticidad</strong> para construir marcas con propósito.
                Ayudamos a empresas y emprendedores a <strong>crecer, conectar y diferenciarse</strong>, diseñando estrategias que integran: branding, comunicación y las últimas herramientas digitales y de AI para obtener resultados medibles
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

      {/* Services Section - Acordeón */}
      <section id='servicios' className="py-5" style={{ backgroundColor: '#152139' }}>
        <div className="container">
          
          <h2 style={{ 
            ...sectionTitleStyle, 
            color: '#fff', 
            borderBottom: '1px solid #fff', 
            paddingBottom: '15px' 
          }}>
            SERVICIOS
          </h2>

          <Accordion>
            {Object.entries(services).map(([key, service]) => (
              <Accordion.Item 
                eventKey={key} 
                key={key}
                className="service-accordion-item"
              >
                <Accordion.Button as="div" className="service-accordion-button">
                  <service.icon size={30} />
                  <h5>{service.title}</h5>
                </Accordion.Button>
                
                <Accordion.Body className="service-accordion-body">
                  <p>{service.description}</p>
                  <a href="#contacto">
                    <button className="custom-button-light">
                      <span>SOLICITAR SERVICIO</span>
                    </button>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          
        </div>
      </section>

      {/* Seccion Clientes - CARRUSEL */}
      <section id='clientes' className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          
          <h2 style={{ 
            ...sectionTitleStyle, 
            color: '#152139',
            borderBottom: '1px solid #152139',
            paddingBottom: '15px'
          }}>
            NUESTROS CLIENTES
          </h2>

          {/* Contenedor del Carrusel */}
          <div className="client-carousel-container">
            {/* Div que se anima */}
            <div className="client-carousel-scroller">
              {/* Primer set de logos */}
              {clientLogos.map((logo, index) => (
                <div className="client-logo-item" key={`logo-a-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
              {/* Segundo set de logos (duplicado para bucle) */}
              {clientLogos.map((logo, index) => (
                <div className="client-logo-item" key={`logo-b-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FIN DE SECCIÓN CLIENTES */}


      {/* Seccion Contacto */}
      <section id='contacto' className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-center mb-5">
            <GiLibertyWing 
              size={40} 
              style={{ 
                color: '#F78ACE', 
                marginRight: '20px',
                transform: 'scaleX(-1)'
              }} 
            />
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              letterSpacing: '3px',
              color: '#152139',
              textTransform: 'uppercase',
              margin: '0'
            }}>
              CONTACTO
            </h2>
            <GiLibertyWing 
              size={40} 
              style={{ 
                color: '#F78ACE', 
                marginLeft: '20px'
              }} 
            />
          </div>

          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#152139',
            marginBottom: '50px'
          }} />

          {/* Tarjetas de contacto */}
          <div className="row g-4 justify-content-center">
            {/* WhatsApp */}
            <div className="col-12 col-md-4">
              <a 
                href="https://wa.me/5491165692110" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(21, 33, 57, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,a-0,0.1)';
                }}
                >
                  <FaWhatsapp size={60} style={{ color: '#152139', marginBottom: '20px' }} />
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    color: '#152139',
                    marginBottom: '15px'
                  }}>
                    WhatsApp
                  </h3>
                  <p style={{
                    color: '#152139',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    +54 9 11 6569-2110
                  </p>
                </div>
              </a>
            </div>

            {/* Correo */}
            <div className="col-12 col-md-4">
              <a 
                href="mailto:luciahuergo.wildbird@gmail.com"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(21, 33, 57, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
                >
                  <FaEnvelope size={60} style={{ color: '#152139', marginBottom: '20px' }} />
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    color: '#152139',
                    marginBottom: '15px'
                  }}>
                    Correo
                  </h3>
                  <p style={{
                    color: '#152139',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    luciahuergo.wildbird@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Instagram */}
            <div className="col-12 col-md-4">
              <a 
                href="#contacto" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(21, 33, 57, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
                >
                  <FaInstagram size={60} style={{ color: '#152139', marginBottom: '20px' }} />
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    color: '#152139',
                    marginBottom: '15px'
                  }}>
                    Instagram
                  </h3>
                  <p style={{
                    color: '#152139',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    @
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Botón Ver Más */}
          <div className="text-center mt-5">
            <button className="custom-button mt-3">
                  <span>HABLEMOS</span>
                </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;