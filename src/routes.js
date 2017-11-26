import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './presentational/navigation.component.js';
import Home from './presentational/home.component.js';
import Contact from './presentational/contact.component.js';
import NotFound from './presentational/not-found.component.js';
import CountryFlagContainer from './containers/flag-container.component.js';
import CountryDetailsContainer from './containers/country-details-container.component.js';
import ContinentsContainer from './containers/continents-container.component.js';

export default (
	<div>
		<Route path='/' component={Navigation} />
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/countries' component={CountryFlagContainer} />
			<Route path='/countries/country/:id' component={CountryDetailsContainer} />
			<Route exact path='/continents' component={ContinentsContainer}/>
			<Route exact path='/contact' component={Contact} />
			<Route component={NotFound} />
		</Switch>
	</div>
);