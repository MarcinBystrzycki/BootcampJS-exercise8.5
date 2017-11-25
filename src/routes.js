import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './presentational/navigation.component.js';
import Home from './presentational/home.component.js';
import Contact from './presentational/contact.component.js';
import NotFound from './presentational/not-found.component.js';

export default (
	<div>
		<Route path='/' component={Navigation} />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/contact' component={Contact} />
			<Route component={NotFound} />
		</Switch>
	</div>
);