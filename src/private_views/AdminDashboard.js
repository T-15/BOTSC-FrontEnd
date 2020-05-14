import React, { Component } from 'react';
import { Link } from '@reach/router';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Admin Dashboard</h1>
                <Link to="seasons">Sub</Link>
            </div>
        );
    }
}
 
export default AdminDashboard;