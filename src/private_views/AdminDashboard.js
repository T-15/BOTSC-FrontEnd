import React from 'react';
import Helmet from 'react-helmet';
import SideMenu from '../components/menus/SideMenu';

const AdminDashboard = (props) => {
    const menuItems = [
        "constitution_articles",
        "constitution_by_laws",
        "divisions",
        "fields",
        "matches",
        "member_services",
        "members",
        "positions",
        "referral_methods",
        "seasons",
        "sponsors",
        "teams",
        "waiting_lists"
    ];

    return ( 
        <div>
            <Helmet>
                <title>BOTSC | Admin</title>
            </Helmet>
            <div className="page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <h1 className="page-heading__title">Admin</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideMenu items={menuItems} />
                        </div>

                        <div className="col-md-8">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminDashboard;