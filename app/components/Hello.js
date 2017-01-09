import React from 'react';
import { IndexLink } from 'react-router';
import style from '../css/styles.js';

 class Hello extends React.Component{ 

	
	render(){
		return(
			<div style={style.container}>this is hello page
			<div>
				<IndexLink to="/">index</IndexLink>	
			</div>
			<div>
				<IndexLink to="/home/1688">home {this.props.params.id}</IndexLink>	
			</div>
			</div>
		)
	}

}

module.exports = Hello;