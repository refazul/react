import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Datatable from './datatable';

const set1= [{name: 'T', age: 24}, {name: 'Z', age: 23}]
const set2= [{model: 'M', style: 'MM'}, {model: 'Y', style: 'YY'}]

const Main = (props) => {
	return (
		<div className="row">
			<Datatable items={set2}/>
		</div>
	);
}
ReactDOM.render(<Main />, document.querySelector("#main"))

