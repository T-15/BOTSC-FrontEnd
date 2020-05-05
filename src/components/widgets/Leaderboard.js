import React, { Component } from 'react';
import { Link } from '@reach/router';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="widget card widget--sidebar widget-standings">
                <div class="widget__title card__header card__header--has-btn">
                    <h4>{this.props.division.name}</h4>
                    <Link to={"/division/" + this.props.division.id} className="btn btn-default btn-outline btn-xs card-header__button">
                        See More
                    </Link>
                </div>
                <div class="widget__content card__content">
                    <div class="table-responsive">
                        <table class="table table-hover table-standings">
                            <thead>
                                <tr>
                                    <th>Teams</th>
                                    <th>Convenor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.division.teams.map( team => (
                                    <tr>
                                        <td>
                                            <div class="team-meta">
                                                <figure class="team-meta__logo">
                                                    <img src={team.jersey_image.url} width="28" alt=""/>
                                                </figure>
                                                <div class="team-meta__info">
                                                    <h6 class="team-meta__name">{team.name}</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {team.convenor.first_name + " " + team.convenor.last_name}
                                        </td>
                                        <td>
                                            <Link to={"/team/" + team.id} className="btn btn-default btn-outline btn-xs card-header__button"><h6 class="team-meta__name">Details</h6></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Leaderboard;