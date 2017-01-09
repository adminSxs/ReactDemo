import React from 'react';
import { IndexLink } from 'react-router';

class Home extends React.Component{


	clickButton(){
		console.log("click me....");
	}

	render(){
		return(

			<div >
			this is home page
			<div>
				<IndexLink to="/">index</IndexLink>	
			</div>
			<div>
				<IndexLink to="/hello/3105">hello{this.props.params.id}</IndexLink>	
			</div>


			</div>
		)
	}

}

module.exports = Home;