import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';

// Very important
$.slick = require('slick-carousel');

const Carousel = (props) => {
	const [count, setCount] = useState(0);
	const carouselref = useRef(null);
	useEffect(() => {
		// Multiple Times
	});
	useEffect(() => {
		// Just Once
		$(carouselref.current).slick({
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: true
		});
	}, []);
	return (
		<div ref={carouselref}>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/fonz1.png')"}} onClick={() => {setCount(count+1)}}>123</div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			<div><div className="image"><div className="imageinner" style={{backgroundImage: "url('img/lazyfonz6.png')"}}></div></div></div>
			
		</div>
	);
}
export default Carousel;
