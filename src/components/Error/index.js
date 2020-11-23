import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Error = () => {
  return (
    <div className="error-container">
      <div>404 - Not Found!</div>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Error;
