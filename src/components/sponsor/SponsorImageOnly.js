import React, { Component } from 'react';
import DefaultImg from '../../images/defaults/sponsor-sample-gray.png';

class SponsorImageOnly extends Component {
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
                            <a href={this.props.sponsor.website_url} target="_blank" rel="noopener noreferrer">
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
                {this.props.sponsor.website_url ?
                    <footer className="card__footer sponsor-card__footer">
                        Website: <a href={this.props.sponsor.website_url} className="sponsor-card__link" target="_blank" rel="noopener noreferrer">
                                {this.props.sponsor.website_url}
                            </a>
                    </footer>
                : null }
            </div>
        );
    }
}
 
export default SponsorImageOnly;