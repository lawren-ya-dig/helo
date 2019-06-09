import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {connect} from 'react-redux';
import './App.css';


class App extends Component {


  render() { 
    let nav 
    if(this.props.location.pathname !== "/"){
      nav = <Nav />;
    } else {
      nav = null;
    };

    return ( 
        <div className='login-page'>
            {nav}
            {routes}
        </div>
     );
  }
}
 
export default connect(state => state)(App);
