import React from 'react';
import { Router } from "@reach/router";
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
 
export default App;
