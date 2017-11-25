import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
	<div>
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<NavLink className="navbar-brand" to="/">Państwa.js</NavLink>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><NavLink to="/countries">Countries</NavLink></li>
						<li><NavLink to="/continents">Continents</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>
		<div className="container-fluid">
			{props.children}
		</div>
	</div>
);

export default Navigation;