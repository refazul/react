import React, { useState, useRef, useEffect } from 'react';


export const InputAddon = (props) => {
    var form_class = " input-group mb-3";
    var inner1 = (props.fontawesome1 ? <i className={props.fontawesome1}></i> : props.text1);
    var inner2 = (props.fontawesome2 ? <i className={props.fontawesome2}></i> : props.text2);
    var span1 = <div class="input-group-prepend"><span class="input-group-text">{inner1}</span></div>;
    var span2 = <div class="input-group-prepend"><span class="input-group-text">{inner2}</span></div>;
    var input = <input type="text" class={"form-control "} id={props.id} placeholder={props.placeholder} onKeyDown={props.keyd} />;
    var left = inner1;
    var right = inner2;
    var both = left && right;

    if (both) {
        return <div className={form_class}>{span1}{input}{span2}</div>
    } else if (right) {
        return <div className={form_class}>{input}{span2}</div>
    } else if (left) {
        return <div className={form_class}>{span1}{input}</div>
    }
    return <div></div>
}