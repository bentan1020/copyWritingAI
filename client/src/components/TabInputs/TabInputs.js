import React from "react";

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

  const buttonClass =
    "flex-1 mx-4 p-4 border-0 rounded-md bg-blue-600 text-white transition-colors duration-300 ease-in-out hover:bg-light-blue-200 hover:cursor-pointer";

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <div className="p-4 px-20">
        {Object.keys(data).map((key) => (
          <div key={key} className="my-4">
            <p className="capitalize mb-1.5">{key}</p>
            <input
              type="text"
              value={data[key]}
              onChange={(event) => handleInputChange(event, key)}
              className="w-full p-2 border border-gray-300"
            />
          </div>
        ))}
      </div>

      <div className="flex">
        {id !== first && (
          <button onClick={prev} className={buttonClass} type="button">
            Previous
          </button>
        )}

        <button className={buttonClass} onClick={emptyTabHandler}>
          Clear
        </button>

        <button
          className={buttonClass}
          onClick={id === last ? submitRequestHandler : next}
          type="button"
        >
          {id === last ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TabInputs;