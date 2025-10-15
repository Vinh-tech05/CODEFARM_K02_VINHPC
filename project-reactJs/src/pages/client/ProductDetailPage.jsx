import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  // useParams
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://api-class-o1lo.onrender.com/api/example/products/${id}`
      );
      const { data } = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <img src={product?.thumbnail} alt="" />
      <h3>{product?.title}</h3>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductDetailPage;
