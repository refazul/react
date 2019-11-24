import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from './navigation';

import { navigation_data, sidebarmenu_data } from './data';
import Sidebarmenu from "./sidebarmenu";

export default class Menu extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-lg-2 col-md-2 col-sm-2">
					<Sidebarmenu {...sidebarmenu_data} />
				</div>
				<div className="col-lg-10 col-md-10 col-sm-10">
					<div id="cssmenu">
						<Navigation {...navigation_data} />
					</div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<Menu />, document.querySelector("#menu"))