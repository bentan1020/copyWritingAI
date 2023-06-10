import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Response from "../components/Response/Response";
import InputForm from "../components/InputForm/InputForm";

import "./CopyLab.css";

const CopyLab = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false)
  }, [response])

  const onEmpty = () => {
    setResponse("");
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <InputForm
          onSubmit={(data) => {setResponse(data);}}
          isLoadingHandler = {setIsLoading}
        />
      </Grid>
      <Grid item xs={6}>
        <Response response={response} onEmpty={onEmpty} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default CopyLab;
