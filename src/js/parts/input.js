import React, { useState, useRef, useEffect } from 'react';


const File = (props) => {
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
const Checkbox = (props) => {
    var wrap_class = "";
    var inputwrap_class = "";

    if (props.orientation == 'horizontal') {
        wrap_class = " row ";
        inputwrap_class = " offset-sm-4 col-sm-8 ";
    }

    return (
        <div class={"form-group" + wrap_class}>
            <div class={inputwrap_class}>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">{props.text}</label>
                </div>
            </div>
        </div>
    )
}

const Text = (props) => {

    var wrap_class = "";
    var label_class = "";
    var inputwrap_class = "";

    if (props.orientation == 'horizontal') {
        wrap_class = " row ";
        label_class = " col-sm-4 col-form-label ";
        inputwrap_class = " col-sm-8 ";
    }
    return (
        <div class={"form-group " + wrap_class}>
            <label class={label_class} for={props.id}>{props.text}</label>
            <div class={inputwrap_class}>
                <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder} onKeyDown={props.keyd} />
            </div>
        </div>
    )
}

const Input = (props) => {
    var t = <Text {...props} />;
    if (props.type == 'file') {
        t = <File {...props} />;
    } else if (props.type == 'checkbox') {
        t = <Checkbox {...props} />
    }
    return t;
}
export default Input;






/*
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>
<div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
</div>
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username" />
</div>
<div class="form-group">
    <label for="exampleInputFile">File input</label>
    <div class="input-group">
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="exampleInputFile" />
            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
        </div>
        <div class="input-group-append">
            <span class="input-group-text" id="">Upload</span>
        </div>
    </div>
</div>
<div class="form-group">
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
</div>
<div class="form-group row">
    <div class="offset-sm-4 col-sm-8">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck2" />
            <label class="form-check-label" for="exampleCheck2">Remember me</label>
        </div>
    </div>
</div>
*/