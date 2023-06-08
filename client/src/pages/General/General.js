import React from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Grid } from "@mui/material";

import Response from "../../components/Response/Response";
import Header from "../../components/Header/Header";

const General = () => {
  const questions = {
    gender: "",
    profession: "",
    interests: "",
    following: "",
    triggers: "",
    excitement: "",
  }

  return (
    <>
      <Header></Header>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Inputs query={questions} id={"general"} next={"/pain"}/>
          </Grid>
          <Grid item xs={6}>
            <Response />
          </Grid>
        </Grid>
    </>
  )
};

export default General;