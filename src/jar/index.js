import React from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/GridContainer";
import Footer from "./components/Footer";
import cards from "./fakeAPI";

export default () => (
  <>
    <Header title="sisulele" />
    <Main items={cards} />
    <Footer />
  </>
);
