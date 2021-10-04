import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.scss';
import logo from '../../bblogo.png';

export const Header = () => {
    return (
        <div className="header__container">
            <Link to="/">
                <img src={logo} alt="site-logo" className="header__container-logo" />
            </Link>
            <div className="header__container-menu">
                <NavLink to="/" exact>
                    Home
                </NavLink>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/episods">Episodes</NavLink>
            </div>
        </div>
    );
};
