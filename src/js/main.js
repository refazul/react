import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from './navigation';

import { sidebarmenu_data, datatable_data, megamenu_data } from './data';
import Sidebarmenu from "./sidebarmenu";
import Megamenu from "./megamenu";
import Carousel from "./carousel";
import Datatable from "./datatable";
import Tdsidebarmenu from "./tdsidebarmenu";
/*
<img ([^>]+)>
<img $1 />
*/
class Main extends Component {
	render() {
		return (
			<div className="wrapper">
				<Megamenu {...megamenu_data} />
				<section className="content-wrapper">
					<section className="content">
						<Datatable {...datatable_data} />
						<Carousel />
					</section>
				</section>
				<Sidebarmenu {...sidebarmenu_data} />
			</div>
		);
	}
}
ReactDOM.render(<Main />, document.querySelector("#main"))