import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
// Very important

const Subitem = (props) => {
	return (
		<a className={"nav-link " + (props.index == props.active ? 'active' : '')} data-toggle="pill" role="tab" onMouseEnter={props.onhover} onMouseLeave={props.onleave}>{props.text}</a>
	)
}
const Tabitem = (props) => {
	return (
		<div className="col-3">

			<div>
				<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
					<img src={props.image} alt="IMG" />
				</a>
				<div className="p-t-10">
					<h5 className="p-b-5">
						<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">{props.text}</a>
					</h5>
					<span className="cl8">
						<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">{props.category}</a>
						<span className="f1-s-3 m-rl-3">-</span>
						<span className="f1-s-3">{props.date}</span>
					</span>
				</div>
			</div>
		</div>
	);
}

const Tab = (props) => {
	var items = props.tabitems || [];
	return (
		<div className={"tab-pane show " + (props.index == props.active ? 'active' : '')} role="tabpanel">
			<div className="row">
				{
					items.map((item, index) => {
						return <Tabitem {...item} />
					})
				}
			</div>
		</div>
	)
}



const Item = (props) => {
	var items = props.items || [];

	const [active, setActive] = useState(0);

	function onhover(index) {
		setActive(index);
	}
	function onleave(index) {
		//setActive(false);
	}
	useEffect(() => {
	});
	useEffect(() => {
		// Just Once
	}, []);
	return (
		<li className="mega-menu-item" >
			<a href="category-01.html">{props.text} </a>
			<div className="sub-mega-menu">
				<div className="nav flex-column nav-pills" role="tablist">
					{
						items.map((item, index) => {
							return <Subitem {...item} index={index} active={active} onhover={(e) => { onhover(index) }} onleave={(e) => { onleave(index) }} />
						})
					}
				</div>
				<div className="tab-content">
					{
						items.map((item, index) => {
							return <Tab {...item} index={index} active={active} />
						})
					}
				</div>
			</div>
		</li>
	);
}


const Megamenu = (props) => {
	var items = props.items || [];
	return (
		<div className="wrap-main-nav">
			<div className="main-nav show-main-nav">

				<nav className="menu-desktop">
					<a className="logo-stick" href="index.html">
						<img src="img/navultra/icons/logo-01.png" alt="LOGO" />
					</a>
					<ul className="main-menu">
						{
							items.map((item) => {
								return <Item {...item} />
							})
						}
					</ul>
				</nav>
			</div>
		</div>
	);
}
export default Megamenu;
