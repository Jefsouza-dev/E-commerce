import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Toaster } from "react-hot-toast";
import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </CartProvider>
  </React.StrictMode>
);
