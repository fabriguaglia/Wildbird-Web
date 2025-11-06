import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './wildlogo.png';
import W from './W.jpeg';
// 🛑 Importar GSAP para animaciones fluidas
import { gsap } from 'gsap'; 

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

        .about-services-bg {
          background-image: url('./blush rosa.png'); 
          background-size: cover; 
          background-position: center center;
          background-repeat: no-repeat; 
          color: #152139;
        }

        /* --- Estilo del Título para la Animación --- */
        .hero-title {
          font-size: 42px;
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
            min-width: 350px; 
            height: 51px; 
            vertical-align: top; 
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

        /* --- Estilos Específicos para Móviles (<768px) --- */
        @media (max-width: 767.98px) {
          .hide-mobile {
            display: none !important;
          }

          .hero-text-col {
            text-align: left !important;
          }

          .hero-title {
            /* 🛑 AJUSTE DE TAMAÑO: Reducido para caber en la columna más pequeña */
            font-size: 16px !important; 
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }
          
          .rotating-word-container {
            /* 🛑 AJUSTE DE ANCHO: Reducido para caber en la columna más pequeña */
            min-width: 130px; 
            height: 19px; /* Ajuste de altura por el cambio de fuente */
            margin-left: 5px; 
          }

          .hero-section {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          
          .custom-button {
             padding: 8px 15px;
             font-size: 14px;
             letter-spacing: 1px;
          }
          
          .custom-button::before {
            width: calc(100% - 30px);
          }
          
          /* 🛑 AJUSTE DE IMAGEN EN MÓVIL: Hace la imagen más pequeña para caber en col-4 */
          .hero-image-mobile img {
            max-height: 120px !important; 
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
            
            {/* 🛑 Columna de Texto: col-8 en móvil (para dejar espacio a la imagen) y col-md-6 en escritorio */}
            <div className="col-8 col-md-6 hero-text-col"> 
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
            
            {/* 🛑 Columna de Imagen: col-4 en móvil y col-md-6 en escritorio */}
            <div className="col-4 col-md-6 text-center hero-image-mobile">
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
            <div id='servicios' className="col-12 col-md-6">
              <h3 className="section-title">NUESTROS SERVICIOS</h3>
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
    </div>
  );
};

export default Home;