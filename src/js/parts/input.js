import React, { useState, useRef, useEffect } from 'react';

const Text = (props) => {
    var form_class = "form-group"
    var input_class = "";
    var wrap_class = "";
    var label_class = "col-form-label ";
    var inputwrap_class = "";

    if (props.orientation == 'horizontal') {
        wrap_class = " row ";
        label_class += " col-sm-4 ";
        inputwrap_class = " col-sm-8 ";
    }
    if (props.color == "green") {
        input_class = " is-valid ";
    }
    else if (props.color == "orange") {
        input_class = " is-warning ";
    }
    else if (props.color == "red") {
        input_class = " is-invalid ";
    }
    return (
        <div class={form_class + wrap_class}>
            <label class={label_class} for={props.id}><i class={props.fontawesome}></i> {props.text}</label>
            <div class={inputwrap_class}>
                <input type={props.type} class={"form-control " + input_class} id={props.id} placeholder={props.placeholder} onKeyDown={props.keyd} />
            </div>
        </div>
    )
}
export const Input = (props) => {
    return <Text {...props} />;
}



