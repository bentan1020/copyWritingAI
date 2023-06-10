import React, { useState } from "react";
import axios from "axios";

import "./InputForm.css";

function TabInputs({
  data,
  handleInputChange,
  id,
  prev,
  next,
  emptyTabHandler,
  submitRequestHandler,
}) {
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

const InputForm = (props) => {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    general: {
      gender: "",
      profession: "",
      interests: "",
      following: "",
      triggers: "",
      excitement: "",
    },
    pain: {
      psychological: "",
      health: "",
      economic: "",
      relationship: "",
    },
    hopes: {
      psychological: "",
      health: "",
      economic: "",
      relationship: "",
    },
    competitors: {
      competitors: "",
      like: "",
      dislike: "",
    },
    product: {
      features: "",
      benefits: "",
      market: "",
      like: "",
    },
  });

  const nextTab = {
    general: "pain",
    pain: "hopes",
    hopes: "competitors",
    competitors: "product",
  };

  const prevTab = {
    pain: "general",
    hopes: "pain",
    competitors: "hopes",
    product: "competitors",
  };

  const handleInputChange = (event, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [activeTab]: {
        ...prevState[activeTab],
        [field]: event.target.value,
      },
    }));
  };

  const submitRequestHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/product`, formData)
      .then((res) => {
        props.onSubmit(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emptyTabHandler = () => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [activeTab]: Object.fromEntries(
          Object.entries(prevState[activeTab]).map(([key, value]) => [key, ""])
        ),
      };
    });
  };

  const prevHandler = () => {
    setActiveTab(prevTab[activeTab]);
  };

  const nextHandler = () => {
    setActiveTab(nextTab[activeTab]);
  };

  return (
    <div>
      <div className="tab-button-container">
        <button
          className={`tab-button ${activeTab === "general" ? "active" : ""}`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`tab-button ${activeTab === "pain" ? "active" : ""}`}
          onClick={() => setActiveTab("pain")}
        >
          Pain
        </button>
        <button
          className={`tab-button ${activeTab === "hopes" ? "active" : ""}`}
          onClick={() => setActiveTab("hopes")}
        >
          Hopes
        </button>
        <button
          className={`tab-button ${
            activeTab === "competitors" ? "active" : ""
          }`}
          onClick={() => setActiveTab("competitors")}
        >
          Currently Using
        </button>
        <button
          className={`tab-button ${activeTab === "product" ? "active" : ""}`}
          onClick={() => setActiveTab("product")}
        >
          Our Product
        </button>
      </div>

      {activeTab && (
        <TabInputs
          data={formData[activeTab]}
          handleInputChange={handleInputChange}
          id={activeTab}
          prev={prevHandler}
          next={nextHandler}
          emptyTabHandler={emptyTabHandler}
          submitRequestHandler={submitRequestHandler}
        />
      )}
    </div>
  );
};

export default InputForm;
