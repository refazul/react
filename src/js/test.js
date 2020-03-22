import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Gauth from './gauth'

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	useEffect(() => {

	}, []);
	function responseGoogle(response) {
		console.log(response);
		if (response && response.basicProfile) {
			setLoggedin(true);
		} else {
			setLoggedin(false);
		}
	}
	return (
		<div>
			<input type="text" className={loggedin ? '' : 'hidden'} />
			<Gauth
				clientId="117738736195-o3lbfnbj4fj3689ggeec0u5o2lqqkko9.apps.googleusercontent.com"
				onLogin={responseGoogle}
				onLogout={responseGoogle}
				onFailure={responseGoogle}
			/>,
		</div>
	);


}




ReactDOM.render(<Main />, document.querySelector("#main"))
