import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { sidebarmenu_data, datatable_data, megamenu_data, form_data } from './data';
import Sidebarmenu from "./sidebarmenu";
import Megamenu from "./megamenu";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Datatable from "./datatable";
import Tdsidebarmenu from "./tdsidebarmenu";

import Form from "./form";

/*
<img ([^>]+)>
<img $1 />
<!--[^>]+>
*/
class Main extends Component {
	render() {
		return (
			<div className="wrapper">
				<nav class="main-header navbar navbar-expand navbar-white navbar-light">
					<Navbar {...megamenu_data} />
				</nav>
				<section className="content-wrapper">
					<section className="content">
						<Datatable {...datatable_data} />
						<Carousel />
						<Form {...form_data} />
					</section>
				</section>
				<Sidebarmenu {...sidebarmenu_data} />
			</div>
		);
	}
}
const Main2 = (props) => {
	return (
		<div className="wrapper">
			
		</div>
	);
}
ReactDOM.render(<Main />, document.querySelector("#main"))