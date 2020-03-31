import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Very important
$.DataTable = require('datatables.net');

const Datatable = (props) => {
	var table = null;
	const [values, setValues] = useState([]);
	const columnDefs = [
		{
			targets: -1,
			createdCell: (td, cellData, rowData, row, col, full) => {
				/*
				if (cellData == '') {
					$(td).css('background-color', 'red')
				}
				*/
				ReactDOM.render(<button onClick={(e) => { addClick(rowData) }}>Add</button>, td);
			}
		}
	];
	function addClick(rowData) {
		let new_values = values;
		new_values.push(rowData[2]);
		setValues(new_values);
		props.dataupdated(new_values);
	}

	useEffect(() => {
		// Just Once
	}, []);
	useEffect(() => {
		// Multiple Times
		if (props.data.length < 1) {
			return;
		}
		table = $(tableref.current).DataTable({
			destroy: true,
			data: props.data,
			columns: props.columns,
			columnDefs: columnDefs
		});
	}, [props.data]);
	useEffect(() => {
		setValues(props.initialdata);
	}, [props.initialdata]);
	return (
		<div style={{ backgroundColor: "white" }}>
			<table id="example1" className="table table-bordered table-striped" ref={tableref} onClick={() => { setCount(count + 1) }}>

			</table>
		</div>
	);
}
export default Datatable;
