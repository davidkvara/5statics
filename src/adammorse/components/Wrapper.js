import React from "react";
import PropTypes from "prop-types";

const Wrapper = props => <div className="wrapper">{props.children}</div>;

Wrapper.propTypes = {
  //got this from stackoverflow
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Wrapper;
