import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from "../HandleAPI/api";

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000); // Example API call
      const productData = data.find((p) => p.id === id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return <div>
  <img src={product.image} alt={product.name} />
  <h1>{product.name}</h1>
  <p>Company: {product.company}</p>
  <p>Category: {product.category}</p>
  <p>Price: ${product.price}</p>
  <p>Rating: {product.rating}</p>
  <p>Discount: {product.discount}%</p>
  <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
</div>
};

export default ProductDetail;
