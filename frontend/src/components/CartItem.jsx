import React from "react";
import image from "../resources/images/5.jpg";
import { Link } from "react-router-dom";

const CartItem = ({ item, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src={process.env.PUBLIC_URL + `/resources/images/${item.foto}`} alt={item.nombre} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem-name">
        <p>{item.nombre}</p>
      </Link>
      <p className="cartitem-price">${item.precio}</p>

      <button className="cartitem-deletebtn" onClick={()=> removeHandler(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
