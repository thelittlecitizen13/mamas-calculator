import React from 'react'
import './Input.css'

export default function Input(props) {
    return (
        <div className="input">
            {props.children}
        </div>
    )
}
