import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Gauth from './gauth';
import { user_get, user_set } from './user';
import Dynamicform from './dynamicform';
import { cause_search } from './cause';
import Datatable from './datatable';

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	const [data, setData] = useState('');
	const [udata, setUdata] = useState({});
	const [result, setResult] = useState([]);
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
		cause_search({ case_numbers: data }).then((results) => {
			results = results.map(function (result) {
				return {
					case_number: result.case_number,
					case_type: result.case_type,
					court_name: result.court_name,
					judge_name: result.judge_name
				}
			})
			setResult(results);
		});
	}
	function dataupdated(update) {
		setData(update.join(','))
	}

	return (
		<div>
			Hello {data}
			<Gauth
				clientId="117738736195-o3lbfnbj4fj3689ggeec0u5o2lqqkko9.apps.googleusercontent.com"
				onLogin={responseGoogle}
				onLogout={responseGoogle}
				onFailure={responseGoogle}
			/>
			<div className={loggedin ? '' : 'hidden'}>
				<Dynamicform initialdata={data} dataupdated={dataupdated} />
				<button onClick={save_onClick}>Submit</button>
			</div>
			<Datatable items={result} />
		</div>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
