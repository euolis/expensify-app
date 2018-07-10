import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Exspensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Exspense</NavLink>        
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;