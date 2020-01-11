import React, { useState, useRef, useEffect } from 'react';
import $ from 'jQuery';
// Very important

const Item = (props) => {
	var items = props.items || [];
	var li_class_name = "";
	var ul_class_name = "";
	var dd_trigger_class_name = "";
	var dd_arrow_class_name = "";
	const li_ref = useRef(null);
	const ul_ref = useRef(null);
	useEffect(() => {
		// Multiple Times

	});
	useEffect(() => {
		// Just Once
	}, []);

	function onClickA() {
		var active = $(li_ref.current).hasClass('active');
		if (active) {
			$(ul_ref.current).stop().slideUp(300, () => {
				$(li_ref.current).removeClass('active');
			});
		} else {
			$(ul_ref.current).stop().slideDown(300, () => {
				$(li_ref.current).addClass('active');
			});
		}
	}
	if (items.length > 0) {
		li_class_name += " cn-dropdown-item has-down pr12 ";
		ul_class_name += " dropdown "
		dd_trigger_class_name += " dd-trigger "
		dd_arrow_class_name += " dd-arrow "
	}
	return (
		<li class={li_class_name} ref={li_ref}>
			<a href="#" onClick={onClickA}>{props.text}</a>
			<ul class={ul_class_name} ref={ul_ref}>
				{
					items.map((item) => {
						return <Item {...item} />
					})
				}
			</ul>
			<span class={dd_trigger_class_name}></span><span class={dd_arrow_class_name}></span>
		</li>
	);
}
const Navbar = (props) => {
	var items = props.items || [];
	const [toggle_class, set_toggle_class] = useState('');
	const classynav_container_ref = useRef(null);
	// check browser width in real-time
	function breakpointCheck() {
		var windoWidth = window.innerWidth;
		if (windoWidth <= 991) {
			$(classynav_container_ref.current).removeClass('breakpoint-off').addClass('breakpoint-on');
		} else {
			$(classynav_container_ref.current).removeClass('breakpoint-on').addClass('breakpoint-off');
		}
	}
	breakpointCheck();
	window.onresize = breakpointCheck;

	function onClickBar() {
		if (toggle_class == '') {
			set_toggle_class('menu-on');
		} else {
			set_toggle_class('');
		}
	}
	function onClickX() {
		set_toggle_class('');
	}
	return (
		<div id="stickyNav-sticky-wrapper" class="sticky-wrapper">
			<div class="original-nav-area" id="stickyNav">
				<div class="classy-nav-container breakpoint-off light right " ref={classynav_container_ref}>
					<div class="container">

						<nav class="classy-navbar justify-content-between navbar navbar-expand navbar-white navbar-light">
							<div class="classy-navbar-toggler" onClick={onClickBar} >
								<span class="navbarToggler"><span></span><span></span><span></span></span>
							</div>
							<div class={"classy-menu " + toggle_class} id="originalNav">

								<div class="classycloseIcon" onClick={onClickX}>
									<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
								</div>
								<div class="classynav">
									<ul>
										{
											items.map((item) => {
												return <Item {...item} />
											})
										}
									</ul>
								</div>
							</div>
							<form class="form-inline ml-3 ">
								<div class="input-group input-group-sm">
									<input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
									<div class="input-group-append">
										<button class="btn btn-navbar" type="submit">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</form>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
