import React, { Component } from 'react';
import { Link } from '@reach/router';
import DefaultImg from '../../images/defaults/sponsor-sample-gray.png';

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card sponsor-card">
                <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt row">
                        <h4 className="col-md-12">{this.props.team.name}</h4>
                        <div className="col-md-6">
                            <figure className="col-md-12">
                                <img src={this.props.team.convenor.image.url} style={{height: '150px'}} alt="Sponsor Name #1"/>
                            </figure>
                            <p className='col-md-12'><b>Convenor:</b> {this.props.team.convenor.first_name} {this.props.team.convenor.last_name}</p>
                        </div>

                        <div className="col-md-6">
                            <figure className="col-md-12">
                                <img src={this.props.team.jersey_image.url} style={{height: '150px'}} alt="Sponsor Name #1"/>
                            </figure>
                            <p className='col-md-12'>Team Colors</p>
                        </div>

                        <div className="col-md-12 mb-2">
                            {this.props.team.sponsor.website_url ?
                                <div>
                                    <a href={this.props.team.sponsor.website_url} target="_blank" rel="noopener noreferrer">
                                        {this.props.team.sponsor.image.url ?
                                            <img src={this.props.team.sponsor.image.url} alt="Sponsor Name #1"/>
                                        :
                                            <img src={DefaultImg} alt="Sponsor Name #1"/> 
                                        }
                                    </a>
                                    <a href={this.props.team.sponsor.website_url} className="sponsor-card__link">{this.props.team.sponsor.website_url}</a>
                                </div>
                            :
                                <img src={this.props.team.sponsor.image} alt="Sponsor Name #1"/>
                            }
                        </div>
                    </div>
                    <footer className="card__footer sponsor-card__footer">
                        <Link to={"/team/" + this.props.team.id} className="btn btn-default btn-xs">View Team</Link>
                    </footer>
                </div>
            </div>
        );
    }
}
 
export default TeamCard;