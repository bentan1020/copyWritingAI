import React, { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Grid } from "@mui/material";

import Response from "../../components/Response/Response";
import Header from "../../components/Header/Header";

const Competitors = () => {
  const questions = {
    competitors: "",
    like: "",
    dislike: "",
  }

  const [response, setResponse] = useState("");

  return (
    <>
      <Header></Header>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Inputs query={questions} id={"competitors"} onSubmit={(data) => {setResponse(data);}}/>
          </Grid>
          <Grid item xs={6}>
            <Response response={response}/>
          </Grid>
        </Grid>
    </>
  )
};

export default Competitors;