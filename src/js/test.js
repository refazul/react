import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import Gauth from './gauth';
import Dynamicform from './dynamicform';
import Datatable from './datatable';

import { user_get, user_set } from './user';
import { cause_search } from './cause';

const columns = [
	{ id: 'serial', title: 'Serial' },
	{ id: 'case_date', title: 'Date' },
	{ id: 'case_number', title: 'case number' },
	{ id: 'case_type', title: 'case type' },
	{ id: 'court_name', title: 'court name' },
	{ id: 'judge_name', title: 'judge name' }
];

const Main = (props) => {
	const [loggedin, setLoggedin] = useState(false);
	const [data, setData] = useState('');
	const [udata, setUdata] = useState({});
	const [result, setResult] = useState([]);
	useEffect(() => {
		cause_search({}).then((results) => {
			/*
			results = results.map(function (result) {
				return { serial: result.serial, case_date: result.case_date, case_number: result.case_number, case_type: result.case_type, court_name: result.court_name, judge_name: result.judge_name };
			});
			*/
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
				setData(user.data || '');
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
			setData(user.data || '');
		});
		/*
		cause_search({ case_numbers: data }).then((results) => {
			results = results.map(function (result) {
				return [result.serial, result.case_date, result.case_number, result.case_type, result.court_name, result.judge_name, ''];
			});
			setResult(results);
		});
		*/
	}
	function addClick(rowData) {
		console.log('addClick', rowData);
		//setData(values => values.split(',').concat(rowData[2]).join(','));
		setResult(results => results.map(function (result) {
			if (result['_id'] == rowData['_id']) {
				if (result['selected'] == 'yes') {
					return { ...result, 'selected': 'no' }
				}
				return { ...result, 'selected': 'yes' }
			}
			return result;
		}));
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
						<Datatable items={result} columns={columns} addClick={addClick} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
