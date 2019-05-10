import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const NavBar = props => {
	return (
		<div className = 'nav-bar'>
			<NavLink className='nav-link' exact to={'/'}>Smurfs</NavLink>
			<NavLink className='nav-link' to={'/smurf-form'}>Add/Update Smurf</NavLink>
		</div>
	);
}

export default NavBar;