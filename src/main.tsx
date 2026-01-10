import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento #root não encontrado");
}

createRoot(container).render(<App />);
