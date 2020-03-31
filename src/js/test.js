import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import Gauth from './gauth';
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

	}, []);
	useEffect(() => {
		console.log('result changed', result.length);
		var new_data = result.filter(function (r) {
			return r.selected == 'yes';
		});
		new_data = new_data.map(function (r) {
			return { _id: r._id, case_type: r.case_type, case_number: r.case_number }
		});
		user_data_set(new_data);
	}, [result])

	function responseGoogle(response) {
		if (response && response.user_id && response.user_token) {
			setLoggedin(true);
			var user_id = response.user_id;
			var user_token = response.user_token;

			user_get({ user_id, user_token }, function (user) {
				setUdata({ user_id, user_token });
				setData(user.data || '');
				result_data_set(user.data);
			});
		} else {
			setLoggedin(false);
			setUdata({});
			setData('');
		}
	}
	function result_data_set(user_data) {
		var user_data_ids = [];
		try {
			user_data = JSON.parse(user_data);
			user_data_ids = user_data.map(function (r) {
				return r['_id'];
			});
		} catch (e) { }
		user_data_ids = user_data_ids.filter(function (r) {
			return typeof r === 'string' && r.length > 1
		});
		console.log('user_data_ids', user_data_ids);
		cause_search({}).then((results) => {
			results = results.map(function (result) {
				if (user_data_ids.indexOf(result['_id']) > -1) {
					return { ...result, 'selected': 'yes' };
				}
				return { ...result, 'selected': 'no' };
			});
			setResult(results);
		});
	}
	function user_data_set(new_data) {
		var user_id = udata.user_id;
		var user_token = udata.user_token;
		var data = JSON.stringify(new_data);

		setData(data);
		user_set({ user_id, user_token, data });
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
		setResult(results => results.map(function (result) {
			if (result['_id'] == rowData['_id']) {
				if (result['selected'] == 'yes') {
					return { ...result, 'selected': 'no' };
				}
				return { ...result, 'selected': 'yes' };
			}
			return { ...result };
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
						<Datatable items={result} columns={columns} addClick={addClick} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
