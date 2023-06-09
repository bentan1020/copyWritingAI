import React, { useState } from "react";
import { Grid } from "@mui/material";

import Response from "../components/Response/Response"
import InputForm from "../components/InputForm/InputForm";

import './CopyLab.css'

const CopyLab = () => {
  const [response, setResponse] = useState("");
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <InputForm onSubmit={(data) => {setResponse(data);}}/>
      </Grid>
      <Grid item xs={6}>
        <Response response={response}/>
      </Grid>
    </Grid>
  );
};

export default CopyLab;
