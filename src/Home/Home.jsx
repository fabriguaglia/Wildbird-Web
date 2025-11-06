import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaPalette, FaCode, FaBook, FaBullhorn, FaEnvelope, FaHashtag } from 'react-icons/fa';
import Logo from './wildlogo.png';
import W from './W.jpeg';
import { gsap } from 'gsap'; 

// --- Tus importaciones de logos de clientes irían aquí ---
// Ejemplo:
// import TrekantsLogo from './logos/trekants.png';
// import DurexLogo from './logos/durex.png';
// ...etc.

// Lista de palabras y sus colores (usando tus tonos)
const WORDS = [
  { text: 'VISIÓN', color: '#152139' },
  { text: 'IMAGINACIÓN', color: '#F78ACE' },
  { text: 'ESTRATEGIA', color: '#152139' },
  { text: 'CREATIVIDAD', color: '#F78ACE' },
];

// --- FUNCIONALIDAD: Animación Letra por Letra (Drop-in) ---

const Home = () => {
  // 1. Estados para manejar la palabra actual y su índice
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = WORDS[currentWordIndex];
  
  // 2. Referencia para el contenedor de las LETRAS que GSAP va a animar
  const letterContainerRef = useRef(null);

  // 3. Lógica de Rotación y Animación con GSAP
  useEffect(() => {
    
    // Función para manejar la animación de salida (todas las letras salen rápido y juntas)
    const animateOut = () => {
      // Seleccionar todas las letras dentro del contenedor
      const letterElements = letterContainerRef.current ? letterContainerRef.current.children : [];
      
      // Solo animar si hay letras para animar
      if (letterElements.length > 0) {
        return gsap.to(letterElements, {
          duration: 0.2, 
          opacity: 0,
          y: 10, 
          ease: "power1.in",
          stagger: 0.03, 
          onComplete: () => {
            // Cambiar el contenido (palabra) después de que la animación termine
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
          }
        });
      } else {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
          return null; 
      }
    };

    // Configurar el intervalo para la rotación 
    const totalDuration = 3000; 
    const intervalId = setInterval(() => {
        animateOut(); 
    }, totalDuration);

    // Función de limpieza para detener el intervalo
    return () => clearInterval(intervalId);

  }, []); 

  // 4. Se ejecuta cada vez que el índice de la palabra cambia para animar la entrada
  useEffect(() => {
    if (letterContainerRef.current) {
        const newLetterElements = letterContainerRef.current.children;

        gsap.fromTo(newLetterElements, 
            // Estado inicial (comienza invisible y arriba)
            { opacity: 0, y: -30, rotationX: 90 },
            // Estado final (visible y en posición)
            { 
              duration: 0.6, 
              opacity: 1, 
              y: 0, 
              rotationX: 0,
              ease: "back.out(1.7)", 
              stagger: 0.07 
            }
        );
    }
  }, [currentWordIndex, currentWord.text]); 


  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      color: '#152139',
      backgroundColor: '#fff'
    }}>
      <style>{`
        /* --- Estilos Existentes --- */
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
          font-size: 14px; /* Estilo de Escritorio */
          padding: 8px 15px; /* Estilo de Escritorio */
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

        .about-services-bg {
          background-image: url('./blush rosa.png'); 
          background-size: cover; 
          background-position: center center;
          background-repeat: no-repeat; 
          color: #152139;
        }

        /* --- Estilo del Título para la Animación --- */
        .hero-title {
          /* AUMENTO DE TAMAÑO: Hacemos el texto más grande en escritorio */
          font-size: 52px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 30px;
          color: #152139; 
        }
        
        /* Contenedor para la línea de la palabra cambiante (Escritorio) */
        .rotating-word-container {
            display: inline-block;
            overflow: hidden; 
            position: relative;
            line-height: 1.2; 
            /* AJUSTE DE ANCHO Y ALTURA para el nuevo font-size */
            min-width: 420px; 
            height: 62px; 
            vertical-align: top; 
            /* MARGEN AUMENTADO para más espacio con "SU" */
            margin-left: 10px; 
        }
        
        /* Contenedor que mantiene "SU" y la palabra animada en la misma línea */
        .inline-title-part {
            display: inline-flex;
            align-items: flex-start; 
        }

        .letter-container {
            display: flex; 
            white-space: nowrap; 
            position: absolute; 
            top: 0;
            left: 0;
            align-items: center; 
            height: 100%; 
        }

        .letter {
            display: inline-block; 
            font-weight: 900; 
            transform-origin: bottom center; 
        }

        /* Service Cards Styles */
        .service-card-dark {
          height: 100%;
          padding: 30px 25px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .service-card-dark:hover {
          transform: translateY(-5px);
        }

        .service-icon-dark {
          color: #F78ACE;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .service-card-dark:hover .service-icon-dark {
          transform: scale(1.1);
        }

        .service-card-title-dark {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #F78ACE;
          margin-bottom: 15px;
        }

        .service-card-text-dark {
          font-size: 14px;
          line-height: 1.7;
          color: #fff;
        }

        .custom-button-light {
          display: inline-block;
          border: none;
          padding: 12px 28px;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1.5px;
          font-size: 17px;
          position: relative;
          background: transparent;
        }

        .custom-button-light::before {
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

        .custom-button-light span {
          position: relative;
          z-index: 2;
        }

        /* Ajuste para acercar texto al centro solo en desktop */
        @media (min-width: 768px) {
          .hero-text-col {
            padding-left: 60px;
          }
        }

        /* --- Estilos Específicos para Móviles (<768px) --- */
        @media (max-width: 767.98px) {
          .hide-mobile {
            display: none !important;
          }

          /* 🛑 AJUSTE DE NAVEGACIÓN EN MÓVIL */
          .nav-link-custom {
            font-size: 12px !important; /* Reducción de fuente */
            padding: 8px 8px !important; /* Reducción de padding horizontal */
          }

          .hero-text-col {
            text-align: left !important;
          }

          .hero-title {
            /* TAMAÑO AJUSTADO para caber en col-7 */
            font-size: 18px !important; 
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }
          
          .rotating-word-container {
            /* ANCHO AJUSTADO para el nuevo font-size */
            min-width: 140px; 
            height: 22px; 
            margin-left: 5px; 
          }

          .hero-section {
            /* ELIMINACIÓN DE PADDING LATERAL EN MÓVIL */
            padding: 20px 0 !important;
          }

          /* CONTENEDOR DE BOOTSTRAP: Elimina padding dentro del contenedor de la imagen */
          .hero-image-col {
              padding-right: 0 !important;
          }
          
          .custom-button {
             padding: 8px 15px;
             font-size: 14px;
             letter-spacing: 1px;
             margin-left: 15px; /* Compensa el padding eliminado de la sección */
          }
          
          .custom-button::before {
            width: calc(100% - 30px);
          }
          
          /* AJUSTE DE IMAGEN EN MÓVIL: Aumento de tamaño */
          .hero-image-mobile img {
            max-height: 180px !important; 
            max-width: 100% !important; 
          }

          /* Compensa el padding eliminado de la sección para el texto */
          .hero-text-col {
            padding-left: 15px !important;
          }

          /* --- NUEVO ESTILO PARA LOGOS DE CLIENTES --- */
          .client-logo {
            max-width: 100%;
            height: auto;
            max-height: 45px; /* Ajusta la altura máxima de los logos */
            filter: grayscale(100%);
            opacity: 0.7;
            transition: all 0.3s ease;
          }
          .client-logo:hover {
            filter: grayscale(0%);
            opacity: 1;
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
                <a href='/'>
                    <img src={Logo} alt="Wildbird Logo" style={{ height: '40px' }} />
                </a>
            </div>
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

      {/* Navegación Principal (Ajustada en Móvil) */}
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

      {/* Hero Section */}
      <section className="py-5 hero-section px-0 px-md-3"> 
        <div className="container">
          {/* gx-0 elimina completamente el espacio entre columnas */}
          <div className="row align-items-center gx-0">
            
            {/* Texto del hero sin padding extra */}
            <div className="col-7 col-md-6 hero-text-col"> 
              <h2 className="hero-title">
                TRANSFORMAMOS<br />
                <span className="inline-title-part">
                    SU <span className="rotating-word-container">
                        <div 
                        ref={letterContainerRef} 
                        className="letter-container"
                        style={{ color: currentWord.color }}
                        >
                            {currentWord.text.split('').map((letter, index) => (
                                <span key={index} className="letter">
                                    {letter === ' ' ? '\u00A0' : letter}
                                </span>
                            ))}
                        </div>
                    </span>
                </span><br />
                EN RESULTADOS DIGITALES.
              </h2>
              <a href="#nosotros">
                <button className="custom-button">
                    <span>CONOCÉNOS</span>
                </button></a>
            </div>
            
            {/* Imagen sin padding extra */}
            <div className="col-5 col-md-6 text-center hero-image-mobile hero-image-col">
              <img 
                src={W} 
                alt="Wildbird W" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto', 
                  maxHeight: '400px'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Text Line */}
      <div className="animated-text-line">
        <div className="animated-text-content">
            DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; DISEÑO GRÁFICO DE ALTA CALIDAD &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; MARKETING QUE FUNCIONA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; IMPULSANDO LA CREATIVIDAD, DOMINANDO LA ESTRATEGIA &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; 
        </div>
      </div>

      {/* About & Services Section */}
      <section id='nosotros' className="py-5 about-services-bg">
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
          
          {/* --- TÍTULO MODIFICADO --- */}
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '600', 
            color: '#fff',
            letterSpacing: '2px',
            textTransform: 'uppercase', // Para consistencia
            // --- LÍNEAS AGREGADAS ---
            paddingBottom: '15px',
            borderBottom: '1px solid #fff', // La línea blanca
            marginBottom: '30px' // Mantenemos tu margen original
          }}>
            NUESTROS SERVICIOS
          </h2>
          {/* --- FIN TÍTULO MODIFICADO --- */}

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

      {/* ============================================================
      --- INICIA SECCIÓN CLIENTES (AGREGADA) ---
      ============================================================
      */}
      <section id='clientes' className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          
          {/* Título y línea (como en tu imagen) */}
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            letterSpacing: '2px',
            color: '#152139',
            textTransform: 'uppercase', // Para que coincida con "NUESTROS CLIENTES"
            paddingBottom: '15px',
            borderBottom: '1px solid #152139',
            marginBottom: '25px' // Espacio antes del párrafo
          }}>
            NUESTROS CLIENTES
          </h2>
          
          {/* Párrafo (de tu imagen) - Reemplaza el "bla bla" con tu texto */}
          <p style={{ 
            lineHeight: '1.7', 
            fontSize: '15px', 
            color: '#152139', 
            marginBottom: '50px' // Más espacio antes de los logos
          }}>
            Más que clientes, son nuestros socios estratégicos. Nos enorgullece haber impulsado el crecimiento de empresas locales e internacionales, adaptando nuestra visión y creatividad a sus desafíos únicos. Su éxito es nuestra mejor carta de presentación.
          </p>

          {/* Fila de Logos (usando Bootstrap grid)
            NOTA: Deberás importar tus logos y reemplazar los `<div>` de placeholder.
            Ejemplo de cómo usar una imagen:
            <div className="col-6 col-sm-4 col-md-2 text-center mb-4">
              <img src={TrekantsLogo} alt="Trekants" className="client-logo" />
            </div>
          */}
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
      {/* --- FIN SECCIÓN CLIENTES --- */}

    </div>
  );
};

export default Home;