import React, { useState, useRef, useEffect } from 'react';

export const RadioButton = (props) => {
    return (
        <div class={"form-group"}>
            <div class="form-check">
                <input type="radio" class="form-check-input" id={props.id} name={props.name}/>
                <label class="form-check-label" for={props.id}>{props.text}</label>
            </div>
        </div>
    )
}