/**
 * Imports
 */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/images/12.jpg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const { cartItems } = cart;
  history.push("/cart");
  const getCartCount = () => {
    return cartItems.length;
  };
  return (
    <nav className="navbar" id="navbar">
      <div className="discount-banner">HOT SALE -30% EN SANDALIAS</div>
      <div className="spacer"></div>
      <div className="nav-logo-container">
        <div className="menu-banner">
          <ul>
            <li>
              <a href="/">Directorio de tiendas</a>
            </li>
            <li>
              <a href="/">Servicio al cliente</a>
            </li>
            <li>
              <a href="/">Mi cuenta</a>
            </li>
          </ul>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="input-search-container">
            <div className="input-search">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar"
              />
              <i className="fas fa-chevron-right"></i>
            </div>
            <p className="free-shipping-p">
              ENVÍOS GRATIS PARA PEDIDOS SUPERIORES A $300.000
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-bottom-container">
        <ul className="navbar-bottom-links">
          <li>
            <a href="/">HOMBRE</a>
          </li>
          <li>
            <a href="/">MUJER</a>
          </li>
          <li>
            <a href="/">BLOG</a>
          </li>
          <li>
            <a href="/">HISTORIA</a>
          </li>
          <li>
            <Link to="/store">TIENDAS</Link>
          </li>
        </ul>
        <div className="cart-container">
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Carrito
              <span className="cart-counter">{getCartCount()}</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
