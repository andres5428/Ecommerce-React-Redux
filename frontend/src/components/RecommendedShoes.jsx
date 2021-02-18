import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

const RecommendedShoes = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="down-section">
      <h3 className="complete-look-title">Completa tu look</h3>
      <div className="complete-look-products-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products
            .slice(5, 9)
            .map((product) => (
              <Product
                addBoolean={true}
                key={product._id}
                productId={product._id}
                nombre={product.nombre}
                precio={product.precio}
                foto={product.foto}
              />
            ))
        )}
      </div>
      <h3 className="recommended-products-title">Productos recomendados</h3>
      <div className="recommended-products-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products
            .slice(1, 5)
            .map((product) => (
              <Product
                addBoolean={false}
                key={product._id}
                productId={product._id}
                nombre={product.nombre}
                precio={product.precio}
                foto={product.foto}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default RecommendedShoes;
