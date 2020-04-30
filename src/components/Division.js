import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import NoItems from './application/NoItems';
import TeamCard from './teams/TeamCard';

class Division extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            division: {}
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/v1/divisions/' + this.props.division_id + '/with_teams_full';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            division: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    componentWillReceiveProps(newProps) {
        const url = 'http://localhost:3001/api/v1/divisions/' + newProps.division_id + '/with_teams_full';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            division: response.data
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
                    <title>{"BOTSC | " + this.state.division.name + " Division"}</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">{this.state.division.name}<span className="highlight"> Division</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.division.teams ?
                            <div className="row">
                                <h3 className="col-md-12">Teams</h3>
                                <div className="col-md-12 team-roster team-roster--card-compact js-team-roster--card-compact row">
                                    {this.state.division.teams.map( team => (
                                        <div key={team.id} className="content col-lg-4 col-sm-6">
                                            <TeamCard
                                                team={team}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        :
                            <NoItems
                                item="Teams"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Division;