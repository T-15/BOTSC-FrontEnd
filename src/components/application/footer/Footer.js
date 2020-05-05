import React from 'react';
import { Link } from '@reach/router';

function Footer (props) {
    return ( 
        <footer id="footer" className="footer">
            <div className="footer-secondary">
                <div className="container">
                    <div className="footer-secondary__inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-copyright">Burlington Old Timers Soccer Club © 1985-2020</div>
                            </div>
                            <div className="col-md-8">
                                <ul className="footer-nav footer-nav--right footer-nav--condensed footer-nav--sm">
                                    <li className="footer-nav__item"><Link to="/">Home</Link></li>
                                    <li className="footer-nav__item"><Link to="/about_us">About</Link></li>
                                    <li className="footer-nav__item"><Link to="/contact_us">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;