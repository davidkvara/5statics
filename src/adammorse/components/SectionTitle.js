import React from "react";

const SectionHeader = ({ marTop, ...rest }) => {
  // getting warning but works properly (it has content)
  return <h2 className="sec-title" {...rest} />;
};

export default SectionHeader;
