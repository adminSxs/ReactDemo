import React from 'react';
import { Router,Route,hashHistory } from 'react-router';
import { IndexLink } from 'react-router';


import Hello from './Hello.js';
import Home from './Home.js';


class App extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {data:[]};

	}

	click(){
		let url = "/web/cms/home/getHomeVideo";
		var life =this;
			fetch(url).then(function(response){
				if(response.ok){
					response.json().then(function(d){
						
						life.setState({
							data: d.a
						});
						// this.setState.data = d.a;
					})
				}
			})
	}
	render(){
	
		return(
			
				<div style={styles.container}>
					<div  onClick={this.click.bind(this)} style={styles.buttom}>fetch{this.state.data.length}

					</div>

					<div style={styles.buttom}>
					<IndexLink to="/home/1688">Home{this.props.params.id}</IndexLink>
					</div>
					<div style={styles.buttom}>
					<IndexLink to="/hello/133">Hello{this.props.params.id}</IndexLink>
					</div>
				</div>
			
		);
	}
}

var  styles = {
	container:{
		backgroundColor:'red',
		color:'#fff',
		marginTop:"40px",
		marginButton:"10px",
	},
	buttom:{
		marginButton:"10px"
	}
}


module.exports = App;