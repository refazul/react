import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from './navigation';

import { navigation_data, sidebarmenu_data } from './data';
import Sidebarmenu from "./sidebarmenu";

export default class Menu extends Component {
	render() {
		return (
			<div>
				<Sidebarmenu {...sidebarmenu_data} />
			</div>
		);
	}
}
ReactDOM.render(<Menu />, document.querySelector("#menu"))