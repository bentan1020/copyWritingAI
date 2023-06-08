import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Inputs.css"

const Inputs = (props) => {
  const [data, setData] = useState(props.query);
  const navigate = useNavigate();
  const last = "product"

  const changeHandler = (id, value) => {
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/${props.id}`, data)
      .then((res) => {
        if (props.id === last && props.onSubmit) {
          props.onSubmit(res.data);
        }
        if (props.next){
            navigate(props.next);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
        <form onSubmit={submitHandler}>
            {Object.keys(data).map((info) => (
            <div key={info}>
                <p style={{ textTransform: "capitalize" }}>{info}</p>
                <input
                id={info}
                value={data[info]}
                onChange={(e) => changeHandler(e.target.id, e.target.value)}
                />
            </div>
            ))}
            <button type="submit">{props.id === last ? "Submit" : "Next"}</button>
        </form>
    </>
  );
};

export default Inputs;
