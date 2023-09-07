import React, { useState } from "react";
import { Grid } from "@mui/material";

import InputForm from "../components/InputForm/InputForm";
import SideDrawer from "../shared/components/SideDrawer/SideDrawer"
import Chat from "../components/Chat/Chat"

const CopyLab = () => {
  const [response, setResponse] = useState("");
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={5}>
        <InputForm
          onSubmit={(data) => {setResponse(data);}}
        />
      </Grid>
      <Grid item xs={5}>
        <Chat response={response} />
      </Grid>
    </Grid>
  );
};

export default CopyLab;