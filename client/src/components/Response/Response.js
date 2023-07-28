import React from "react";

import "./Response.css";

const Response = (props) => {
  const emptyResponse = () => {
    props.onEmpty("");
  };

  return (
    <div className="response">
      {props.isLoading === false ? (
        <div class="scroll-container">
          <div className="response-output" style={{ whiteSpace: 'pre-line' }}>{props.response}</div>
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
