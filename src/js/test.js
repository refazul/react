import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import Gauth from './gauth';
import Dynamicform from './dynamicform';
import Datatable from './datatable';

import { user_get, user_set } from './user';
import { cause_search } from './cause';

const columns = [
	{ title: 'Serial' },
	{ title: 'Date' },
	{ title: 'case number' },
	{ title: 'case type' },
	{ title: 'court name' },
	{ title: 'judge name' },
	{ title: '' },
];

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	const [data, setData] = useState('');
	const [udata, setUdata] = useState({});
	const [result, setResult] = useState([]);
	useEffect(() => {
		cause_search({}).then((results) => {
			results = results.map(function (result) {
				return [result.serial, result.case_date, result.case_number, result.case_type, result.court_name, result.judge_name, ''];
			});
			setResult(results);
		});
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
				return [result.serial, result.case_date, result.case_number, result.case_type, result.court_name, result.judge_name, ''];
			});
			setResult(results);
		});
	}
	function dataupdated(update) {
		setData(update.join(','))
	}
	function addOnclick(data) {
		console.log(data);
	}

	return (
		<Router>
			<div className="wrapper">
				<Switch>
					<Route path="/path1">

					</Route>
					<Route path="/path2">

					</Route>
					<Route path="/path3">

					</Route>
					<Route path="/">
						Hello {data}
						<Gauth
							clientId="117738736195-o3lbfnbj4fj3689ggeec0u5o2lqqkko9.apps.googleusercontent.com"
							onLogin={responseGoogle}
							onLogout={responseGoogle}
							onFailure={responseGoogle}
						/>
						<div className={loggedin ? '' : 'hidden'}>
							<button onClick={save_onClick}>Submit</button>
						</div>
						<Datatable data={result} columns={columns} addOnclick={addOnclick} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
