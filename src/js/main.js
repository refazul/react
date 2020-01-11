import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { sidebarmenu_data, datatable_data, megamenu_data, form_data } from './data';
import Sidebarmenu from "./sidebarmenu";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Datatable from "./datatable";
import Form from "./form";

/*
<img ([^>]+)>
<img $1 />
 ]+>
*/
class Main extends Component {
	render() {
		return (
			<Router>
				<div className="wrapper">
					<nav class="main-header navbar navbar-expand navbar-white navbar-light">
						<Navbar {...sidebarmenu_data} />
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
}
ReactDOM.render(<Main />, document.querySelector("#main"))