import LayoutAdmin from "../layouts/LayoutAdmin";
import CategoryForm from "../pages/CategoryForm";
import CategoryList from "../pages/CategoryList";
import ProductForm from "../pages/ProductForm";
import ProductList from "../pages/ProductList";
import ProtectedRoute from "./ProtectedRoute";

const adminRoute = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      { path: "product", Component: ProductList },
      { path: "product/create", Component: ProductForm },
      { path: "product/edit/:id", Component: ProductForm },

      { path: "category", Component: CategoryList },
      { path: "category/create", Component: CategoryForm },
      { path: "category/edit/:id", Component: CategoryForm },
    ],
  },
];
export default adminRoute;
