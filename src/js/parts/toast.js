import React, { useState, useRef, useEffect } from 'react';

export const Toast = (props) => {
    function taostOnClick(type = 'info', text = '', title = '') {
        // https://codeseven.github.io/toastr/demo.html
        var options = {};
        if (type == 'success') {
            toastr.success(text, title, options);
        } else if (type == 'info') {
            toastr.info(text, title, options)
        } else if (type == 'error') {
            toastr.error(text, title, options)
        } else if (type == 'warning') {
            toastr.warning(text, title, options)
        }
    }
    var button_class = '';
    if (props.type == 'success') {
        button_class = 'btn-success';
    } else if (props.type == 'info') {
        button_class = 'btn-info';
    } else if (props.type == 'error') {
        button_class = 'btn-danger';
    } else if (props.type == 'warning') {
        button_class = 'btn-warning';
    }
    return (
        <button type="button" class={"btn " + button_class} onClick={(e) => { taostOnClick(props.type, props.text, props.title)}}>
            {props.button_text}
        </button>
    )
}


