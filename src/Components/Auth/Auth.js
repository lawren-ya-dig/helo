import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Auth.css'

class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    login = event => {
        event.preventDefault();

        const userData = {
            username: 'this.state.username',
            password: 'this.state.password'
        }
        axios.post('/api/login', userData)
            .then((responseFromBackEnd) => {
                if(responseFromBackEnd.data.success){
                    this.props.dispatch({
                        type:'user',
                        payload: responseFromBackEnd.data.user,
                    })
                    this.props.history.push('/dashboard')
                }else {
                    alert('Failed login')
                }
            })
    }

    register = event => {
        const newUser = {
            username: 'this.state.username',
            password: 'this.state.password'
        }
        axios.post('/api/register', newUser)
            .then((newSession) =>{
                if(newSession.data.success){
                    this.props.dispatch({
                        type:'user',
                        payload: newSession.data.user,
                    })
                    this.props.history.push('/dashboard')
                }else{
                    alert('User already exists, please login')
                }
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() { 
        return ( 
            <div className='login-form'>
             <h1>Helo</h1>
                <form onSubmit={this.login}>
                    <label className='form_input_boxes'>
                    Username:
                        <input type="text" name="username"  onChange={this.handleChange}/>
                    </label>
                    <label className='form_input_boxes'>
                    Password:
                        <input type="password" name="password"  onChange={this.handleChange}/>
                    </label>
                    <button type="submit" onChange={this.login} className='form-buttons'>Login</button>
                    <button type="submit" onChange={this.register} className='form-buttons'>Register</button>
                </form>
            </div>
         );
    }
}
 

export default connect (state => state)(Auth);