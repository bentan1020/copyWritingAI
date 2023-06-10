import React from "react";

import "./Response.css";

const Response = (props) => {
  const emptyResponse = () => {
    props.onEmpty("");
  };

  return (
    <div className="response">
      {props.isLoading === false ? (
        <div className="response-container">
          <div className="response-output">{props.response}</div>
        </div>
      ) : (
        <div className="loading-spinner"></div>
      )}
      <div className="button-container">
        <button onClick={emptyResponse}>Empty</button>
      </div>
    </div>
  );
};

export default Response;
