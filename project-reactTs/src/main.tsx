import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { ProductContextProvider } from "./context/productsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <StrictMode>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </StrictMode>
  </AuthContextProvider>
);
