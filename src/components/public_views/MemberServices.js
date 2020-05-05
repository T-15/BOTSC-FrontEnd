import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import MemberServiceSingle from '../member_service/MemberServiceSingle';
import NoItems from '../application/NoItems';

class MemberServices extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            member_services: []
         }
    }

    componentDidMount() {
        const url = process.env.REACT_APP_API_URL + 'public/member_services/active';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            member_services: response.data
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
                    <title>BOTSC | Member Services</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Member <span className="highlight"> Services</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.member_services.length ?
                            <div className="sponsors-grid row">
                                {this.state.member_services.map( member_service => (
                                    <div key={member_service.id} className="content col-lg-4 col-sm-6">
                                        <MemberServiceSingle
                                            member_service={member_service}
                                        />
                                    </div>
                                ))}
                            </div>
                        : 
                            <NoItems 
                                item="Member Services"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberServices;