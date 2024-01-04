import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonBorder from './buttons/ButtonBorder';

const Header = () => {
  return (
   
    <nav className=" py-4 flex justify-evenly items-center">
      <Link to='/'><span className=''>Logo</span></Link>
       <ul className="flex justify-center items-center gap-7">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName=" font-bold "
            className="hover:font-bold" >
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/contact"
            activeClassName=" font-bold "
            className="hover:font-bold"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      
      <ButtonBorder text='Get Started'/>
    </nav>
  );
};

export default Header;
