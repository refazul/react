import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';

import { sidebarmenu_data, datatable_data, megamenu_data, form_data } from './data';
import Sidebarmenu from "./sidebarmenu";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Datatable from "./datatable";
import Form from "./form";
import { Toast } from "./parts/toast";
import { Dropdown } from "./parts/bsdropdown";
import Law from './law';

var cause_data = window.cause_data;

/*
<img ([^>]+)>
<img $1 />
 ]+>
*/
const Main = (props) => {
	useEffect(() => {
		window.jQuery = $;
		const script = document.createElement("script");
		script.src = "https://adminlte.io/themes/v3/plugins/toastr/toastr.min.js";
		document.body.appendChild(script);
		const script2 = document.createElement("script");
		script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
		document.body.appendChild(script2);
		const script3 = document.createElement("script");
		script3.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js";
		document.body.appendChild(script3);
	}, []);
	return (
		<Router>
			<div className="wrapper">
				<nav class="main-header navbar navbar-expand navbar-white navbar-light">
					<Navbar {...sidebarmenu_data} />
					<Toast type="success" title="Hello" text="Success!" button_text="success-toast" />
					<Dropdown/>
				</nav>
				<section className="content-wrapper">
					<section className="content">
						<Switch>
							<Route path="/carousel">
								<Carousel />
							</Route>
							<Route path="/datatable">
								<Datatable {...datatable_data} />
							</Route>
							<Route path="/law">
								<Law data={cause_data}/>
							</Route>
							<Route path="/">
								<Form {...form_data} />
							</Route>
						</Switch>
					</section>
				</section>
				<Sidebarmenu {...sidebarmenu_data} />
			</div>
		</Router>
	);
}
ReactDOM.render(<Main />, document.querySelector("#main"))