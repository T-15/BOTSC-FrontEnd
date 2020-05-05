import React from 'react';
import { Link } from '@reach/router';

function Secondary (props) {
    return ( 
        <div className="header__secondary">
            <div className="container">
                <ul className="info-block info-block--header">
                    <li className="info-block__item info-block__item--contact-primary">
                        <svg role="img" className="df-icon df-icon--whistle">
                            <use xlinkHref={process.env.PUBLIC_URL + '/images/icons-soccer.svg#whistle'}/>
                        </svg>
                        <h6 className="info-block__heading">Join Our Team!</h6>
                        <Link to="/apply_for_membership" className="info-block__link"> Apply for Membership</Link>
                    </li>
                    <li className="info-block__item info-block__item--contact-secondary">
                        <svg role="img" className="df-icon df-icon--soccer-ball">
                            <use xlinkHref={process.env.PUBLIC_URL + '/images/icons-soccer.svg#soccer-ball'}/>
                        </svg>
                        <h6 className="info-block__heading">Contact Us</h6>
                        <a className="info-block__link" href="mailto:j.tinker30@hotmail.com">j.tinker30@hotmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Secondary;