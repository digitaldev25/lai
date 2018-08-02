import React, { Component } from 'react';

class Experience extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5 text-center w-100 text-font">
						<h1 className="ex"><span className="text-success">HIRE</span> ME!</h1>
						<h1 className="ex">And <span className="text-info">I'll</span> tell <span className="text-danger">you!</span></h1>
					</div>
                </main>	
			</React.Fragment>
		);
	}
}

export default Experience;