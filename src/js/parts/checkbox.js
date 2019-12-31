import React, { useState, useRef, useEffect } from 'react';


export const CheckBox = (props) => {
    return (
        <div class={"form-group"}>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id={props.id} />
                <label class="form-check-label" for={props.id}>{props.text}</label>
            </div>
        </div>
    )
}