import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import FieldLocation from '../fields/FieldLocation';
import NoItems from '../application/NoItems';

class Fields extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fields: []
        }
    }

    componentDidMount() {
        const url = process.env.REACT_APP_API_URL + 'public/fields/active';
    
        axios.get(url)
        .then((response) => {
          console.log(response)
          this.setState({
            fields: response.data
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
                    <title>BOTSC | Field Locations</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Field<span className="highlight"> Locations</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        {this.state.fields.length ?
                            <div className="row">
                                {this.state.fields.map( field => (
                                    <FieldLocation 
                                        field={field}
                                    />
                                ))}
                            </div>
                        :
                            <NoItems 
                                item="Field Locations"
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Fields;