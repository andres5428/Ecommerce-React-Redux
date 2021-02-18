import React from "react";
import CartItem from "../components/CartItem";

// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // const getCartCount = () =>{
  //   return cartItems.reduce((item) => )
  // }
  const getCartSubtotal = () => {
    return cartItems.reduce((precio, item) => item.precio + precio, 0);
  };
  return (
    <div className="cart-screen" id='cart-screen'>
      <div className="cartscreen-left">
        <h2>Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <div>
            Tu carrito de compras está vacío... 
            <Link to="/">seguir comprando</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              item={item}
              removeHandler={removeHandler}
              key={item.product}
            />
          ))
        )}
      </div>
      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>Subtotal {/*getCartCount()*/} a pagar</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceder al pago</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
