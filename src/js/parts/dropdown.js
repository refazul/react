import React, { useState, useRef, useEffect } from 'react';

const Item = (props) => {
    var item_class = '';
    var text = props.text.toLowerCase();
    var search = props.search.toLowerCase()
    if (text.indexOf(search) == -1) {
        item_class = 'd-none';
    }
    return (
        <a class={"dropdown-item " + item_class} href={props.link} onClick={(e) => { props.onclik(props.text) }}>{props.text}</a>
    )
};
export const Dropdown = (props) => {
    var items = props.items || [];
    const [dropdown_menu_class, set_dropdown_menu_class] = useState('');
    const [input_class, set_input_class] = useState('d-none');
    const [nav_link_class, set_nav_link_class] = useState('');
    const [caret_class, set_caret_class] = useState('fa-chevron-down');
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const inputref = useRef(null);
    useEffect(() => {
        // Multiple Times
        if (dropdown_menu_class == 'show') {
            setSearch('');
        }
        if (input_class == '') {
            inputref.current.focus();
        }
        
    });
    useEffect(() => {
        // Just Once
    }, []);
    function dropdownOnclick(e) {
        //setCount(count + 1);
        if (caret_class == 'fa-chevron-down') {
            set_caret_class('fa-chevron-up');
        } else {
            set_caret_class('fa-chevron-down');
        }

        if (dropdown_menu_class == '') {
            set_dropdown_menu_class('show');
        } else {
            set_dropdown_menu_class('');
        }

        if (nav_link_class == '') {
            set_nav_link_class('d-none');
        } else {
            set_nav_link_class('');
        }

        if (input_class == '') {
            set_input_class('d-none');
        } else {
            set_input_class('');
        }
    }
    function xyz(text) {
        setSearch(text);
        set_caret_class('fa-chevron-down');
        set_dropdown_menu_class('');
        set_input_class('');
        set_nav_link_class('d-none');
    }
    return (
        <li class="dropdown">
            <div className="d-inline-block" style={{ width: '200px' }}>
                <a class={"nav-link " + nav_link_class} data-toggle="dropdown" href="#" onClick={dropdownOnclick}>
                    Dropdown
                </a>
                <input class={"form-control " + input_class} ref={inputref} type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <i className={"fas " + caret_class} onClick={dropdownOnclick}></i>
            <div class={"dropdown-menu " + dropdown_menu_class} style={{ position: "absolute", top: "100%" }}>
                {
                    items.map((item) => {
                        return <Item {...item} search={search} onclik={xyz} />
                    })
                }
            </div>
        </li>
    )
}




