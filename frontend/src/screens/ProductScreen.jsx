import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
    history.push("/cart");
  };

  return (
    <div className="product-screen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="product-screen-division">
            <div className="product-left-side">
              <p className="product-path">
                Hushpuppies/Calzado/{product.nombre}
              </p>
              <div className="product-left-image-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/resources/images/${product.foto}`
                  }
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-image-gallery">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="product-right-side">
              <h2 className="product-title">{product.nombre}</h2>
              <h3 className="price-title">${product.precio}</h3>
              <p className="code-product">
                cod. de producto {product.referencia}
              </p>

              <div className="color-change-container">
                <p>COLOR</p>
                <div className="image-color-change-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/resources/images/${product.foto}`
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="shoe-size-container">
                <p>Talla</p>
                <div className="shoe-size">
                  <div>5</div>
                  <div>5.5</div>
                  <div>6</div>
                  <div>6.5</div>
                  <div>7</div>
                  <div>7.5</div>
                  <div>8</div>
                  <div>8.5</div>
                  <div>9</div>
                  <div>9.5</div>
                </div>
              </div>
              <div className="addtocart-parent">
                <p>Guia de tallas</p>
                <div className="addtocart-container">
                  <button className="addtocart" onClick={addToCartHandler}>
                    Añadir al carrito
                  </button>
                  <i className="fas fa-heart"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-container">
            <h3 className="product-detail-title">Detalles del producto</h3>
            <p className="product-detail-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              repellendus aliquid iste, eum nesciunt nostrum dolore, quidem quo
              culpa quisquam perspiciatis incidunt veritatis est consequatur ad
              itaque placeat iusto tempora!. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, saepe laudantium? Unde
              qui deserunt nobis delectus nesciunt. Doloribus officia tempore
              rem ab voluptatum suscipit molestiae iure laborum sequi, porro
              debitis?
            </p>
          </div>
          <div className="product-technology-container">
            <h3 className="product-technology-title">Tecnología</h3>
            <p className="product-technology-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              reprehenderit dolore laboriosam necessitatibus ipsa perspiciatis
              facilis porro ad, eligendi numquam doloribus deleniti excepturi in
              inventore autem dolorem sequi quod! Deserunt.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
