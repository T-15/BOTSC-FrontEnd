import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/menus/TopMenu';

const AdminDashboard = (props) => {
    const menuItems = ["seasons", "teams"];

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
            <TopMenu items={menuItems} />
            {props.children}
        </div>
    );
}
 
export default AdminDashboard;