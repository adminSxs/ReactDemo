import { render } from 'react-dom';
import React from 'react';

import Hello from './components/Hello.js';
import Home from './components/Home.js';
import App from './components/App.js';
import { Router,Route,hashHistory } from 'react-router';

render(
	<Router history={hashHistory}>
			<Route path="/" component={App}/>
			<Route path="/home/:id" component={Home}/>
			<Route path="/hello/:id" component={Hello}/>
			<Route path="/test" component={Hello}/>
	</Router>,
	document.getElementById('app')
	)