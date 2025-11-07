import React, { useEffect, useRef } from 'react';
import Logo from "./W.jpeg";

const Inicio = () => {
  const wordRef = useRef(null);
  const animationRef = useRef(null);

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

      const animateWord = () => {
        const word = words[currentIndex];
        const wordElement = wordRef.current;
        
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
        const animation = gsap.fromTo(
          letters,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.05,
            ease: 'power2.out',
            onComplete: () => {
              // Esperar antes de cambiar palabra
              gsap.to(letters, {
                opacity: 0,
                y: -20,
                duration: 0.1,
                stagger: 0.03,
                delay: 2,
                ease: 'power2.in',
                onComplete: () => {
                  currentIndex = (currentIndex + 1) % words.length;
                  animateWord();
                }
              });
            }
          }
        );
        
        animationRef.current = animation;
      };

      animateWord();
    };

    document.head.appendChild(script);

    return () => {
      const currentAnimation = animationRef.current;
      if (currentAnimation) {
        currentAnimation.kill();
      }
    };
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Montserrat, sans-serif',
      padding: '40px 20px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        {/* Logo */}
        <div style={{ 
          flex: '0 1 auto',
          textAlign: 'center'
        }}>
          <img 
            src={Logo}
            alt="Wildbird Logo" 
            style={{ 
              maxWidth: '100%',
              width: '250px',
              height: 'auto'
            }}
          />
        </div>

        {/* Texto */}
        <div 
          className="text-container"
          style={{ 
            flex: '1 1 auto',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'right'
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
              ref={wordRef}
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
          
          <div className="button-container" style={{ textAlign: 'right' }}>
            <button className="custom-hero-button">
              <span>HABLEMOS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Versión móvil */}
      <style>{`
        @media (max-width: 991px) {
          .text-container {
            text-align: center !important;
          }
          .main-heading {
            text-align: center !important;
          }
          .button-container {
            text-align: center !important;
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