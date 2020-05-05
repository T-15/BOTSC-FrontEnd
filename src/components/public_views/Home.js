import React, {Component} from 'react';
import { Helmet } from "react-helmet";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    render() { 
        return ( 
            <div className="row">
                <Helmet>
                    <title>BOTSC | Home</title>
                </Helmet>

                <div className="content col-lg-8">

                </div>

                <div id="sidebar" className="sidebar col-lg-4">
                     
                </div>
            </div>          
        );
    }
}
 
export default Home;