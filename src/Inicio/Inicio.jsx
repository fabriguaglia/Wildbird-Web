import React, { useEffect, useRef } from 'react';
import Logo from "./W.png";

const Inicio = () => {
  const wordRefDesktop = useRef(null);
  const wordRefMobile = useRef(null);
  // Eliminado: const animationRef = useRef(null);

  useEffect(() => {
    // Cargar fuente Montserrat
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Importar GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;
      
      const words = [
        { text: 'CREATIVA', color: '#152139' },
        { text: 'ATREVIDA', color: '#F78ACE' }
      ];
      
      let currentIndex = 0;

      // 🌟 Usar gsap.context() para gestionar la limpieza de animaciones
      let ctx = gsap.context(() => {
        
        const animateWord = () => {
          const word = words[currentIndex];
          const wordElementDesktop = wordRefDesktop.current;
          const wordElementMobile = wordRefMobile.current;
          
          // Animar ambos elementos (desktop y mobile)
          [wordElementDesktop, wordElementMobile].forEach(wordElement => {
            if (!wordElement) return;

            // Limpiar contenido
            wordElement.innerHTML = '';
            wordElement.style.color = word.color;

            // Crear spans para cada letra
            const letters = word.text.split('').map((letter, i) => {
              const span = document.createElement('span');
              span.textContent = letter;
              span.style.opacity = '0';
              span.style.display = 'inline-block';
              wordElement.appendChild(span);
              return span;
            });

            // Animar letras
            gsap.fromTo(
              letters,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.1,
                stagger: 0.05,
                ease: 'power2.out'
              }
            );
          });

          // Programar salida y siguiente palabra
          gsap.delayedCall(2, () => {
            [wordElementDesktop, wordElementMobile].forEach(wordElement => {
              if (!wordElement) return;
              const letters = Array.from(wordElement.children);
              gsap.to(letters, {
                opacity: 0,
                y: -20,
                duration: 0.1,
                stagger: 0.03,
                ease: 'power2.in'
              });
            });
            
            gsap.delayedCall(0.5, () => {
              currentIndex = (currentIndex + 1) % words.length;
              animateWord();
            });
          });
        };

        animateWord();
        
      }, [wordRefDesktop, wordRefMobile]); // El contexto se aplica a estos refs
      
      // La función de limpieza revierte el contexto de GSAP
      return () => ctx.revert();
    };

    document.head.appendChild(script);

    return () => {
      // Eliminado el código que hacía referencia a animationRef
      // Mantenemos la limpieza para los tags de <link> y <script> si es necesario
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Montserrat, sans-serif',
      padding: '40px 20px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Desktop Layout */}
      <div className="desktop-layout" style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Texto a la izquierda - Desktop */}
        <div 
          className="text-container-desktop"
          style={{ 
            flex: '1 1 auto',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'left'
          }}
        >
          <h1 
            className="main-heading"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#152139',
              letterSpacing: '0.02em',
              margin: '0 0 30px 0'
            }}
          >
            REBELDÍA{' '}
            <span 
              ref={wordRefDesktop}
              style={{ 
                display: 'inline-block',
                color: '#152139',
                whiteSpace: 'nowrap'
              }}
            >
              CREATIVA
            </span>
            {' '}PARA MARCAS QUE VUELAN ALTO
          </h1>
          
          <div style={{ textAlign: 'left' }}>
            <a href='#nosotros'>
              <button className="custom-hero-button">
                <span>HABLEMOS</span>
              </button>
            </a>
          </div>
        </div>

        {/* Logo a la derecha - Desktop */}
        <div className="logo-desktop" style={{ 
          flex: '0 1 auto',
          textAlign: 'center'
        }}>
          <img 
            src={Logo}
            alt="Wildbird Logo" 
            style={{ 
              maxWidth: '100%',
              width: '350px',
              height: 'auto'
            }}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        {/* Logo primero - Mobile */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <img 
            src={Logo}
            alt="Wildbird Logo" 
            className="logo-mobile"
            style={{ 
              maxWidth: '100%',
              width: '200px',
              height: 'auto'
            }}
          />
        </div>

        {/* Texto después, centrado - Mobile */}
        <div style={{ 
          textAlign: 'center'
        }}>
          <h1 
            className="main-heading-mobile"
            style={{ 
              fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
              fontWeight: '800',
              lineHeight: '1.3',
              color: '#152139',
              letterSpacing: '0.02em',
              margin: '0 0 25px 0'
            }}
          >
            REBELDÍA{' '}
            <span 
              ref={wordRefMobile}
              style={{ 
                display: 'inline-block',
                color: '#152139',
                whiteSpace: 'nowrap'
              }}
            >
              CREATIVA
            </span>
            {' '}PARA MARCAS QUE VUELAN ALTO
          </h1>
          
          <div>
            <a href='#nosotros'>
              <button className="custom-hero-button">
                <span>HABLEMOS</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop: Mostrar layout desktop, ocultar mobile */
        .desktop-layout {
          display: flex !important;
        }
        
        .mobile-layout {
          display: none !important;
        }
        
        /* Mobile: Mostrar layout mobile, ocultar desktop */
        @media (max-width: 991px) {
          .desktop-layout {
            display: none !important;
          }
          
          .mobile-layout {
            display: block !important;
          }
        }
        
        .custom-hero-button {
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
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
        }
        
        .custom-hero-button::before {
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
        
        .custom-hero-button span {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Inicio;