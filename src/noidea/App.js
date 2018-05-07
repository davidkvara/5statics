import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/Branches" component={Branches} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
