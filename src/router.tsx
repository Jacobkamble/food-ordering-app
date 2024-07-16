import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
