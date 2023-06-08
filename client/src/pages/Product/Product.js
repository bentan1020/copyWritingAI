import React, { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Grid } from "@mui/material";

import Response from "../../components/Response/Response";
import Header from "../../components/Header/Header";

const Product = () => {
  const questions = {
    features: "",
    benefits: "",
    market: "",
    like: "",
  }

  const [response, setResponse] = useState("");

  return (
    <>
      <Header></Header>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Inputs query={questions} id={"product"} onSubmit={(data) => {setResponse(data);}}/>
          </Grid>
          <Grid item xs={6}>
            <Response response={response} onEmpty={() => {setResponse("")}}/>
          </Grid>
        </Grid>
    </>
  )
};

export default Product;