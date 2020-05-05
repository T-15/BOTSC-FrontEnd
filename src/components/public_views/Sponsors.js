import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import SponsorImageOnly from '../sponsor/SponsorImageOnly';
import NoItems from '../application/NoItems';

class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sponsors: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/v1/public/sponsors/active';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            sponsors: response.data
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
                    <title>BOTSC | Sponsors</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Sponsors</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.sponsors.length ?
                            <div className="sponsors-grid row">
                                {this.state.sponsors.map( sponsor => (
                                    <div key={sponsor.id} className="content col-lg-4 col-sm-6">
                                        <SponsorImageOnly
                                            sponsor={sponsor}
                                        />
                                    </div>
                                ))}
                            </div>
                        :
                            <NoItems
                                item="Sponsors"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sponsors;