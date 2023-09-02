import React, { useState } from "react";
import './FormInput.css'

export default function FormInput(props){
    
    const [focused, setFocused] = useState(false)

    const {label, errorMessage ,onChange, id, ...inputProps} = props;
    
    const handleFocus = () => {
        setFocused(true)
    }


    return (
        <div className="formInput">
            {/* <label> Username </label> */}
            {/* destructure what we don't need */}
            <label> {label} </label>
            <input 
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={
                () => inputProps.name === "confirmPassword"  && setFocused(true)
            }
            focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}