import React, { useState } from 'react';

const Datatable = (props) => {
	const [value, setValue] = useState('');
	function addClick(rowData) {
		props.addClick(rowData);
	}
	function removeClick(rowData) {
		props.removeClick(rowData);
	}
	function onChange(e) {
		setValue(e.target.value);
		props.setSearch(e.target.value);
	}
	function pageClick(offset) {
		props.pageClick(offset * props.pagesize);
	}
	return (
		<div style={{ backgroundColor: "white" }}>
			<input className="form-control" type="text" placeholder="Search" aria-label="Search" value={value} onChange={onChange}></input>
			<div className="form-control float-left">Showing {props.offset} to {Math.min(props.count, props.offset + (props.pagesize - 1))} of {props.count} entries</div>
			<nav>
				<ul className="pagination justify-content-end">
					<li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
					{
						Array(Math.ceil(props.count / props.pagesize)).fill().map((_, i) => {
							return <li key={i} className="page-item"><a className="page-link" href="#" onClick={(e) => pageClick(i)}>{i}</a></li>
						})
					}
					<li className="page-item"><a className="page-link" href="#">Next</a></li>
				</ul>
			</nav>
			<table className="table table-bordered table-hover">
				<thead>
					<tr>
						{
							props.columns.map((column, i) => {
								return <th data-key={'h-' + i} key={'h-' + i}>{column['title']}</th>
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						props.items.map((row, i) => {
							return (
								<tr className={(row['selected'] == 'yes') ? 'table-success' : ''} data-key={'r-' + i} key={'r-' + i} onClick={(e) => { row['selected'] == 'yes' ? removeClick(row) : addClick(row) }}>
									{
										props.columns.map((column, j) => {
											return <td data-key={'c-' + i + j} key={'c-' + i + j}>{row[column['id']]}</td>
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	);
}
export default Datatable;
