import React from 'react'

const Response = (props) => {
    const emptyResponse = () => {
        props.onEmpty("")
    }

    return (
        <div>
            <div>{props.response}</div>
            <button onClick={emptyResponse}>empty</button>
        </div>
    )
}

export default Response
