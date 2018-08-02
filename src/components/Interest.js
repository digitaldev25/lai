import React, { Component } from 'react';

class Interest extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5 text-font">
						<h1 className="name text-warning">INTEREST</h1>
						<p className="text-muted">Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
						<p className="text-muted">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
					</div>
                </main>		
			</React.Fragment>
		);
	}
}

export default Interest;