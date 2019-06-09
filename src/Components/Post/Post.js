import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    render() { 
        return ( 
            <div>
                <h1>Post</h1>
            </div>
         );
    }
}
 
export default connect(state => state)(Post);