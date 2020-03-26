import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Datatable from '../src/js/datatable';

const data1= [['T', 24], ['Z', 23]]
const column1 = [{title: 'Name'}, {title: 'Age'}]
const data2= [['M', 'MM'], ['Y', 'YY']]
const column2 = [{title: 'Model'}, {title: 'Style'}]

const Main = (props) => {
	const [data, setData] = useState(data1);
	const [column, setColumn] = useState(column1);
	setTimeout(() => {
		setData(data2);
		setColumn(column2);
	}, 5000)
	return (
		<div className="row">
			<Datatable data={data} columns={column}/>
		</div>
	);
}
ReactDOM.render(<Main />, document.querySelector("#main"))

