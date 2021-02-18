import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-card-container'>
        <div className="footer-card">
          <h4>Servicio al cliente</h4>
          <p>Contáctenos</p>
          <p>Cambios y devoluciones</p>
          <p>Políticas de la empresa</p>
          <p>Politicas de datos</p>
        </div>
        <div className="footer-card">
          <h4>Mi cuenta</h4>
          <p>Mis pedidos</p>
          <p>Mis devoluciones</p>
        </div>
        <div className="footer-card">
          <h4>Recursos</h4>
          <p>Tiendas</p>
          <p>Devoluciones</p>
        </div>
        <div className="footer-card">
          <h4>NewSletter</h4>
          <p>Regístrate para ser el primero en recibir nuestras noticias</p>
          <div className="input-search">
            <input type="text" className="search-input" placeholder="E-mail" />
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className='icon-footer-container'>
        <div className='icon-container'>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
        </div>
        <div className='icon-container'>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
        </div>
        <div className='last-icon-container'>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-diners-club"></i>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-diners-club"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-diners-club"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
