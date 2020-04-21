import React, { Component } from 'react';
import DefaultImg from '../../images/defaults/sponsor-sample-gray.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

class MemberServiceSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card sponsor-card">
                <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                        {this.props.member_service.website_url ?
                            <a href={this.props.member_service.website_url} target="_blank" rel="noopener noreferrer">
                                {this.props.member_service.image.url ?
                                    <img src={this.props.member_service.image.url} alt="Sponsor Name #1"/>
                                :
                                    <img src={DefaultImg} alt="Sponsor Name #1"/> 
                                }
                            </a>
                        :
                            <img src={this.props.member_service.image} alt="Sponsor Name #1"/>
                        }
                    </figure>
                </header>
                <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                        <h5 className="mb-1">{this.props.member_service.name} - {this.props.member_service.contact_name}</h5>
                        {this.props.member_service.description}
                    </div>
                    { this.props.member_service.facebook || this.props.member_service.twitter || this.props.member_service.instagram || this.props.member_service.email || this.props.member_service.phone ?
                        <ul className="social-links sponsor-card__social">
                            {this.props.member_service.facebook_url ?
                                <li className="social-links__item">
                                    <a href={this.props.member_service.facebook_url} className="social-links__link" title="Facebook" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="fa" />
                                    </a>
                                </li>
                            : null }

                            {this.props.member_service.twitter_url ?
                                <li className="social-links__item">
                                    <a href={this.props.member_service.twitter_url} className="social-links__link" title="Twitter" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" className="fa" />
                                    </a>
                                </li>
                            : null }

                            {this.props.member_service.instagram_url ?
                                <li className="social-links__item">
                                    <a href={this.props.member_service.instagram_url} className="social-links__link" title="Instagram" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="fa" />
                                    </a>
                                </li>
                            : null }

                            {this.props.member_service.email ?
                                <li className="social-links__item">
                                    <a href={"mailto:" + this.props.member_service.email} className="social-links__link" title="Email">
                                        <FontAwesomeIcon icon={faEnvelope} size="2x" className="fa" />
                                    </a>
                                </li>
                            : null }
                            
                            {this.props.member_service.phone ?
                                <li className="social-links__item">
                                    <a href={"tel:" + this.props.member_service.phone} className="social-links__link" title="Phone">
                                        <FontAwesomeIcon icon={faPhone} size="2x" className="fa" />
                                    </a>
                                </li>
                            : null }
                        </ul>
                    : null }
                </div>
                {this.props.member_service.website_url ?
                    <footer className="card__footer sponsor-card__footer">
                        Website: <a href={this.props.member_service.website_url} className="sponsor-card__link" target="_blank" rel="noopener noreferrer">{this.props.member_service.website_url}</a>
                    </footer>
                : null }
            </div>
        );
    }
}
 
export default MemberServiceSingle;