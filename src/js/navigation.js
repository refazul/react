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
const FullDrop = (props) => {
	const items = props.items || [];
	if (items.length > 0) {
		return (
			<div class="fulldrop">
				{
					items.map((item) => {
						return (
							<div className="column">
								<h3>{item.text}</h3>
								<Subsubmenu {...item}/>
							</div>
						)
					})
				}
			</div>
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
						class_name += " dropdown ";
					}
					return (
						<li className={class_name}>
							<a href={item.link}>{item.text}</a>
							<FullDrop {...item}/>
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
