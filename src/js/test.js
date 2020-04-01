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

	function setSearch(search) {
		clearTimeout(window.search_timer);
		window.search_timer = setTimeout(() => {
			result_data_set(data, search);
		}, 1000)
	}
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
	function result_data_set(user_data, search = '') {
		var user_data_ids = [];
		try {
			user_data_ids = JSON.parse(user_data);
		} catch (e) { }
		user_data_ids = user_data_ids.filter(function (r) {
			return typeof r['case_type'] === 'string' && typeof r['case_number'] === 'string' && r['case_type'].length > 1 && r['case_number'].length > 1
		});
		console.log('user_data_ids', user_data_ids);
		cause_search({ case_numbers: search }).then((results) => {
			results = results.map(function (result) {
				var found = false;
				for (var i = 0; i < user_data_ids.length; i++) {
					if (user_data_ids[i]['case_type'] == result['case_type'] && user_data_ids[i]['case_number'] == result['case_number']) {
						found = true;
						break;
					}
				}
				if (found) {
					return { ...result, 'selected': 'yes' };
				}
				return { ...result, 'selected': 'no' };
			});
			setResult(results);
		});
	}

	function addClick(rowData) {
		console.log('addClick', rowData);
		setResult(results => results.map(function (result) {
			if (result['case_number'] == rowData['case_number'] && result['case_type'] == rowData['case_type']) {
				return { ...result, 'selected': 'yes' };
			}
			return { ...result };
		}));
		user_data_add(rowData);
	}
	function removeClick(rowData) {
		console.log('removeClick', rowData);
		setResult(results => results.map(function (result) {
			if (result['case_number'] == rowData['case_number'] && result['case_type'] == rowData['case_type']) {
				return { ...result, 'selected': 'no' };
			}
			return { ...result };
		}));
		user_data_remove(rowData);
	}
	function user_data_add(rowData) {
		var user_id = udata.user_id;
		var user_token = udata.user_token;
		var existing_data = JSON.parse(data);

		var found = existing_data.filter(function (e) {
			return (e['case_number'] == rowData['case_number'] && e['case_type'] == rowData['case_type']);
		});
		if (found.length > 0) {
			console.log('nothing to add', found);
		} else {
			console.log('user_data_add', rowData);
			var combined_data = existing_data.concat({ case_number: rowData['case_number'], case_type: rowData['case_type'] });
			combined_data = JSON.stringify(combined_data);
			setData(combined_data);
			user_set({ user_id, user_token, data: combined_data });
		}
	}
	function user_data_remove(rowData) {
		var user_id = udata.user_id;
		var user_token = udata.user_token;
		var existing_data = JSON.parse(data);

		var new_data = existing_data.filter(function (e) {
			if (e['case_number'] == rowData['case_number'] && e['case_type'] == rowData['case_type']) {
				return false;
			}
			return true;
		});
		setData(JSON.stringify(new_data));
		user_set({ user_id, user_token, data: JSON.stringify(new_data) });
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
						<Datatable items={result} columns={columns} addClick={addClick} removeClick={removeClick} setSearch={setSearch} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
