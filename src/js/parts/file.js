import React, { useState, useRef, useEffect } from 'react';


export const File = (props) => {
    return (
        <div class="form-group">
            <label for={props.id}>{props.text}</label>
            <div class="input-group">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id={props.id} />
                    <label class="custom-file-label" for={props.id}>{props.placeholder}</label>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text" id="">Upload</span>
                </div>
            </div>
        </div>
    )
}