import React from 'react'

function FormGroup(props){
    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor} className={props.className}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup