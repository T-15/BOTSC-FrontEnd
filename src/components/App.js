import React, { Component } from 'react';
// import { Router } from '@reach/router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import '../css/App.css';
import Lost from './application/Lost';
import Header from './application/header/Header';
import Footer from './application/footer/Footer';
import Home from './public_views/Home';
import About from './public_views/About';
import Contact from './public_views/Contact';
import MemberServices from './public_views/MemberServices';
import Sponsors from './public_views/Sponsors';
import Fields from './public_views/Fields';
import Constitution from './public_views/Constitution';
import Season from './public_views/Season';
import Division from './public_views/Division';
import Team from './public_views/Team';
import ApplyForMembership from './public_views/ApplyForMembership';
import { useAuth0 } from "../react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
    <div className="site-wrapper clearfix">
      <div className="site-overlay"></div>
      <Router primary={false}>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about_us" />
          <Route component={Contact} path="/contact_list" />
          <Route component={MemberServices} path="/member_services" />
          <Route component={Sponsors} path="/sponsors" />
          <Route component={Fields} path="/fields" />
          <Route component={Constitution} path="/constitution" />
          <Route component={Season} path="/season" />
          <Route component={Division} path="/division/:division_id" />
          <Route component={Team} path="/team/:team_id" />
          <Route component={ApplyForMembership} path="/apply_for_membership"/>
          <Route component={Lost} default />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
 
export default App;
