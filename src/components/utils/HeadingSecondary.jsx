// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function HeadingSecondary({ className1, className2, children }) {
  return (
    <h2 className={`text-center ${className1}`}>
      <span
        className={`relative bottom-0 inline-block text-center font-primary text-[44px] font-bold tracking-[2%] after:absolute after:right-0 after:bottom-[15px] after:-z-10 after:h-[8px] after:w-3/5 after:bg-primary after:content-[''] ${className2}`}
      >
        {children}
      </span>
    </h2>
  );
}

HeadingSecondary.propTypes = {
  className1: PropTypes.string,
  className2: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HeadingSecondary;
