import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaPalette, FaCode, FaBook, FaBullhorn, FaEnvelope, FaHashtag } from 'react-icons/fa';
import Logo from './wildlogo.png';
import './Home.css';
import Inicio from '../Inicio/Inicio';

const Home = () => {
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
                    <span>CONTACTÁNOS</span>
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

      {/* About & Services Section */}
      <section id='about' className="py-5 about-services-bg">
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
              <h3 className="section-title">ESPECIALIDADES</h3>
              <p className="service-item d-block">WEB DESIGN</p>
              <p className="service-item d-block">BRAND DESIGN</p>
              <p className="service-item d-block">EDITORIAL DESIGN</p>
              <p className="service-item d-block">ADVERTISING</p>
              <p className="service-item d-block">EMAIL MKT</p>
              <a href="#contacto">
                <button className="custom-button mt-4">
                    <span>CONTACTÁNOS</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
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
            NUESTROS SERVICIOS
          </h2>

          <div className="row g-4">
            {/* Brand Design Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaPalette size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">BRAND DESIGN</h3>
                <p className="service-card-text-dark">
                  Creamos branding de alto impacto y logos adaptados a tus necesidades. Escuchamos tu visión y te brindamos asesoramiento experto para que termines con una identidad de marca de la que te sientas orgulloso, una que realmente represente tu negocio.
                </p>
              </div>
            </div>

            {/* Web Design Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaCode size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">WEB DESIGN & DEVELOP</h3>
                <p className="service-card-text-dark">
                  Diseñamos sitios web de primer nivel que generan resultados, ya sea aumentando ventas o capturando clientes potenciales. Nuestros sitios web están diseñados para captar la atención y guiar a tus clientes potenciales hacia la acción.
                </p>
              </div>
            </div>

            {/* Editorial Design Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaBook size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">EDITORIAL DESIGN</h3>
                <p className="service-card-text-dark">
                  Nuestro equipo ofrece diseños editoriales de alta calidad, flyers, señalética, packaging, presentaciones y más. Estamos listos para crear todos los activos visuales que tu marca o proyecto necesite.
                </p>
              </div>
            </div>

            {/* Advertising Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaBullhorn size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">ADVERTISING & MKT STRATEGY</h3>
                <p className="service-card-text-dark">
                  En el mundo digital de hoy, estar online es esencial para tu negocio. Nuestro trabajo experto en publicidad ayuda a que llegues a la audiencia correcta con el mensaje correcto, aumentando tus resultados en todas las plataformas.
                </p>
              </div>
            </div>

            {/* Email Marketing Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaEnvelope size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">EMAIL & SMS MARKETING</h3>
                <p className="service-card-text-dark">
                  La comunicación personalizada es clave para destacar. El email marketing sigue siendo una herramienta poderosa para construir relaciones entre tú y tus clientes potenciales. Nuestro equipo crea campañas estratégicas que entregan mensajes impactantes y personalizados.
                </p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card-dark">
                <div className="service-icon-dark">
                  <FaHashtag size={50} color='white'/>
                </div>
                <h3 className="service-card-title-dark">SOCIAL MEDIA</h3>
                <p className="service-card-text-dark">
                  Tu marca no puede permitirse ser invisible en redes sociales. Entendemos cómo las demandas del marketing pueden ser abrumadoras, por eso colaboramos contigo para crear contenido de alta calidad que conecte con tu audiencia.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="#contacto">
              <button className="custom-button-light" style={{ padding: '15px 27px', fontSize: '18px' }}>
                <span>CONTACTÁNOS</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Seccion Clientes */}
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
          
          <p style={{ 
            lineHeight: '1.7', 
            fontSize: '15px', 
            color: '#152139', 
            marginBottom: '50px' 
          }}>
            Más que clientes, son nuestros socios estratégicos. Nos enorgullece haber impulsado el crecimiento de empresas locales e internacionales, adaptando nuestra visión y creatividad a sus desafíos únicos. Su éxito es nuestra mejor carta de presentación.
          </p>

          <div className="row g-4 g-md-5 align-items-center justify-content-start">
            
            {/* Reemplaza estos placeholders por tus <img> */}
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <span style={{color: '#888', fontSize: '12px'}}>[LOGO]</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;