import React from "react"
import './_errorMsg.sass'

const ErrorMSg = ( { id, condition, message }) => {
    return (
        <span className="error" id={id} aria-live="assertive" style={{visibility: condition ? "visible" : "hidden"}}>
                    {message}</span>
    )
}

export default ErrorMSg

