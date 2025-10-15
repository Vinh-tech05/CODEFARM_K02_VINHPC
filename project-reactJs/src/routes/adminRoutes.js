import LayoutAdmin from "../layouts/LayoutAdmin";
import ManagementProductPage from "../pages/admin/products/ManagementProductPage";
import ProductForm from "../pages/admin/products/ProductForm";

const adminRoutes = [
  {
    path: "admin",
    Component: LayoutAdmin,
    children: [
      { path: "products", Component: ManagementProductPage },
      { path: "products/add", Component: ProductForm },
      { path: "products/add/:id", Component: ProductForm },
    ],
  },
];

{
  /* <LayoutClient>
    <HomePage />
</LayoutClient> */
}
export default adminRoutes;
