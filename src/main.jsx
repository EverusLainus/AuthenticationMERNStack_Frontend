import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </BrowserRouter>
);
