import React, { useState, useRef, useEffect } from 'react';


export const CheckBox = (props) => {
    var wrap_class = "";
    var inputwrap_class = "";

    if (props.orientation == 'horizontal') {
        wrap_class = " row ";
        inputwrap_class = " offset-sm-4 col-sm-8 ";
    }
    return (
        <div class={"form-group" + wrap_class}>
            <div className={inputwrap_class}>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id={props.id} />
                    <label class="form-check-label" for={props.id}>{props.text}</label>
                </div>
            </div>
        </div>
    )
}