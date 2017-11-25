import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

render(
	<Provider store={store}>
		<Router>
			{routes}
		</Router>
	</Provider>,
	document.getElementById('root')
);