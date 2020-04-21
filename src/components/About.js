import React from 'react';
import { Helmet } from 'react-helmet';
import News from './news/News';

const About = () => {
    return ( 
        <div>
            <Helmet>
                <title>BOTSC | About Us</title>
            </Helmet>
            <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <h1 class="page-heading__title">About<span class="highlight"> Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-content">
                <div className="container">
                    <div className="row">
                        <div className="content col-lg-8">
                            <News
                                title="The Burlington Old Timers Soccer Club"
                                content="<h1>Test</h1> <p>This is a test to see what happens</p>"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;