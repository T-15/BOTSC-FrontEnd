import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import $ from 'jquery/dist/jquery';
// eslint-disable-next-line
import Slick from 'slick-carousel';
import MemberSlim from '../components/members/MemberSlim';
import DefaultImg from '../images/Tinker_Simon_Trans.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        $(document).ready(function(){
            $('.team-roster').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        });
    }
    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>BOTSC | Contact List</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Contact<span className="highlight"> List</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="content col-lg-12">
                                <h3>The Executive Team</h3>
                                <div className="team-roster team-roster--card-compact js-team-roster--card-compact row">
                                    <MemberSlim 
                                        first_name="James"
                                        last_name="Tinker"
                                        title="Spare Board Coordinator"
                                        image={DefaultImg}
                                        phone="1234567890"
                                        email="test@test.com"
                                    />
                                </div>
                            </div>

                            <div className="content col-lg-12">
                                <h3>Over 45 Convenors</h3>
                                <div className="team-roster team-roster--card-compact js-team-roster--card-compact row">
                                </div>
                            </div>

                            <div className="content col-lg-12">
                                <h3>Over 60 Convenors</h3>
                                <div className="team-roster team-roster--card-compact js-team-roster--card-compact row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;