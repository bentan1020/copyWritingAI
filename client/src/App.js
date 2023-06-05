import React from 'react'
import { ReactFragment } from 'react'
import axios from "axios"
import { useState } from 'react'

import Input from './components/Input/Input'
import Response from './components/Response/Response'

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      axios.post("http://localhost:8080/chat", { prompt })
      .then((res) => {
          setResponse(res.data);
      })
      .catch((error) => {
          console.log(error)
      })
  }

  return (
      <div>
      <form onSubmit={handleSubmit}>
          <input value={prompt} onChange={(e) => setPrompt(e.target.value)}></input>
          <button>submit</button>
          <p>{response}</p>
      </form>
      <button onClick={() => setResponse("")}>empty</button>
      </div>
  )
}

export default App