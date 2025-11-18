import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RouterConfig from "./RouterConfig.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/KamKetPaper/">
    <StrictMode>
      <RouterConfig/>
    </StrictMode>
  </BrowserRouter>
);
