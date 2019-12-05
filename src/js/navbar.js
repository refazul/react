import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
// Very important

const Item = (props) => {
	var items = props.items || [];
	var toplevel = props.toplevel;
	const [count, setCount] = useState(0);
	const dropdownref = useRef(null);
	useEffect(() => {
		// Multiple Times
		if (count % 2 == 0) {
			$(dropdownref.current).removeClass('open');
		} else {
			$(dropdownref.current).addClass('open');
		}
	});
	useEffect(() => {
		// Just Once
	}, []);
	function dropdownOnclick(e) {
		setCount(count + 1);
	}
	return (
		<li className={toplevel & items.length > 0 ? "dropdown" : (items.length > 0 ? "dropdown-submenu" : "")} ref={dropdownref} onMouseEnter={dropdownOnclick} onMouseLeave={dropdownOnclick}>
			<a  href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				{props.text}
				{
					toplevel && items.length > 0 ? <b className="caret"></b> : <b></b>
				}
			</a>
			<ul className={items.length > 0 ? "dropdown-menu" : ""}>
				{
					items.map((item) => {
						return <Item {...item} />
					})
				}
			</ul>
		</li>
	);
}


const Navbar = (props) => {
	var items = props.items;
	return (
		<div>
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Brand</a>
				</div>

				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						{
							items.map((item) => {
								return <Item {...item} toplevel={true} />
							})
						}
					</ul>
				</div>
			</nav>
		</div>

	);
}
export default Navbar;
