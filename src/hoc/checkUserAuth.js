import React from 'react'
import { Redirect } from 'react-router'
import {connect } from 'react-redux'
import { loginUser, logoutUser } from 'actions/action'

const CheckUserAuth = ({ children, cookies, logout, isLoggedIn,requestError }) => {
  const isLoggedCookie = cookies.get('isLoggedIn')
  if(isLoggedCookie === "false" || isLoggedCookie === undefined || isLoggedIn === false){
    if(isLoggedIn !== false)
      logout()
    return <Redirect to="/login"/>
  }
  return children
};

const mapStateToProps = ({ isLoggedIn,requestError }) => ({
  isLoggedIn,requestError
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  login: () => dispatch(loginUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckUserAuth);