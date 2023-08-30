import React, { useState } from "react";

const tabs = ["general", "pain", "hopes", "competitors", "product"];

const initialFormData = {
  general: {
    gender: "",
    profession: "",
    interests: "",
    following: "",
    triggers: "",
    excitement: "",
  },
  pain: { psychological: "", health: "", economic: "", relationship: "" },
  hopes: { psychological: "", health: "", economic: "", relationship: "" },
  competitors: { competitors: "", like: "", dislike: "" },
  product: { name: "", features: "", benefits: "", market: "", like: "" },
};

const InputForm = ({ onSubmit }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event, field) => {
    setFormData((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [field]: event.target.value },
    }));
  };

  const clearCurrentTab = () => {
    setFormData((prev) => ({
      ...prev,
      [activeTab]: initialFormData[activeTab],
    }));
  };

  const submitData = () => {
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* tabs */}
      <div className="p-4 flex bg-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 p-3 mx-1 font-semibold hover:bg-blue-200 hover:rounded ${
              activeTab === tab ? "bg-blue-200 rounded" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* input field */}
      <div className="flex-1 overflow-y-auto p-4 px-8 space-y-4">
        {Object.keys(formData[activeTab]).map((key) => (
          <div key={key} className="my-2">
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              id={key}
              type="text"
              value={formData[activeTab][key]}
              onChange={(e) => handleInputChange(e, key)}
              className="w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        ))}
      </div>

      {/* buttons */}
      <div className="flex p-2 bg-white rounded shadow">
        {activeTab !== "general" && (
          <button
            onClick={() => setActiveTab(tabs[tabs.indexOf(activeTab) - 1])}
            className="flex-1 mx-4 p-4 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Previous
          </button>
        )}
        <button
          onClick={clearCurrentTab}
          className="flex-1 mx-4 p-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Clear
        </button>
        <button
          onClick={
            activeTab === "product"
              ? submitData
              : () => setActiveTab(tabs[tabs.indexOf(activeTab) + 1])
          }
          className="flex-1 mx-4 p-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          {activeTab === "product" ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default InputForm;
