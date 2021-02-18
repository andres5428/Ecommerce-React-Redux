import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Product = ({
  addBoolean,
  nombre,
  precio,
  productId,
  foto,
  referencia,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    history.push("/cart");
  };

  return (
    <div className="product">
      <Link to={`/product/${productId}`}>
        <img
          src={process.env.PUBLIC_URL + `/resources/images/${foto}`}
          alt="Product"
        />
      </Link>
      <div className="product-info">
        <div className="image-gallery">
          <img
            src={process.env.PUBLIC_URL + `/resources/images/${foto}`}
            alt={nombre}
          />
          <img
            src={process.env.PUBLIC_URL + `/resources/images/${foto}`}
            alt={nombre}
          />
        </div>
        <p className="shoe-name">{nombre}</p>
        <p className="shoe-price">${precio}</p>
        {addBoolean ? (
          <button className="shoe-addto-cart" onClick={addToCartHandler}>
            <a href="#cart-screen">Agregar al carrito</a>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Product;
