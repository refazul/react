import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Very important
$.DataTable = require('datatables.net');

const Datatable = (props) => {
	const columnDefs = [
		{
			targets: -1,
			createdCell: (td, cellData, rowData, row, col, full) => {
				/*
				if (cellData == '') {
					$(td).css('background-color', 'red')
				}
				*/
				ReactDOM.render(<button onClick={(e) => {props.addOnclick(rowData)}}>Add</button>, td);
			}
		}
	]
	const [count, setCount] = useState(0);
	const tableref = useRef(null);
	var table = null;

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
	return (
		<div style={{ backgroundColor: "white" }}>
			<table id="example1" className="table table-bordered table-striped" ref={tableref} onClick={() => { setCount(count + 1) }}>

			</table>
		</div>
	);
}
export default Datatable;
