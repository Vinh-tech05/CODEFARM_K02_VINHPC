import { useEffect, useState } from "react";
import { getProducts } from "../../../api/apiProducts";
import { Link } from "react-router-dom";

const ManagementProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getProducts();
      console.log(data);
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>
              <button>
                <Link to="/admin/products/add">ADD NEW</Link>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>DELETE</td>
              <Link to={`/admin/products/update/${item._id}`}>Update</Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagementProductPage;
