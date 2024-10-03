import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import "./index.css";
import ServicesSection from "./ServicesSection";

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Only create the root if the element exists
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <ServicesSection />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
