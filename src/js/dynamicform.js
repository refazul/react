import React, { useState, useEffect } from "react";

const Dynamicform = (props) => {
	const [values, setValues] = useState(props.initialdata.split(','));
	function handleChange(i, e) {
		let new_values = values;
		new_values[i] = e.target.value;
		setValues(new_values);
		props.dataupdated(new_values);
	}
	function addClick() {
		let new_values = values;
		new_values.push('');
		setValues(new_values);
		props.dataupdated(new_values);
	}
	function removeClick(i) {
		let new_values = values;
		new_values.splice(i, 1);
		setValues(new_values);
		props.dataupdated(new_values);
	}
	useEffect(() => {
		setValues(props.initialdata.split(','));
	}, [props.initialdata]);
	return (
		<div>
			{
				values.map((el, i) =>
					<div key={i}>
						<input type="text" value={el || ''} onChange={(e) => { handleChange(i, e) }} />
						<input type='button' value='remove' onClick={(e) => { removeClick(i) }} />
					</div>
				)
			}
			<input type='button' value='add more' onClick={addClick} />
		</div>
	);
}

export default Dynamicform;