import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App";

import GlobalStyle from "./components/GlobalStyle/GlobalStyle.styled";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
