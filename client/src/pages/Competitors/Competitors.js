import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import Headers from "../../components/Header/Header";
import Response from "../../components/Response/Response";

const Competitors = () => {
  const [response, setResponse] = useState("");
  const [competitorsData, setCompetitorsData] = useState({
    competitors: "",
    like: "",
    dislike: "",
  });

  const changeHandler = (id, value) => {
    setCompetitorsData((prevCompetitorsData) => ({
      ...prevCompetitorsData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/competitors", competitorsData)
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
            {Object.keys(competitorsData).map((info) => (
              <div key={info}>
                <p style={{ textTransform: "capitalize" }}>{info}</p>
                <input
                  id={info}
                  value={competitorsData[info]}
                  onChange={(e) => changeHandler(e.target.id, e.target.value)}
                />
              </div>
            ))}
            <button type="submit"><NavLink to="/hopes">Back</NavLink></button>
            <button type="submit">Submit</button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Response response={response}></Response>
        </Grid>
      </Grid>
    </>
  );
};

export default Competitors;
