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
									<th>Serial</th>
									<th>Casse Type</th>
									<th>Case Number</th>
									<th>Date</th>
									<th>Category</th>
								</tr>
							</thead>
							<tbody>
								{
									props.items.map((item) => {
										return (
											<tr>
												<td>{item.serial}</td>
												<td>{item.case_type}</td>
												<td>{item.case_number}</td>
												<td>{item.date}</td>
												<td>{item.category}</td>
											</tr>
										)
									})
								}

							</tbody>
							<tfoot>
								<tr>
								<th>Serial</th>
									<th>Casse Type</th>
									<th>Case Number</th>
									<th>Date</th>
									<th>Category</th>
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
