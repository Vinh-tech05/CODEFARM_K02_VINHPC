import LayoutClient from "../layouts/LayoutClient";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";

const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { index: true, Component: HomePage },
      { path: "shop", Component: ShopPage },
      // Dynamic route
      { path: "shop/:id", Component: ProductDetailPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
];

{
  /* <LayoutClient>
    <HomePage />
</LayoutClient> */
}
export default clientRoutes;
screenX;
