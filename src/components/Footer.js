import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          &copy; {new Date().getFullYear()} Mi E-Commerce. Todos los derechos
          reservados.
        </p>
        <ul className="footer__links">
          <li>
            <a href="/privacy" className="footer__link">
              Política de Privacidad
            </a>
          </li>
          <li>
            <a href="/terms" className="footer__link">
              Términos de Servicio
            </a>
          </li>
          <li>
            <a href="/contact" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
