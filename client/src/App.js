import React, { useState } from 'react'
import axios from "axios"

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
    <>
      <Input onSubmit={handleSubmit}/>
      <Response response={response} onEmpty={emptyHandler}/>
    </>
  )
}

export default App;
