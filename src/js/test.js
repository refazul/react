import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Gauth from './gauth';
import { user_get } from './user';

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	const [data, setData] = useState('');
	useEffect(() => {

	}, []);
	function responseGoogle(response) {
		if (response && response.user_id && response.user_token) {
			setLoggedin(true);
			var user_id = response.user_id;
			var user_token = response.user_token;
			user_get({ user_id, user_token }, function (user) {
				setData(user.data);
			});
		} else {
			setLoggedin(false);
			setData('');
		}
	}
	return (
		<div>
			<input type="text" className={loggedin ? '' : 'hidden'} value={data} />
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
