import React from "react";
import Card from "./common/Card";

const GridContainer = ({ items }) => {
  return (
    <main>
      <div className="grid-container">
        {items.map(item => (
          <Card key={item.src.toString()} {...item} />
        ))}
      </div>
    </main>
  );
};

export default GridContainer;
