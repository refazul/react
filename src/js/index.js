import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

function Carousel () {
	const [count, setCount] = useState(getCount());
	window.onresize = (event) => {
		setCount(getCount());
	}
	function getCount() {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return parseInt(w * 0.5 / 160);
	}
	return (
		<MultipleItems slidesToShow={count} />
	)
}

export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: this.props.slidesToShow,
			slidesToScroll: 3,
		};
		return (
			<div>
				<h2> Multiple items </h2>
				<Slider {...settings}>
					<div><h1>1</h1></div>
					<div><h1>2</h1></div>
					<div><h1>3</h1></div>
					<div><h1>4</h1></div>
					<div><h1>5</h1></div>
					<div><h1>6</h1></div>
					<div><h1>7</h1></div>
					<div><h1>8</h1></div>
				</Slider>
			</div>
		);
	}
}
ReactDOM.render(<Carousel />, document.querySelector("#carousel"))