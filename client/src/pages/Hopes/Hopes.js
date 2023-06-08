import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { NavLink } from 'react-router-dom'

import Headers from "../../components/Header/Header";
import Response from "../../components/Response/Response";

import "./Hopes.css"

const Hopes = () => {
  const [response, setResponse] = useState("");
  const [hopesData, setHopesData] = useState({
    psychological: "",
    health: "",
    economic: "",
    relationship: "",
  });

  const changeHandler = (id, value) => {
    setHopesData((prevHopesData) => ({
      ...prevHopesData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/hopes", hopesData)
      .then((res) => {
        console.log(res.data)
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Headers></Headers>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <form onSubmit={submitHandler}>
            {Object.keys(hopesData).map((info) => (
              <div key={info}>
                <p style={{ textTransform: "capitalize" }}>{info}</p>
                <input
                  id={info}
                  value={hopesData[info]}
                  onChange={(e) => changeHandler(e.target.id, e.target.value)}
                />
              </div>
            ))}
            <button type="submit"><NavLink to="/pain">Back</NavLink></button>
            <button type="submit"><NavLink to="/competitors">Next</NavLink></button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Response response={response}></Response>
        </Grid>
      </Grid>
    </>
  );
};

export default Hopes;
