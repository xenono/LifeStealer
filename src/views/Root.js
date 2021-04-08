import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider, withCookies } from "react-cookie";
import {Helmet, HelmetProvider } from 'react-helmet-async'


// require('dotenv').config()

import { Provider } from "react-redux";
import store from "store/store";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Login from './Login'
import Signup from './Signup'
import PageNotFound404 from "./PageNotFound404";

import GlobalStyle from "../theme/GlobalStyle";
import ForeignUserProfile from "./ForeignUserProfile";
import AddDashboardPost from "./AddDashboardPost";
import EditProfile from "./EditProfile";


const Root = ({ cookies }) => {
  return (
    <CookiesProvider>
      <HelmetProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Helmet>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link
                href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap"
                rel="stylesheet"/>
            </Helmet>
              <Switch>
                <Route exact path="/" render={props => <Dashboard {...props} cookies={cookies}/>} />
                <Route path="/addPost" render={props => <AddDashboardPost {...props} cookies={cookies}/>} />
                <Route path="/editProfile" render={props => <EditProfile {...props} cookies={cookies}/>} />
                <Route exact path="/profile" render={props => <Profile {...props} cookies={cookies}/>} />
                <Route exact path="/profile/:userId" render={props => <ForeignUserProfile {...props} cookies={cookies}/>}/>
                <Route path="/login" render={props => <Login {...props} cookies={cookies}/>} />
                <Route path="/signup" render={props => <Signup {...props} cookies={cookies}/>} />
                <Route render={props => <PageNotFound404  {...props} cookies={cookies}/>}/>
              </Switch>
          </BrowserRouter>
          <GlobalStyle/>
        </Provider>
      </HelmetProvider>
    </CookiesProvider>
  );
};

Root.propTypes = {
  cookies: PropTypes.object.isRequired
}

export default withCookies(Root);