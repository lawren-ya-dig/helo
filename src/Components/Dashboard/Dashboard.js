import React, { Component } from 'react'


class Dashboard extends Component {
    render() { 
       
        return ( 
            <div>
                <h1>{this.props.name}</h1>
                <p>This is the dashboard view</p>
            </div>
         );
    }
}
 
export default Dashboard;