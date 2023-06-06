import React, { useState } from 'react'
import axios from "axios"
import { Grid } from '@mui/material';

import Input from './components/Input/Input'
import Response from './components/Response/Response'

const App = () => {
  const [response, setResponse] = useState("");

  const handleSubmit = (prompt) => {
    axios.post("http://localhost:8080/chat", { prompt })
    .then((res) => {
        setResponse(res.data);
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const emptyHandler = () => {setResponse("")}

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Input onSubmit={handleSubmit}/>
      </Grid>
      <Grid item xs={6}>
        <Response response={response} onEmpty={emptyHandler}/>
      </Grid>
    </Grid>
  )
}

export default App;
