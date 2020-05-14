import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Helmet from 'react-helmet';
import Form from '../components/member_application/form';
import FormError from '../components/application/FormError';
import TermsAndConditions from '../components/application/TermsAndConditions';

class ApplyForMembership extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            divisions: [],
            referral_methods: [],
            positions: [],
            formLoadError: false,
            formSubmitted: false,
            formSubmitError: true
        }
    }

    onSubmit = data => {
        const url = process.env.REACT_APP_API_URL + 'public/utility/application'

        axios.post(url, {data})
        .then((response) => {
            this.setState({
                formSubmitted: true
            })
        })
        .catch((error) => {
            this.setState({
                formSubmitError: true
            })
        });
    }

    componentDidMount(){
        const urlD = process.env.REACT_APP_API_URL + 'public/divisions/active';
    
        axios.get(urlD)
        .then((response) => {
            this.setState({
                divisions: response.data
            })
        })
        .catch((error) => {
            this.setState({
                formLoadError: true
            })
        });

        const urlR = process.env.REACT_APP_API_URL + 'public/referral_methods';
    
        axios.get(urlR)
        .then((response) => {
            this.setState({
                referral_methods: response.data
            })
        })
        .catch((error) => {
            this.setState({
                formLoadError: true
            })
        });

        const urlP = process.env.REACT_APP_API_URL + 'public/positions/active';
    
        axios.get(urlP)
        .then((response) => {
            this.setState({
                positions: response.data
            })
        })
        .catch((error) => {
            this.setState({
                formLoadError: true
            })
        });
    }

    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>BOTSC | Apply</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Apply For<span className="highlight"> Membership</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.formLoadError ?
                            <div className="row">
                                <div className="card col-lg-12 text-center">
                                    {/* TODO: Figure out text for load error */}
                                    <h2 className="mt-2">Form Loading Error</h2>
                                    <p>The form has failed to load, please refresh the page or contact <a href="mailto:info@botsc.ca">info@botsc.ca</a> if the problem persists</p>

                                    <div className="col-lg-12 mb-3">
                                        <Link to="/" className="btn btn-primary-inverse btn-sm">Return Home</Link>
                                    </div>
                                </div>
                            </div>
                        :
                            <div className="row">
                                {this.state.formSubmitted ?
                                    <div className="card col-lg-12 text-center">
                                        {/* TODO: Figure out text for submission */}
                                        <h2 className="mt-2">Application Submitted</h2>
                                        <p>Your application has been submitted, please allow us time to review it and we will get back to you.</p>

                                        <div className="col-lg-12 mb-3">
                                            <Link to="/" className="btn btn-primary-inverse btn-sm">Return Home</Link>
                                        </div>
                                    </div>
                                :
                                    <>
                                        {this.props.formSubmitError ?
                                            <FormError message="Submission failed, please ensure all required fields are valid, and try again.
                                            If issue persists, contact info@botsc.ca"/>
                                        :
                                        null }
                                        <Form 
                                            divisions={this.state.divisions}
                                            referral_methods={this.state.referral_methods}
                                            positions={this.state.positions}
                                            onSubmit={this.onSubmit}
                                        />
                                        <TermsAndConditions />
                                    </>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ApplyForMembership;