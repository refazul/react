import React from 'react';


const Menu = (props) => {

	return (
		<li>
			<a className="list-item" href="">
				<i className={props.icon}></i>
			</a>
		</li>
	)
};

const Tdsidebarmenu = (props) => {

	return (
		<div className="tdsidebarmenu">
			<ul>
				{
					props.items.map((item) => {
						return <Menu {...item} />
					})
				}
			</ul>
		</div>

	);
}

export default Tdsidebarmenu;
