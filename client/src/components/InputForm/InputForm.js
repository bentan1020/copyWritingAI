import React, { useState } from "react";
import axios from "axios";

import TabInputs from "../TabInputs/TabInputs";

import "./InputForm.css";

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
      name: "",
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
    props.isLoadingHandler(true);
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
          prev={() => {setActiveTab(prevTab[activeTab])}}
          next={() => {setActiveTab(nextTab[activeTab])}}
          emptyTabHandler={emptyTabHandler}
          submitRequestHandler={submitRequestHandler}
        />
      )}
    </div>
  );
};

export default InputForm;
