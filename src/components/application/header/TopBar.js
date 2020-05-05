import React, { Component } from 'react';
// import { Link } from '@reach/router';
import { Link } from "react-router-dom";
import { useAuth0 } from "../../../react-auth0-spa";

const TopBar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return ( 
        <div className="header__top-bar clearfix">
            <div className="container">
                <div className="header__top-bar-inner">
                    <ul className="nav-account">
                        <li className="nav-account__item">
                            <Link to="/member_services">Member Services</Link>
                        </li>

                        <li className="nav-account__item">
                            <Link to="/sponsors">Sponsors</Link>
                        </li>

                        <li className="nav-account__item">
                            <Link to="/fields">Field Locations</Link>
                        </li>

                        <li className="nav-account__item">
                            <Link to="/constitution">Constitution</Link>
                        </li>
                        {!isAuthenticated && (
                            <button onClick={() => loginWithRedirect({})}>Log in</button>
                        )}

                        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;