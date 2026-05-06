import React, { useEffect, useState } from "react";
import getProducts from "./services/productService";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      if (res) {
        setProducts(res.data.data.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Products</h2>

      <div className="grid">
        {products.map((product) => {
          const discountedPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(0);

          return (
            <div key={product.id} className="card">
              
              {/* Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="image"
              />

              <div className="content">
                {/* Title */}
                <div className="title">{product.title}</div>

                {/* Description */}
                <div className="desc">{product.description}</div>

                {/* Price */}
                <div>
                  <span className="price">₹{discountedPrice}</span>
                  <span className="oldPrice">₹{product.price}</span>
                </div>

                {/* Meta */}
                <div className="meta">
                  {product.brand} • {product.category}
                </div>

                {/* Rating */}
                <div className="rating">
                  ⭐ {product.rating} | Stock: {product.stock}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;