import React from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Grid } from "@mui/material";

import Response from "../../components/Response/Response";
import Header from "../../components/Header/Header";

const Hopes = () => {
  const questions = {
    psychological: "",
    health: "",
    economic: "",
    relationship: "",
  }

  return (
    <>
      <Header></Header>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Inputs query={questions} id={"hopes"} next={"/competitors"}/>
          </Grid>
          <Grid item xs={6}>
            <Response />
          </Grid>
        </Grid>
    </>
  )
};

export default Hopes;