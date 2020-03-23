import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Gauth from './gauth';
import { user_get, user_set } from './user';

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	const [data, setData] = useState('');
	const [udata, setUdata] = useState({});
	useEffect(() => {

	}, []);
	function responseGoogle(response) {
		if (response && response.user_id && response.user_token) {
			setLoggedin(true);
			var user_id = response.user_id;
			var user_token = response.user_token;

			user_get({ user_id, user_token }, function (user) {
				setUdata({ user_id, user_token });
				setData(user.data);
			});
		} else {
			setLoggedin(false);
			setUdata({});
			setData('');
		}
	}
	function save_onClick() {
		var user_id = udata.user_id;
		var user_token = udata.user_token;

		user_set({ user_id, user_token, data }, function (user) {
			setData(user.data);
		});
	}
	function handleChange(e) {
		var data = e.target.value;
		setData(data);
	}
	return (
		<div>
			<input type="text" className={loggedin ? '' : 'hidden'} defaultValue={data} onChange={handleChange} />
			<Gauth
				clientId="117738736195-o3lbfnbj4fj3689ggeec0u5o2lqqkko9.apps.googleusercontent.com"
				onLogin={responseGoogle}
				onLogout={responseGoogle}
				onFailure={responseGoogle}
			/>,
			<button onClick={save_onClick}>Submit</button>
			Hello {data}
		</div>
	);


}




ReactDOM.render(<Main />, document.querySelector("#main"))
