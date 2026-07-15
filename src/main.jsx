import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import App from "./App.jsx";
import SmoothScroll from "./provider/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
);
