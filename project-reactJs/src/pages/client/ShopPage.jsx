import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api-class-o1lo.onrender.com/api/example/products`
        );
        const { data } = await response.json();
        // console.log(data);

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      Danh sach san pham
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr" }}>
        {products &&
          products.map((item, index) => (
            <div key={index}>
              <img src={item.thumbnail} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <Link to={`/shop/${item._id}`}> Xem Chi Tiết </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
