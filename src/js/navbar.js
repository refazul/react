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


const Navbar = (props) => {
	var items = props.items || [];
	return (
		<div id="stickyNav-sticky-wrapper" class="sticky-wrapper" style={{ height: "100px" }}>
			<div class="original-nav-area" id="stickyNav">
				<div class="classy-nav-container breakpoint-off light left">
					<div class="container">

						<nav class="classy-navbar justify-content-between">
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
