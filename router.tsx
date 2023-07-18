import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/home";
import Cart from "./src/pages/cart";
import Details from "./src/pages/details";

import Layout from "./src/components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carrinho",
        element: <Cart />,
      },
      {
        path: "/produto/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
