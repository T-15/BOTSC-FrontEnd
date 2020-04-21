import React, { Component } from 'react';
import { Router } from '@reach/router';
import '../css/App.css';
import Lost from './application/Lost';
import Header from './application/header/Header';
import Footer from './application/footer/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MemberServices from './MemberServices';
import Sponsors from './Sponsors';
import Fields from './Fields';
import Constitution from './Constitution';
import Season from './Season';
import Division from './Division';
import Team from './Team';
import ApplyForMembership from './ApplyForMembership';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="site-wrapper clearfix">
        <div className="site-overlay"></div>
        <Header />
        <Router primary={false}>
          <Home path="/" />
          <About path="/about_us" />
          <Contact path="/contact_list" />
          <MemberServices path="/member_services" />
          <Sponsors path="/sponsors" />
          <Fields path="/fields" />
          <Constitution path="/constitution" />
          <Season path="/season" />
          <Division path="/division/:division_id" />
          <Team path="/team/:team_id" />
          <ApplyForMembership path="/apply_for_membership"/>
          <Lost default />
        </Router>
        <Footer />
      </div>
    );
  }
}
 
export default App;
