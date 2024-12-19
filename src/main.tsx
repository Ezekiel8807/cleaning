import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//app views
import App from "./views/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
