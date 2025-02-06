// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Button({ customStyle, children }) {
  return (
    <button
      className={`cursor-pointer rounded-[5px] bg-primary px-5 py-2.5 text-lg font-semibold tracking-wider text-white transition-colors hover:bg-amber-400 ${customStyle}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  customStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
