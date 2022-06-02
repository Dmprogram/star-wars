import React from "react";

const withChildFunction = (fn) => (Wrapped) =>
  function (props) {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };

export default withChildFunction;
