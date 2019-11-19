import React from 'react';


const Subsubmenu = (props) => {
	const items = props.items || [];
	if (items.length > 0) {
		return (
			<ul>
				{
					items.map((item) => {
						return (
							<li>
								<a href={item.link}>{item.text}</a>
							</li>
						)
					})
				}
			</ul>
		);
	}
	return <div></div>
}

const Submenu = (props) => {
	const items = props.items || [];
	if (items.length > 0) {
		return (
			<ul className="fulldrop">
				{
					items.map((item) => {
						return (
							<li className="has-sub column">
								<a href={item.link}>{item.text}</a>
								<Subsubmenu {...item}/>
							</li>
						)
					})
				}
			</ul>
		);
	}
	return <div></div>
}

const Navigation = (props) => {

	return (
		<ul class="nav">
			{
				props.items.map((item) => {
					var class_name="";
					if (item.items && item.items.length > 0) {
						class_name += " dropdown has-sub";
					}
					return (
						<li className={class_name}>
							<a href={item.link}>{item.text}</a>
							<Submenu {...item}/>
						</li>
					)
				})
			}
			<li class="search">
				<form action="Search.php">
					<i class="icon-search icon-large"></i><input type="text"></input>
				</form>
			</li>
		</ul>

	);
}

export default Navigation;
