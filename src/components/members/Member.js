import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: props.image || "",
            first_name: props.first_name || "Vacant",
            last_name: props.last_name || "",
        }
    }
    render() { 
        return (
            <div className="team-roster__item card">
                <div className="card__content">
                    <div className="team-roster__content-wrapper">
                        <figure className="team-roster__player-img">
                            <img src="./images/soccer/samples/roster_player_01_card.png" alt=""/>
                        </figure>
                        <div className="team-roster__player-info">
                            <h3 className="team-roster__player-name">
                            <span className="team-roster__player-first-name">{this.state.first_name}</span>
                            <span className="team-roster__player-last-name">{this.state.last_name}</span>
                            </h3>
                        </div>
                        <div className="team-roster__player-details card">
                            <div className="team-roster__player-details-body">
                            <div className="team-roster__player-details-excerpt">
                                Brian started playing at the age of 5 for a small team called “The New Ghosts” and from...
                            </div>
                            <div className="progress-stats progress-stats--top-labels">
                                <div className="progress__label">
                                    Shot Acc
                                </div>
                                <div className="progress">
                                    <div className="progress__bar progress__bar--success progress__bar-width-90" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress__number">96%</div>
                            </div>
                            <div className="progress-stats progress-stats--top-labels">
                                <div className="progress__label">Pass Acc</div>
                                <div className="progress">
                                    <div className="progress__bar progress__bar--success progress__bar-width-70" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress__number">74%</div>
                            </div>
                            <div className="progress-stats progress-stats--top-labels">
                                <div className="progress__label">
                                </div>
                                <div className="progress">
                                    <div className="progress__bar progress__bar--success progress__bar-width-80" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress__number">85%</div>
                            </div>
                            <footer className="team-roster__player-details-footer">
                                <a href="_soccer_player-bio.html" className="btn btn-sm btn-block btn-primary-inverse" tabIndex="0">
                                Read Full Bio
                                </a>
                                <a href="#" className="btn btn-sm btn-single-icon btn-facebook" tabIndex="0">
                                <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="btn btn-sm btn-single-icon btn-twitter" tabIndex="0">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </footer>
                            </div>
                            <aside className="team-roster__meta">
                            <div className="team-roster__meta-item team-roster__meta-item--lg">
                                <div className="team-roster__meta-value">104</div>
                                <div className="team-roster__meta-label">Goals</div>
                            </div>
                            <div className="team-roster__meta-item">
                                <div className="team-roster__meta-value">86</div>
                                <div className="team-roster__meta-label">Games</div>
                            </div>
                            <div className="team-roster__meta-item">
                                <div className="team-roster__meta-value">FD</div>
                                <div className="team-roster__meta-label">Position</div>
                            </div>
                            <div className="team-roster__meta-item">
                                <div className="team-roster__meta-value">L</div>
                                <div className="team-roster__meta-label">Foot</div>
                            </div>
                            </aside>
                        </div>
                        <div className="team-roster__player-number">07</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Member;