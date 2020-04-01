import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import Gauth from './gauth';
import Datatable from './datatable';

import { user_get, user_set } from './user';
import { cause_search } from './cause';

import { Framer } from './framer';

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
	const [count, setCount] = useState(0);
	const [option, setOption] = useState({ term: '', offset: 0 });
	useEffect(() => {

	}, []);

	function setSearch(search) {
		clearTimeout(window.search_timer);
		window.search_timer = setTimeout(() => {
			setOption(option => Object.assign({}, option, { 'term': search, offset: 0 }))
		}, 1000)
	}
	function pageClick(offset) {
		setOption(option => Object.assign({}, option, { offset: offset }))
	}
	function responseGoogle(response) {
		if (response && response.user_id && response.user_token) {
			var user_id = response.user_id;
			var user_token = response.user_token;

			user_get({ user_id, user_token }, function (user) {
				setLoggedin(true);
				setUdata({ user_id, user_token });
				setData(user.data || '');
			});
		} else {
			setLoggedin(false);
			setUdata({});
			setData('');
		}
	}
	useEffect(() => {
		var user_data_ids = [];
		try {
			user_data_ids = JSON.parse(data);
		} catch (e) { }
		user_data_ids = user_data_ids.filter(function (r) {
			return typeof r['case_type'] === 'string' && typeof r['case_number'] === 'string' && r['case_type'].length > 1 && r['case_number'].length > 1
		});
		console.log('user_data_ids', user_data_ids);
		cause_search({ case_numbers: option.term, offset: option.offset }).then((response) => {
			var results = response.data;
			var count = response.count;
			setCount(count);
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
	}, [option])

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
		var existing_data = [];

		try {
			existing_data = JSON.parse(data);
		} catch (e) { }

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
		var existing_data = [];

		try {
			existing_data = JSON.parse(data);
		} catch (e) { };
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
						<Framer />
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
						<Datatable items={result} count={count} offset={option.offset} pagesize={1000} columns={columns} addClick={addClick} removeClick={removeClick} setSearch={setSearch} pageClick={pageClick} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Main />, document.querySelector("#main"))
