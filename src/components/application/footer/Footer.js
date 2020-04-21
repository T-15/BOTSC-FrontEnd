import React, { Component } from 'react';
import { Link } from '@reach/router';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer id="footer" className="footer">
                <div class="footer-secondary">
                    <div class="container">
                        <div class="footer-secondary__inner">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="footer-copyright">Burlington Old Timers Soccer Club © 1985-2020</div>
                                </div>
                                <div class="col-md-8">
                                    <ul class="footer-nav footer-nav--right footer-nav--condensed footer-nav--sm">
                                        <li class="footer-nav__item"><Link to="/">Home</Link></li>
                                        <li class="footer-nav__item"><Link to="/about_us">About</Link></li>
                                        <li class="footer-nav__item"><Link to="/contact_us">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;