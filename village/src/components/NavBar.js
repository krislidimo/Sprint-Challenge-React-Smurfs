import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const NavBar = props => {
	return (
		<div className = 'nav-bar'>
			<NavLink to={'/'}>Smurfs</NavLink>
			<NavLink to={'/smurf-form'}>Add/Update Smurf</NavLink>
		</div>
	);
}

export default NavBar;