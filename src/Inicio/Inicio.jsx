import React, { useEffect, useRef } from 'react';
import Logo from "./W.png";

const Inicio = () => {
  const wordRefDesktop = useRef(null);
  const wordRefMobile = useRef(null);

  useEffect(() => {
    // Cargar fuente Montserrat
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Importar GSAP (Aseguramos el protocolo HTTPS y revisamos la URL)
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    // **NOTA:** Es más seguro incluir librerías como GSAP mediante npm/yarn si es posible. 
    // Mantenemos el enfoque dinámico para evitar cambios mayores.
    document.head.appendChild(script);

    script.onload = () => {
      const gsap = window.gsap;
      
      // Manejo de errores: Si gsap sigue siendo undefined después de onload,
      // algo en el entorno de carga está bloqueando el script.
      if (!gsap) {
          console.error("GSAP no se ha cargado correctamente. Verifica la URL o el entorno de red.");
          return;
      }
      
      const words = [
        { text: 'CREATIVA', color: '#152139' },
        { text: 'AUDAZ', color: '#F78ACE' },
        { text: 'INNOVADORA', color: '#152139' },
        { text: 'GENUINA', color: '#F78ACE' },
      ];
      
      let currentIndex = 0;

      let ctx = gsap.context(() => {
        
        const animateWord = () => {
          const word = words[currentIndex];
          const wordElementDesktop = wordRefDesktop.current;
          const wordElementMobile = wordRefMobile.current;
          
          [wordElementDesktop, wordElementMobile].forEach(wordElement => {
            if (!wordElement) return;

            wordElement.innerHTML = '';
            wordElement.style.color = word.color;

            const letters = word.text.split('').map((letter, i) => {
              const span = document.createElement('span');
              span.textContent = letter;
              span.style.opacity = '0';
              span.style.display = 'inline-block';
              wordElement.appendChild(span);
              return span;
            });

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
        
      }, [wordRefDesktop, wordRefMobile]);
      
      return () => {
        // Limpieza de GSAP
        ctx.revert();
        // Limpieza de tags dinámicos
        document.head.removeChild(link);
        document.head.removeChild(script);
      };
    };

    // La limpieza de los tags debe estar al final
    return () => {
      // El script y el link se remueven en el onload si se carga exitosamente 
      // o aquí si el componente se desmonta antes de la carga.
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Montserrat, sans-serif',
      padding: '40px 20px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* ========================================
        DESKTOP LAYOUT (4 LÍNEAS)
        ========================================
      */}
      <div className="desktop-layout" style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px', 
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
            {/* LÍNEA 1: REBELDÍA */}
            <div className="text-line">REBELDÍA</div>
            
            {/* LÍNEA 2: PALABRA CAMBIANTE */}
            <div className="text-line">
              <span 
                ref={wordRefDesktop}
                style={{ 
                  display: 'inline-block',
                  minHeight: '1.2em', // Altura fija para evitar movimiento vertical
                  whiteSpace: 'nowrap' 
                }}
              >
                {/* Palabra animada */}
              </span>
            </div>
            
            {/* LÍNEA 3: PARA MARCAS */}
            <div className="text-line">PARA MARCAS</div>
            
            {/* LÍNEA 4: QUE VUELAN ALTO */}
            <div className="text-line">QUE VUELAN ALTO</div>
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
          textAlign: 'center',
          position: 'relative',
          marginTop: '-30px', 
        }}>
          <img 
            src={Logo}
            alt="Wildbird Logo" 
            style={{ 
              maxWidth: '100%',
              width: '450px',
              height: 'auto'
            }}
          />
        </div>
      </div>

      {/* ========================================
        MOBILE LAYOUT (3 LÍNEAS)
        ========================================
      */}
      <div className="mobile-layout">
        {/* Logo primero - Mobile */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '15px'
        }}>
          <img 
            src={Logo}
            alt="Wildbird Logo" 
            className="logo-mobile"
            style={{ 
              maxWidth: '100%',
              width: '280px',
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
            {/* LÍNEA 1: REBELDÍA + PALABRA CAMBIANTE */}
            <div className="text-line">
              REBELDÍA{' '}
              <span 
                ref={wordRefMobile}
                style={{ 
                  display: 'inline-block',
                  // Min-width para asegurar el espacio de la palabra más larga y evitar el movimiento lateral
                  minWidth: '130px', 
                  whiteSpace: 'nowrap',
                  textAlign: 'left',
                }}
              >
                {/* Palabra animada (Solución al error: Ahora se inyecta correctamente) */}
              </span>
            </div>
            
            {/* LÍNEA 2: PARA MARCAS */}
            <div className="text-line">PARA MARCAS</div>
            
            {/* LÍNEA 3: QUE VUELAN ALTO */}
            <div className="text-line">QUE VUELAN ALTO</div>
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
        /* Clase para forzar cada frase a una nueva línea */
        .main-heading .text-line, .main-heading-mobile .text-line {
            display: block;
        }

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
          
          /* Forzar el centrado del texto en el h1 del móvil */
          .main-heading-mobile .text-line {
              text-align: center;
          }
        }
        
        /* ... (Tu CSS de botón y estilos generales) ... */
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