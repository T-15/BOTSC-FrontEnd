import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import imgDefault from '../../images/defaults/roster_player_01_card.png';

class MemberSlim extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: props.image || "",
            first_name: props.first_name || "Vacant",
            last_name: props.last_name || "",
            title: props.title || "",
            phone: props.phone || "",
            email: props.email || ""
        }
    }
    render() { 
        return (
            <div className="team-roster__item card">
                <div className="card__content">
                    <div className="team-roster__content-wrapper">
                        <figure className="team-roster__player-img">
                            {this.state.img ?
                                <img src={this.state.img} alt="" />
                            :
                                <img src={imgDefault} alt="" />
                            }
                        </figure>
                        <div className="team-roster__player-info">
                            <h3 className="team-roster__player-name">
                            <span className="team-roster__player-first-name">{this.state.first_name}</span>
                            <span className="team-roster__player-last-name">{this.state.last_name}</span>
                            </h3>
                        </div>
                        <div className="team-roster__player-details card">
                            <div className="team-roster__player-details-body">
                                <div className="team-roster__player-details-excerpt text-center">
                                    <h3>{this.state.title}</h3>
                                </div>
                                <footer className="team-roster__player-details-footer">
                                    {this.state.phone ?
                                        <a href={"tel:" + this.state.phone} className="btn btn-sm btn-block btn-primary-inverse" tabIndex="0">
                                            Call: <NumberFormat value={this.state.phone} type="tel" displayType="text" format="(###)-###-####"/>
                                        </a>
                                    : null }
                                    {this.state.email ?
                                        <a href={"mailto:" + this.state.email} className="btn btn-sm btn-block btn-primary-inverse" tabIndex="0">
                                            Email: {this.state.email}
                                        </a>
                                    : null }
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberSlim;