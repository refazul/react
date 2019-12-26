import React, { useState, useRef, useEffect } from 'react';

// Very important

const Item = (props) => {
	var items = props.items || [];
	var li_class_name = "";
	var ul_class_name = " hidden ";
	var dd_trigger_class_name = "";
	var dd_arrow_class_name = "";
	useEffect(() => {
		// Multiple Times
		
	});
	useEffect(() => {
		// Just Once
	}, []);
	
	if (items.length > 0) {
		li_class_name += " cn-dropdown-item has-down pr12 ";
		ul_class_name += " dropdown "
		dd_trigger_class_name += " dd-trigger "
		dd_arrow_class_name += " dd-arrow "
	}
	return (
		<li class={li_class_name}><a href="#">{props.text}</a>
			<ul class={ul_class_name}>
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


const Navbarbootstrap4 = (props) => {
	var items = props.items || [];
	return (
		<div id="stickyNav-sticky-wrapper" class="sticky-wrapper" style={{ height: "100px" }}>
			<div class="original-nav-area" id="stickyNav">
				<div class="classy-nav-container breakpoint-off light left">
					<div class="container">

						<nav class="classy-navbar justify-content-between">
							<div class="subscribe-btn">
								<a href="#" class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
							</div>
							<div class="classy-navbar-toggler">
								<span class="navbarToggler"><span></span><span></span><span></span></span>
							</div>
							<div class="classy-menu" id="originalNav">

								<div class="classycloseIcon">
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
									<div id="search-wrapper">
										<form action="#">
											<input type="text" id="search" placeholder="Search something..." />
											<div id="close-icon"></div>
											<input class="d-none" type="submit" value="" />
										</form>
									</div>
								</div>

							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

	);
}
export default Navbarbootstrap4;
