import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import Headers from "../../components/Header/Header";
import Response from "../../components/Response/Response";

const Pain = () => {
  const [response, setResponse] = useState("");
  const [painData, setPainData] = useState({
    psychological: "",
    health: "",
    economic: "",
    relationship: "",
  });

  const changeHandler = (id, value) => {
    setPainData((prevPainData) => ({
      ...prevPainData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/pain", painData)
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
            {Object.keys(painData).map((info) => (
              <div key={info}>
                <p style={{ textTransform: "capitalize" }}>{info}</p>
                <input
                  id={info}
                  value={painData[info]}
                  onChange={(e) => changeHandler(e.target.id, e.target.value)}
                />
              </div>
            ))}
            <button type="submit">Next</button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Response response={response}></Response>
        </Grid>
      </Grid>
    </>
  );
};

export default Pain;
