import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import "./index.css";
import ServicesSection from "./ServicesSection";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ServicesSection />
  </React.StrictMode>
);
