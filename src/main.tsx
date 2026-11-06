import React from "react";
import ReactDOM from "react-dom/client";
import { TrailMap } from "./components/ui/TrailMap";
import "./styles.css"; // <-- Esta linha diz ao Vite para compilar o Tailwind

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TrailMap />
    </React.StrictMode>
  );
}