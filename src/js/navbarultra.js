import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
// Very important

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
		<li className={toplevel & items.length > 0 ? "dropdown" : (items.length > 0 ? "dropdown-submenu" : "")} ref={dropdownref} onMouseEnter={dropdownOnclick} onMouseLeave={dropdownOnclick}>
			<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				{props.text}
				{
					toplevel && items.length > 0 ? <b className="caret"></b> : <b></b>
				}
			</a>
			<ul className={items.length > 0 ? "dropdown-menu" : ""}>
				{
					items.map((item) => {
						return <Item {...item} />
					})
				}
			</ul>
		</li>
	);
}


const Navbarultra = (props) => {
	var items = props.items;
	return (
		<div className="wrap-main-nav">
			<div className="main-nav show-main-nav">

				<nav className="menu-desktop">
					<a className="logo-stick" href="index.html">
						<img src="img/navultra/icons/logo-01.png" alt="LOGO" />
					</a>
					<ul className="main-menu">
						<li className="main-menu-active">
							<a href="index.html">Home</a>
							<ul className="sub-menu">
								<li><a href="index.html">Homepage v1</a></li>
								<li><a href="home-02.html">Homepage v2</a></li>
								<li><a href="home-03.html">Homepage v3</a></li>
							</ul>
						</li>
						<li className="mega-menu-item">
							<a href="category-01.html">News</a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
									<a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
									<a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
									<a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
									<a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
									<a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
								</div>
								<div className="tab-content">
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
									<div className="tab-pane" id="news-1" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-50.jpg" alt="IMG" />
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
														<img src="img/navultra/post-08.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-07.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-06.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="news-2" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-21.jpg" alt="IMG" />
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
														<img src="img/navultra/post-24.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-22.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-23.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="news-3" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-25.jpg" alt="IMG" />
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
														<img src="img/navultra/post-27.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-26.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-34.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="news-4" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-35.jpg" alt="IMG" />
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
																Music
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
														<img src="img/navultra/post-37.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-38.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="news-5" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-39.jpg" alt="IMG" />
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
														<img src="img/navultra/post-41.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-42.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-40.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="mega-menu-item">
							<a href="category-02.html">Entertainment </a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
									<a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
									<a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
								</div>
								<div className="tab-content">
									<div className="tab-pane show active" id="enter-1" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-25.jpg" alt="IMG" />
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
														<img src="img/navultra/post-27.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-26.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-34.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="enter-2" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-35.jpg" alt="IMG" />
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
																Music
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
														<img src="img/navultra/post-37.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-38.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="enter-3" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-39.jpg" alt="IMG" />
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
														<img src="img/navultra/post-41.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-42.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-40.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="mega-menu-item">
							<a href="category-01.html">Business</a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#business-1" role="tab">All</a>
									<a className="nav-link" data-toggle="pill" href="#business-2" role="tab">Economy</a>
								</div>
								<div className="tab-content">
									<div className="tab-pane show active" id="business-1" role="tabpanel">
										<div className="row">
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
														<img src="img/navultra/post-11.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-26.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-34.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="business-2" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-35.jpg" alt="IMG" />
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
																Music
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
														<img src="img/navultra/post-37.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-38.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="mega-menu-item">
							<a href="category-02.html">Travel</a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#travel-1" role="tab">All</a>
									<a className="nav-link" data-toggle="pill" href="#travel-2" role="tab">Hotels</a>
								</div>
								<div className="tab-content">
									<div className="tab-pane show active" id="travel-1" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-39.jpg" alt="IMG" />
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
														<img src="img/navultra/post-41.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-42.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-40.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="travel-2" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-35.jpg" alt="IMG" />
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
																Music
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
														<img src="img/navultra/post-37.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-38.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="mega-menu-item">
							<a href="category-01.html">Life Style</a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#life-1" role="tab">All</a>
								</div>
								<div className="tab-content">
									<div className="tab-pane show active" id="life-1" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-25.jpg" alt="IMG" />
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
														<img src="img/navultra/post-27.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-26.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-34.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="mega-menu-item">
							<a href="category-02.html">Video</a>
							<div className="sub-mega-menu">
								<div className="nav flex-column nav-pills" role="tablist">
									<a className="nav-link active" data-toggle="pill" href="#video-1" role="tab">All</a>
								</div>
								<div className="tab-content">
									<div className="tab-pane show active" id="video-1" role="tabpanel">
										<div className="row">
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-50.jpg" alt="IMG" />
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
														<img src="img/navultra/post-08.jpg" alt="IMG" />
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
																Feb 12
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-07.jpg" alt="IMG" />
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
																Jan 20
</span>
														</span>
													</div>
												</div>
											</div>
											<div className="col-3">

												<div>
													<a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
														<img src="img/navultra/post-06.jpg" alt="IMG" />
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
																Jan 15
</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="#">Features</a>
							<ul className="sub-menu">
								<li><a href="category-01.html">Category Page v1</a></li>
								<li><a href="category-02.html">Category Page v2</a></li>
								<li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
								<li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
								<li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
								<li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
								<li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
								<li><a href="about.html">About Us</a></li>
								<li><a href="contact.html">Contact Us</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>

	);
}
export default Navbarultra;
