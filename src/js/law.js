import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import Datatable from './datatable';

// Very important
$.DataTable = require('datatables.net');

const Law = (props) => {
	const tableref = useRef(null);
	useEffect(() => {
		// Multiple Times
	});
	useEffect(() => {
		// Just Once
		$(tableref.current).DataTable();
	}, []);
	return (
		<Datatable items={props.data}></Datatable>
	);
}
export default Law;
