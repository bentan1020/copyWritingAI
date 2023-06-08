import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Inputs = (props) => {
  const [data, setData] = useState(props.query);

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
        if (props.id === "competitors" && props.onSubmit) {
          props.onSubmit(res.data);
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
            {props.id === "competitors" ? (<button type="submit">Submit</button>) : (<button type="submit"><NavLink to={props.next}>Next</NavLink></button>)}
        </form>
    </>
  );
};

export default Inputs;
