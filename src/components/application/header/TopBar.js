import React, { Component } from 'react';
import { Link } from '@reach/router';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default TopBar;