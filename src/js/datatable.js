import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';

// Very important
$.DataTable = require('datatables.net');

const Datatable = (props) => {
	const [count, setCount] = useState(0);
	const tableref = useRef(null);
	useEffect(() => {
		// Multiple Times
	});
	useEffect(() => {
		// Just Once
		$(tableref.current).DataTable();
	}, []);
	function x(items = []) {
		if (items.length > 0) {
			var item = items[0];
			var keys = [];
			for (var i in item) {
				keys.push(i);
			}
			keys = keys.map(function (key) {
				return <th>{key}</th>;
			})
			return keys;
		}
		return <th></th>;
	}
	function y(item) {
		var keys = [];
		for (var i in item) {
			keys.push(i);
		}
		keys = keys.map(function (key) {
			return <td>{item[key]}</td>;
		})
		return keys;
	}
	return (
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card-header">
						<h3 className="card-title">DataTable with default features</h3>

					</div>
					<div className="card-body ">

						<table id="example1" class="table table-bordered table-striped" ref={tableref} onClick={() => { setCount(count + 1) }}>
							<thead>
								<tr>
									{x(props.items)}
								</tr>
							</thead>
							<tbody>
								{
									props.items.map((item) => {
										return (
											<tr>
												{y(item)}
											</tr>
										)
									})
								}
							</tbody>
							<tfoot>
								<tr>
									{x(props.items)}
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Datatable;
