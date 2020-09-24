import React from 'react'
import './ClearButton.css'

export default function ClearButton(props) {
    return (
        <div className="clear-btn">
            {props.children}
        </div>
    )
}
