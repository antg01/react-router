import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () =>(
    <ul className='Header'>
    <li>
        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink activeClassName='active' to='/js'>Html</NavLink>
    </li>
    <li>
        <NavLink activeClassName='active' to='/css'>Css</NavLink>
    </li>
    <li>
        <NavLink activeClassName='active' to='/js'>Js</NavLink>
    </li>
    </ul>
)

export default Menu;