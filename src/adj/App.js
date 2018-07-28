import React from "react";
import Header from "./components/Header";
import GridContainer from "./components/GridContainer";
import Footer from "./components/Footer";
import cards from "./API";
import "./css/app.css";

const App = () => (
  <div className="app">
    <Header title="adjara.com" />
    <GridContainer items={cards} />
    <Footer>&copy; 2016 - 2018 Adjara.com</Footer>
  </div>
);

export default App;
