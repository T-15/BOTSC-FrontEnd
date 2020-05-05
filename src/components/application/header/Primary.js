import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import crest from '../../../images/crest-500-trans.png';

function Primary (props) {
    return (
        <div className="header__primary">
            <div className="container">
                <div className="header__primary-inner">

                    <div className="header-logo">
                        <Link to="/">
                            <img src={crest} srcSet={crest} width="148" alt="Alchemists" className="header-logo__img"/>
                        </Link>
                    </div>

                    <nav className="main-nav clearfix">
                        <ul className="main-nav__list">
                            <div className="header-mobile__logo">
                                <span className="main-nav__back"></span>
                                <Link to="/">
                                    <img src={crest} srcSet={crest} width="148" alt="Alchemists" className="header-mobile__logo-img"/>
                                </Link>
                            </div>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {props.season ?
                                <li className="has-children">
                                    <span className="main-nav__toggle"></span>
                                        <Link to="/season">{props.season.year} - Teams</Link>
                                    
                                    <ul className="main-nav__sub">
                                        {props.season.divisions.map( division => (
                                            <li key={division.id} className="has-children">
                                                <span className="main-nav__toggle-2"></span>
                                                <Link to={"/division/" + division.id}>{division.name}</Link>
                                                <ul className="main-nav__sub-2">
                                                    {division.teams.map( team => (
                                                        <li key={team.id}>
                                                            <Link to={"/team/" + team.id}>{team.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            : null }
                            <li>
                                <Link to="/about_us">About</Link>
                            </li>
                            <li>
                                <Link to="/contact_list">Contact</Link>
                            </li>
                        </ul>

                        <ul className="social-links social-links--inline social-links--main-nav">
                            <li className="social-links__item">
                                <a href="https://www.facebook.com/groups/BurlingtonOldTimersSoccerClub/" className="social-links__link" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                </a>
                            </li>
                        </ul>

                        {/*<a href="#" id="pushy-panel__toggle">
                            <span className="pushy-panel__line"></span>
                        </a>*/}
                    </nav>
                </div>
            </div>
        </div>
    )
}
 
export default Primary;