import React, { useState, useEffect } from "react";
import Product from "./Product.js";
// import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import { runInAction } from "mobx";

const Products = ({ store }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    runInAction(() => store.getProducts())
      .then((prod) => setProducts(prod))
      .then(() => setLoading(false));
  }, [store]);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} details={product} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Products;
