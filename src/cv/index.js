import React from "react";
import "./assets/normalize.css";
import "./style.css";
import { ThemeProvider } from "emotion-theming";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const theme = {
  colors: {
    primary: "#00c6ff"
  }
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
