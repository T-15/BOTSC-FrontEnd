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

import ConstitutionArticleIndex from './private_views/constitution_articles/Index';
import NewConstitutionArticle from './private_views/constitution_articles/New';
import EditConstitutionArticle from './private_views/constitution_articles/Edit';
import ShowConstitutionArticle from './private_views/constitution_articles/Show';

import ConstitutionByLawIndex from './private_views/constitution_by_laws/Index';

import DivisionIndex from './private_views/divisions/Index';

import FieldIndex from './private_views/fields/Index';

import MatchIndex from './private_views/matches/Index';

import MemberServicesIndex from './private_views/member_services/Index';

import MemberIndex from './private_views/members/Index';

import PositionIndex from './private_views/positions/Index';

import ReferralMethodIndex from './private_views/referral_methods/Index';

import SeasonIndex from './private_views/seasons/Index';
import EditSeason from './private_views/seasons/Edit';
import NewSeason from './private_views/seasons/New';
import ShowSeason from './private_views/seasons/Show';

import SponsorIndex from './private_views/sponsors/Index';

import TeamIndex from './private_views/teams/Index';

import WaitingListIndex from './private_views/waiting_lists/Index';

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

            <PrivateRoute component={ConstitutionArticleIndex} path="/constitution_articles"/>
            <PrivateRoute component={EditConstitutionArticle} path="/constitution_articles/:constitutionArticleId/edit"/>
            <PrivateRoute component={NewConstitutionArticle} path="/constitution_articles/new"/>
            <PrivateRoute component={ShowConstitutionArticle} path="/constitution_articles/:constitutionArticleId"/>

            <PrivateRoute component={ConstitutionByLawIndex} path="/constitution_by_laws"/>

            <PrivateRoute component={DivisionIndex} path="/divisions"/>

            <PrivateRoute component={FieldIndex} path="/fields"/>

            <PrivateRoute component={MatchIndex} path="/matches"/>

            <PrivateRoute component={MemberServicesIndex} path="/member_services"/>

            <PrivateRoute component={MemberIndex} path="/members"/>

            <PrivateRoute component={PositionIndex} path="/positions"/>

            <PrivateRoute component={ReferralMethodIndex} path="/referral_methods"/>

            <PrivateRoute component={SeasonIndex} path="/seasons"/>
            <PrivateRoute component={EditSeason} path="/seasons/:seasonId/edit"/>
            <PrivateRoute component={NewSeason} path="/seasons/new"/>
            <PrivateRoute component={ShowSeason} path="/seasons/:seasonId"/>

            <PrivateRoute component={SponsorIndex} path="/sponsors"/>

            <PrivateRoute component={TeamIndex} path="/teams"/>

            <PrivateRoute component={WaitingListIndex} path="/waiting_lists"/>

          </PrivateRoute>
          
          <Lost default />
        </Router>
    );
}
 
export default Routes;