import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./schoolrunner/App";
import App from "./noidea/App";
// import { readingList, writingList } from "./adammorse/PostListData";
// import { workList } from "./adammorse/worksData";

/* const adamMorseSite = (
  <App readings={readingList} writings={writingList} works={workList} />
); */

ReactDOM.render(<App />, document.getElementById("root"));
