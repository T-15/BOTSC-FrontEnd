import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import NoItems from '../components/application/NoItems';
import Leaderboard from '../components/widgets/Leaderboard';

class Season extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            season: {}
        }
    }

    componentDidMount() {
        const url = process.env.REACT_APP_API_URL + 'public/seasons/active_with_divisions_teams';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            season: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    // TODO: Add in extra info like champions and playoff bracket

    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>BOTSC | Season</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">{this.state.season.year}<span className="highlight"> Season</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.season.divisions ?
                            <div className="row">
                                <h3 className="col-md-12">Divisions</h3>
                                {this.state.season.divisions.map( division => (
                                    <div className="col-md-6">
                                        <Leaderboard
                                            division={division}
                                        />
                                    </div>
                                ))}
                            </div>
                        :
                            <NoItems
                                type="Divisions"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Season;