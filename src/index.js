import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./schoolrunner/App";
/* import App from "./adammorse/App";
import { readingList, writingList } from "./adammorse/PostListData";
import { workList, workListLarge } from "./adammorse/worksData"; */

/* const adamMorseSite = (
  <App
    readings={readingList}
    writings={writingList}
    works={workList}
    worksLarge={workListLarge}
  />
); */

ReactDOM.render(<App />, document.getElementById("root"));
