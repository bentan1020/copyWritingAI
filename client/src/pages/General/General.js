import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { NavLink } from 'react-router-dom'

import Headers from "../../components/Header/Header";
import Response from "../../components/Response/Response";

import "./General.css"

const General = () => {
  const [response, setResponse] = useState("");
  const [generalData, setGeneralData] = useState({
    gender: "",
    profession: "",
    interests: "",
    following: "",
    triggers: "",
    excitement: "",
  });

  const changeHandler = (id, value) => {
    setGeneralData((prevGeneralData) => ({
      ...prevGeneralData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/general", generalData)
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
            {Object.keys(generalData).map((info) => (
              <div key={info}>
                <p style={{ textTransform: "capitalize" }}>{info}</p>
                <input
                  id={info}
                  value={generalData[info]}
                  onChange={(e) => changeHandler(e.target.id, e.target.value)}
                />
              </div>
            ))}
            <button type="submit"><NavLink to="/pain">Next</NavLink></button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Response response={response}></Response>
        </Grid>
      </Grid>
    </>
  );
};

export default General;
