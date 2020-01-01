import React, { useState, useRef, useEffect } from 'react';

const Header = (props) => {
    var active_class = '';
    if (props.index == props.active) {
        active_class = ' active';
    }
    return (
        <a class={"nav-link  " + active_class} onClick={props.xyz}>{props.text}</a>
    )
};
const Text = (props) => {
    var active_class = '';
    if (props.index == props.active) {
        active_class = ' active show';
    }

    return (
        <div class={"tab-pane text-left fade " + active_class} >
            {props.text}
        </div>
    )
};
export const Tab = (props) => {
    var items = props.items || [];
	const [active, setActive] = useState(0);
	useEffect(() => {
	});
    useEffect(() => {
        // Just Once
    }, []);
    return (
        <div className="row">
            <div class="col-5 col-sm-3">
                <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab">
                    {
                        items.map((item, index) => {
                            return <Header {...item} index={index} active={active} xyz={(e) => { setActive(index) }} />
                        })
                    }

                </div>
            </div>
            <div class="col-7 col-sm-9">
                <div class="tab-content" id="vert-tabs-tabContent">
                    {
                        items.map((item, index) => {
                            return <Text {...item} index={index} active={active} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}




