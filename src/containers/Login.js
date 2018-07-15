import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/LoginForm'
import {login} from  '../actions/auth'
import {authErrors, isAuthenticated} from '../reducers'
import '../styles/css/App.css';

class Login extends Component {
  render() {
    if(this.props.isAuthenticated) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className="login-page">
        <LoginForm {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);