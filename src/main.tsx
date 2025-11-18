import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import RouterConfig from "./RouterConfig.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <RouterConfig/>
    </StrictMode>
    ,
  </BrowserRouter>
);
