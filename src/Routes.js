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
import NewConstitutionByLaw from './private_views/constitution_by_laws/New';
import EditConstitutionByLaw from './private_views/constitution_by_laws/Edit';
import ShowConstitutionByLaw from './private_views/constitution_by_laws/Show';

import DivisionIndex from './private_views/divisions/Index';

import FieldIndex from './private_views/fields/Index';
import NewField from './private_views/fields/New';
import EditField from './private_views/fields/Edit';
import ShowField from './private_views/fields/Show';

import MatchIndex from './private_views/matches/Index';

import MemberServicesIndex from './private_views/member_services/Index';
import NewMemberService from './private_views/member_services/New';
import EditMemberService from './private_views/member_services/Edit';
import ShowMemberService from './private_views/member_services/Show';

import MemberIndex from './private_views/members/Index';

import PositionIndex from './private_views/positions/Index';
import NewPosition from './private_views/positions/New';
import EditPosition from './private_views/positions/Edit';
import ShowPosition from './private_views/positions/Show';

import ReferralMethodIndex from './private_views/referral_methods/Index';
import NewReferralMethod from './private_views/referral_methods/New';
import EditReferralMethod from './private_views/referral_methods/Edit';
import ShowReferralMethod from './private_views/referral_methods/Show';

import SeasonIndex from './private_views/seasons/Index';
import EditSeason from './private_views/seasons/Edit';
import NewSeason from './private_views/seasons/New';
import ShowSeason from './private_views/seasons/Show';

import SponsorIndex from './private_views/sponsors/Index';
import EditSponsor from './private_views/sponsors/Edit';
import NewSponsor from './private_views/sponsors/New';
import ShowSponsor from './private_views/sponsors/Show';

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
            <PrivateRoute component={EditConstitutionByLaw} path="/constitution_by_laws/:constitutionByLawId/edit"/>
            <PrivateRoute component={NewConstitutionByLaw} path="/constitution_by_laws/new"/>
            <PrivateRoute component={ShowConstitutionByLaw} path="/constitution_by_laws/:constitutionByLawId"/>

            <PrivateRoute component={DivisionIndex} path="/divisions"/>

            <PrivateRoute component={FieldIndex} path="/fields"/>
            <PrivateRoute component={EditField} path="/fields/:fieldId/edit"/>
            <PrivateRoute component={NewField} path="/fields/new"/>
            <PrivateRoute component={ShowField} path="/fields/:fieldId"/>

            <PrivateRoute component={MatchIndex} path="/matches"/>

            <PrivateRoute component={MemberServicesIndex} path="/member_services"/>
            <PrivateRoute component={EditMemberService} path="/member_services/:memberServiceId/edit"/>
            <PrivateRoute component={NewMemberService} path="/member_services/new"/>
            <PrivateRoute component={ShowMemberService} path="/member_services/:memberServiceId"/>

            <PrivateRoute component={MemberIndex} path="/members"/>

            <PrivateRoute component={PositionIndex} path="/positions"/>
            <PrivateRoute component={EditPosition} path="/positions/:positionId/edit"/>
            <PrivateRoute component={NewPosition} path="/positions/new"/>
            <PrivateRoute component={ShowPosition} path="/positions/:positionId"/>

            <PrivateRoute component={ReferralMethodIndex} path="/referral_methods"/>
            <PrivateRoute component={EditReferralMethod} path="/referral_methods/:referralMethodId/edit"/>
            <PrivateRoute component={NewReferralMethod} path="/referral_methods/new"/>
            <PrivateRoute component={ShowReferralMethod} path="/referral_methods/:referralMethodId"/>

            <PrivateRoute component={SeasonIndex} path="/seasons"/>
            <PrivateRoute component={EditSeason} path="/seasons/:seasonId/edit"/>
            <PrivateRoute component={NewSeason} path="/seasons/new"/>
            <PrivateRoute component={ShowSeason} path="/seasons/:seasonId"/>

            <PrivateRoute component={SponsorIndex} path="/sponsors"/>
            <PrivateRoute component={EditSponsor} path="/sponsors/:sponsorId/edit"/>
            <PrivateRoute component={NewSponsor} path="/sponsors/new"/>
            <PrivateRoute component={ShowSponsor} path="/sponsors/:sponsorId"/>


            <PrivateRoute component={TeamIndex} path="/teams"/>

            <PrivateRoute component={WaitingListIndex} path="/waiting_lists"/>

          </PrivateRoute>
          
          <Lost default />
        </Router>
    );
}
 
export default Routes;