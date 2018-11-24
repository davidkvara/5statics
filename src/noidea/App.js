import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Router } from "@reach/router";

import "./main.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Catalog from "./routes/Catalog";
import Branches from "./routes/Branches";

const App = () => {
  return (
    <div className="library">
      <Header />
      <main className="main">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Blog path="/blog" />
          <Catalog path="/catalog" />
          <Branches path="/branches" />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
