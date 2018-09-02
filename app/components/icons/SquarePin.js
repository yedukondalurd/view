import React from "react";
export default props => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 50}
    height={props.height || 50}
    viewBox="0 0 50 50"
    overflow="inherit"
  >
    <path d="M45 1h-40v40h15.093l5.439 8.05 5.44-8.05h14.028z" />
  </svg>
);
