import React from 'react'
import './Button.css'

export default function Button(props) {

    const isOperator = val => {
        return !(!isNaN(val) || val === "." || val === "=");
      }
    return (
        <div 
        className={`button ${isOperator(props.children) ? "operator" : ""}`}
        onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    )
}
