import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
// Very important

const Navbar = (props) => {
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
		setCount(count+1);
	}
	return (
		<div>
			<nav className="navbar navbar-default" role="navigation">

				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Brand</a>
				</div>

				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li className="dropdown" ref={dropdownref} onClick={dropdownOnclick}>
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Multi Level <b className="caret"></b></a>
							<ul className="dropdown-menu">
								<li><a href="#">Level 1</a></li>
								<li className="dropdown-submenu"> <a tabindex="-1" href="#">More options</a>
									<ul className="dropdown-menu">
										<li><a tabindex="-1" href="#">Level 2</a>
										</li>
										<li className="dropdown-submenu"> <a href="#">More..</a>
											<ul className="dropdown-menu">
												<li><a href="#">Level 3</a>
												</li>
												<li><a href="#">Level 3</a>
												</li>
												<li className="dropdown-submenu"> <a href="#">More..</a>
													<ul className="dropdown-menu">
														<li><a href="#">Level 4</a>
														</li>
														<li><a href="#">Level 4</a>
														</li>
														<li className="dropdown-submenu"> <a href="#">More..</a>
															<ul className="dropdown-menu">
																<li><a href="#">Level 5</a>
																</li>
																<li><a href="#">Level 5</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li><a href="#">Level 2</a>
										</li>
										<li><a href="#">Level 2</a>
										</li>
									</ul>
								</li>
								<li><a href="#">Level 1</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</div>

	);
}
export default Navbar;
