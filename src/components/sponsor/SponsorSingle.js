import React, { Component } from 'react';
import DefaultImg from '../../images/defaults/sponsor-sample-gray.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

class SponsorSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card sponsor-card">
                <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                        {this.props.sponsor.website_url ?
                            <a href={this.props.sponsor.website_url}>
                                {this.props.sponsor.image.url ?
                                    <img src={this.props.sponsor.image.url} alt="Sponsor Name #1"/>
                                :
                                    <img src={DefaultImg} alt="Sponsor Name #1"/> 
                                }
                            </a>
                        :
                            <img src={this.props.sponsor.image} alt="Sponsor Name #1"/>
                        }
                    </figure>
                </header>
                <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                        {this.props.sponsor.description}
                    </div>
                    <ul className="social-links sponsor-card__social">
                        {this.props.sponsor.facebook ?
                            <li className="social-links__item">
                                <a href={this.props.sponsor.facebook} className="social-links__link" title="Facebook">
                                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="fa" />
                                </a>
                            </li>
                        : null }

                        {this.props.sponsor.twitter ?
                            <li className="social-links__item">
                                <a href={this.props.sponsor.twitter} className="social-links__link" title="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" className="fa" />
                                </a>
                            </li>
                        : null }

                        {this.props.sponsor.instagram ?
                            <li className="social-links__item">
                                <a href={this.props.sponsor.instagram} className="social-links__link" title="Instagram">
                                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="fa" />
                                </a>
                            </li>
                        : null }

                        {this.props.sponsor.email ?
                            <li className="social-links__item">
                                <a href={"mailto:" + this.props.sponsor.email} className="social-links__link" title="Email">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="fa" />
                                </a>
                            </li>
                        : null }
                        
                        {this.props.sponsor.phone ?
                            <li className="social-links__item">
                                <a href={"tel:" + this.props.sponsor.phone} className="social-links__link" title="Phone">
                                    <FontAwesomeIcon icon={faPhone} size="2x" className="fa" />
                                </a>
                            </li>
                        : null }
                    </ul>
                </div>
                {this.props.sponsor.website_url ?
                    <footer className="card__footer sponsor-card__footer">
                        Website: <a href={this.props.sponsor.website_url} className="sponsor-card__link">{this.props.sponsor.website_url}</a>
                    </footer>
                : null }
            </div>
        );
    }
}
 
export default SponsorSingle;