import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Very important
$.DataTable = require('datatables.net');

const Datatable = (props) => {
	const tableref = useRef(null);
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
		props.addClick(rowData);
	}

	useEffect(() => {
		// Just Once
	}, []);
	useEffect(() => {
		// Multiple Times
		if (props.data.length < 1) {
			return;
		}
		$(tableref.current).DataTable({
			destroy: true,
			data: props.data,
			columns: props.columns,
			columnDefs: columnDefs
		});
	}, [props.data]);
	useEffect(() => {
		console.log('initdata changed', props.initialdata);
		setValues(props.initialdata);
	}, [props.initialdata]);
	return (
		<div style={{ backgroundColor: "white" }}>
			<table id="example1" className="table table-bordered table-striped" ref={tableref}>

			</table>
		</div>
	);
}
export default Datatable;
