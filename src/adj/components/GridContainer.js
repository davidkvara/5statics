import React from "react";
import Card from "./Card";

const GridContainer = props => {
  const data = props.items;

  return (
    <div className="grid-container">
      {data.map((item, i) => <Card key={i} {...item} />)}
    </div>
  );
};

export default GridContainer;
