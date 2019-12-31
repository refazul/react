import React, { useState, useRef, useEffect } from 'react';


export const RadioButton = (props) => {
    var wrap_class = "";
    var inputwrap_class = "";

    if (props.orientation == 'horizontal') {
        wrap_class = " row ";
        inputwrap_class = " offset-sm-4 col-sm-8 ";
    }
    if (props.boxes == 'checkboxes') {
        wrap_class = " row ";
        inputwrap_class = " col-sm-6 ";
    }

    return (
        <div class={"form-group" + wrap_class}>
            <div class={inputwrap_class}>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id={props.id} />
                    <label class="form-check-label" for={props.for}>{props.text}</label>
                </div>
            </div>
        </div>
    )
}