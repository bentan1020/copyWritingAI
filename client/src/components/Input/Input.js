import React, { useState } from 'react'

const Input = (props) => {
    const [prompt, setPrompt] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(prompt);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={prompt} onChange={(e) => setPrompt(e.target.value)}></input>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Input
