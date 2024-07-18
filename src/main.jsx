import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
