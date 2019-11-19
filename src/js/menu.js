import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from './navigation';

import { navigation_data } from './data';

export default class Menu extends Component {
	render() {
		return (
			<div className="container">
				<div>
					<label class="mobile_menu" for="mobile_menu">
						<span>Menu</span>
					</label>
					<input id="mobile_menu" type="checkbox"></input>
					<Navigation {...navigation_data}/>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<Menu />, document.querySelector("#menu"))