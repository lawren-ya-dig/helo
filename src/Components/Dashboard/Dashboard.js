import React, { Component } from 'react';
import {connect} from 'react-redux';


class Dashboard extends Component {
    render() { 
       
        
        return ( 
            <div>
                <h1>Dashboard</h1>
                <p>This is the dashboard view</p>
            </div>
         );
    }
}
 
export default connect (state => state)(Dashboard);