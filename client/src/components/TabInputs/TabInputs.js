import React from "react";

import "./TabInputs.css"

const TabInputs = ({
  data,
  handleInputChange,
  id,
  prev,
  next,
  emptyTabHandler,
  submitRequestHandler,
}) => {
  const last = "product";
  const first = "general";
  return (
    <div>
      <div className="input-field-container">
        {Object.keys(data).map((key) => (
          <div key={key} className="input-field">
            <p>{key}</p>
            <input
              type="text"
              value={data[key]}
              onChange={(event) => handleInputChange(event, key)}
            />
          </div>
        ))}
      </div>

      <div className="input-button-container">
        {id === first ? (
          <div></div>
        ) : (
          <button onClick={prev} type="button">
            Previous
          </button>
        )}

        <button onClick={emptyTabHandler}>Clear</button>

        <button
          onClick={id === last ? submitRequestHandler : next}
          type="button"
        >
          {id === last ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default TabInputs;