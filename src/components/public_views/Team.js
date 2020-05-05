import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import NoItems from '../application/NoItems';
import PlayerSmall from '../widgets/PlayerSmall';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            team: {}
        }
    }

    componentDidMount() {
        const url = process.env.REACT_APP_API_URL + 'public/teams/' + this.props.team_id + '/full';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            team: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    componentWillReceiveProps(newProps) {
        const url = process.env.REACT_APP_API_URL + 'public/teams/' + newProps.team_id + '/full';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            team: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>{"BOTSC | " + this.state.team.name}</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">{this.state.team.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.team.members ?
                            <div className="row">
                                <div className="col-md-12 team-roster team-roster--card-compact js-team-roster--card-compact row">
                                    {this.state.team.convenor ?
                                        <div className="content col-lg-4">
                                            <PlayerSmall 
                                                player={this.state.team.convenor}
                                                convenor={true}
                                            />
                                        </div>
                                    : null }
                                    {this.state.team.members.map( player => (
                                        <>
                                            {player.id !== this.state.team.convenor.id ?
                                                <div className="content col-lg-4">
                                                    <PlayerSmall 
                                                        player={player}
                                                        convenor={false}
                                                    />
                                                </div>
                                            : null }
                                        </>
                                    ))}
                                </div>
                            </div>
                        :
                            <NoItems
                                item="Players"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Team;