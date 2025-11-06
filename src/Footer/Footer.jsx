import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from "../Home/wildlogo.png"; // Asegúrate de que esta ruta sea correcta

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#152139',
      color: '#fff',
      padding: '40px 0 20px'
    }}>
      <style>{`
        .footer-icon {
          color: #fff;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-icon:hover {
          color: #F78ACE;
        }

        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .footer-link:hover {
          color: #F78ACE;
        }

        .footer-copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 30px;
          padding-top: 20px;
          text-align: center;
          font-size: 14px;
        }

        /* Alineación móvil/escritorio para redes */
        @media (max-width: 767.98px) {
          .social-media-section {
            text-align: center !important; /* Centrado en móviles */
          }
          .social-media-icons {
            justify-content: center !important; /* Centrar iconos en móviles */
          }
        }
      `}</style>

      <div className="container">
        {/* Usamos justify-content-between para empujar las secciones a los extremos */}
        {/* y alineamos los ítems al inicio para que el logo y el texto queden arriba */}
        <div className="row align-items-start justify-content-between">
          
          {/* Logo Section - Ocupa 12 columnas en móvil y 4 en desktop (ej: md) */}
          <div className="col-12 col-md-4 mb-4">
            <img src={Logo} alt="Wild Bird Logo" style={{ height: '40px', marginBottom: '20px' }} />
            <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9 }}>
              Transformamos su visión en resultados digitales.
            </p>
          </div>
          
          {/* Espacio intermedio (si solo hay 2 secciones y quieres que ocupen todo el ancho) */}
          {/* Si quieres que solo el logo y redes estén visibles y separados, solo necesitas 2 divs */}
          
          {/* Social Media Section - Ocupa 12 columnas en móvil y 4 en desktop (ej: md) */}
          {/* text-md-end alinea el texto y el h4 a la derecha en pantallas medianas y grandes */}
          <div className="col-12 col-md-4 mb-4 social-media-section text-md-end">
            <h4 style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '1.5px', marginBottom: '20px' }}>
              SEGUÍNOS
            </h4>
            {/* d-flex y justify-content-end para alinear los íconos a la derecha en desktop */}
            <div className="d-flex gap-4 social-media-icons justify-content-center justify-content-md-end">
              <a href="#facebook" aria-label="Facebook">
                <Facebook size={24} className="footer-icon" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <Instagram size={24} className="footer-icon" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <Linkedin size={24} className="footer-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © Wildbird Studio 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;