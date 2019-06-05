import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'


class routes extends Component {
   
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route exact path="/" Component={Auth} />
                    <Route path="/dashboard" Component={Dashboard}/>
                    <Route path="/new" Component={Form} />
                    <Route path="/post/:postid" Component={Post} />
                </Switch>
            </div>
         );
    }
}
 
export default routes;


    
