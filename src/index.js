import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./schoolrunner/App";
import { BrowserRouter } from "react-router-dom";
import App from "./noidea/App";
// import { readingList, writingList } from "./adammorse/PostListData";
// import { workList } from "./adammorse/worksData";

/* const adamMorseSite = (
  <App readings={readingList} writings={writingList} works={workList} />
); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
