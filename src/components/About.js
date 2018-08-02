import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5 text-font">
						<h1 className="name">NGUYỄN <span className="text-primary">HỮU LAI</span></h1>
						<h3 className="mb-4">District 9, HO CHI MINH City - (+84)97 111 2946 - huulai2510@gmail.com</h3>
						<p className="mb-4">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
						<ul className="list-inline list-social-icons mb-0">
							<li className="list-inline-item">
								<a href="">
									<img src="http://icons.iconarchive.com/icons/martz90/circle/256/fb-icon.png" alt="" className="icon"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" alt="" className="icon"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png" alt="" className="icon"/>
								</a>
							</li>
						</ul>
					</div>
                </main>		
			</React.Fragment>
		);
	}
}

export default About;