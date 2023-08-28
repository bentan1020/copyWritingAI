import React, { useState } from "react";
import { Grid } from "@mui/material";

import InputForm from "../components/InputForm/InputForm";
import SideDrawer from "../shared/components/Navigation/SideDrawer/SideDrawer";
import Chat from "../components/Chat/Chat";

const CopyLab = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={5}>
        <InputForm
          onSubmit={(data) => {setResponse(data);}}
          isLoadingHandler = {setIsLoading}
        />
      </Grid>
      <Grid item xs={5}>
        {/* <Response response={response} onEmpty={() => setResponse("")} isLoading={isLoading} /> */}
        <Chat response={response} />
      </Grid>
    </Grid>
  );
};

export default CopyLab;
