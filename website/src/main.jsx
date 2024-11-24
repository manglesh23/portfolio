import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
// import * as ReactDOM from 'react-dom/client'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
