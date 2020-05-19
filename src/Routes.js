import React from 'react';
import { Router } from "@reach/router";
import PrivateRoute from './components/PrivateRoute';
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
import AdminDashboard from './private_views/AdminDashboard';
import Seasons from './private_views/seasons/Index';
import EditSeason from './private_views/seasons/Edit';
import NewSeason from './private_views/seasons/New';
import Lost from './components/application/Lost';

const Routes = () => {
    return ( 
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

          <PrivateRoute component={AdminDashboard} path="/admin">
            <PrivateRoute component={Seasons} path="/seasons"/>
            <PrivateRoute component={EditSeason} path="/seasons/:seasonId/edit"/>
            <PrivateRoute component={NewSeason} path="/seasons/new"/>
          </PrivateRoute>
          
          <Lost default />
        </Router>
    );
}
 
export default Routes;