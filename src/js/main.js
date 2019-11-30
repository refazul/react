import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from './navigation';

import { navigation_data, sidebarmenu_data, treenav1_data, datatable_data } from './data';
import Sidebarmenu from "./sidebarmenu";
import Datatable from "./datatable";


export default class Main extends Component {
	render() {
		return (
			<div className="wrapper">
				<section className="content-wrapper">
					<section className="content">
						<Datatable {...datatable_data} />
					</section>
				</section>
				<Sidebarmenu {...sidebarmenu_data} />
			</div>
		);
	}
}
ReactDOM.render(<Main />, document.querySelector("#main"))