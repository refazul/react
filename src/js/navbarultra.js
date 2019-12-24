import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
// Very important

const Subitem = (props) => {
	return (
		<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">{props.text}</a>
	)
}

const Tab = (props) => {
	return (
		<div className="tab-pane show active" id="news-0" role="tabpanel">
			<div className="row">
				<div className="col-3">

					<div>
						<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
							<img src="img/navultra/post-05.jpg" alt="IMG" />
						</a>
						<div className="p-t-10">
							<h5 className="p-b-5">
								<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
									Donec metus orci, malesuada et lectus vitae
											</a>
							</h5>
							<span className="cl8">
								<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
									Music
										</a>
								<span className="f1-s-3 m-rl-3">
									-
										</span>
								<span className="f1-s-3">
									Feb 18
										</span>
							</span>
						</div>
					</div>
				</div>
				<div className="col-3">

					<div>
						<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
							<img src="img/navultra/post-10.jpg" alt="IMG" />
						</a>
						<div className="p-t-10">
							<h5 className="p-b-5">
								<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
									Donec metus orci, malesuada et lectus vitae
</a>
							</h5>
							<span className="cl8">
								<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
									Finance
</a>
								<span className="f1-s-3 m-rl-3">
									-
</span>
								<span className="f1-s-3">
									Jan 15
</span>
							</span>
						</div>
					</div>
				</div>
				<div className="col-3">

					<div>
						<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
							<img src="img/navultra/post-14.jpg" alt="IMG" />
						</a>
						<div className="p-t-10">
							<h5 className="p-b-5">
								<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
									Donec metus orci, malesuada et lectus vitae
</a>
							</h5>
							<span className="cl8">
								<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
									Beach
</a>
								<span className="f1-s-3 m-rl-3">
									-
</span>
								<span className="f1-s-3">
									Feb 12
</span>
							</span>
						</div>
					</div>
				</div>
				<div className="col-3">

					<div>
						<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
							<img src="img/navultra/post-36.jpg" alt="IMG" />
						</a>
						<div className="p-t-10">
							<h5 className="p-b-5">
								<a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
									Donec metus orci, malesuada et lectus vitae
</a>
							</h5>
							<span className="cl8">
								<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
									Technology
</a>
								<span className="f1-s-3 m-rl-3">
									-
</span>
								<span className="f1-s-3">
									Jan 20
</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



const Item = (props) => {
	var items = props.items || [];
	var toplevel = props.toplevel;
	const [count, setCount] = useState(0);
	const dropdownref = useRef(null);
	useEffect(() => {
		// Multiple Times
		if (count % 2 == 0) {
			$(dropdownref.current).removeClass('open');
		} else {
			$(dropdownref.current).addClass('open');
		}
	});
	useEffect(() => {
		// Just Once
	}, []);
	function dropdownOnclick(e) {
		setCount(count + 1);
	}
	return (
		<li className="mega-menu-item">
			<a href="category-01.html">{props.text}</a>
			<div className="sub-mega-menu">
				<div className="nav flex-column nav-pills" role="tablist">
						{
							items.map((item) => {
								return <Subitem {...item} />
							})
						}
				</div>
				<div className="tab-content">
					<Tab/>
					<Tab/>
				</div>
			</div>
		</li>
	);
}


const Navbarultra = (props) => {
	var items = props.items || [];
	return (
		<div className="wrap-main-nav">
			<div className="main-nav show-main-nav">

				<nav className="menu-desktop">
					<a className="logo-stick" href="index.html">
						<img src="img/navultra/icons/logo-01.png" alt="LOGO" />
					</a>
					<ul className="main-menu">
						{
							items.map((item) => {
								return <Item {...item} />
							})
						}
					</ul>
				</nav>
			</div>
		</div>

	);
}
export default Navbarultra;
