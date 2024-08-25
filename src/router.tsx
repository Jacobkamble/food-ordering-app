import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
