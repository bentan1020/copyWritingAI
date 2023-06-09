import React, { useState } from 'react';
import axios from "axios";

function TabInputs({ data, handleInputChange, id, submitRequestHandler}) {
  const last = "product"
  const doNothingHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <p style={{ textTransform: "capitalize" }}>{key}</p>
          <input
            type="text"
            value={data[key]}
            onChange={(event) => handleInputChange(event, key)}
          />
        </div>
      ))}
      <button 
        onClick={id === last ? submitRequestHandler : doNothingHandler}
        type="button"
      >
        {id === last ? "Submit" : "Next"}
      </button>
    </div>
  );
}

const InputForm = (props) => {
  const [activeTab, setActiveTab] = useState('general');
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
    } 
  });

  const handleInputChange = (event, field) => {
    setFormData(prevState => ({
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
  }

  return (
    <div>
      <button onClick={() => {setActiveTab('general')}}>General Information About Your Target Audience</button>
      <button onClick={() => {setActiveTab('pain')}}>Their Pain Points</button>
      <button onClick={() => setActiveTab('hopes')}>Their Hopes and Dreams</button>
      <button onClick={() => setActiveTab('competitors')}>What Are They Currently Using</button>
      <button onClick={() => setActiveTab('product')}>What's Special About Our Product</button>

      {activeTab && (
        <TabInputs data={formData[activeTab]} handleInputChange={handleInputChange} id={activeTab} submitRequestHandler={submitRequestHandler}/>
      )}
    </div>
  );
}

export default InputForm;
