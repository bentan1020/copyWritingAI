import React from 'react'

import "./Response.css"

const Response = (props) => {
    const emptyResponse = () => {
        props.onEmpty("")
    }

    return (
        <div className='response'>
            <div className='response-container'>
                <div className='response-output'>{props.response}</div>
            </div>
            <div className='button-container'>
                <button onClick={emptyResponse}>Empty</button>
            </div>
        </div>
    )
}

export default Response
