import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top sideNav">
					<div className="text-font">
						<img className="img-fluid img-profile rounded-circle mx-auto mb-2 avt" alt="" src="https://static.topcv.vn/avatars/IXYHq3CymQGDJ2IUVxNN_5b3cd402814ba_cvtpl.jpg?1533132459" />
						<ul >
							<li><Link to="/">ABOUT</Link></li>
							<li><Link to="/experience">EXPERIENCE</Link></li>
							<li><Link to="/education">EDUCATION</Link></li>
							<li><Link to="/skill">SKILLS</Link></li>
							<li><Link to="/interest">INTEREST</Link></li>
						</ul>
					</div>
				</nav>				
			</React.Fragment>
		);
	}
}

export default Nav;
