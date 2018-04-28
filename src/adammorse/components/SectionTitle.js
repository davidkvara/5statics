import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ children, ...props }) => {
  return (
    <h2 className="sec-title" {...props}>
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default SectionTitle;
