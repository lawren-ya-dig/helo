import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component {
    render() { 
        return ( 
            <div>
                <h1>Form</h1>
            </div>
         );
    }
}
 
export default connect(state=>state)(Form);