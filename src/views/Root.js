import React from "react";
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

import GlobalStyle from "../theme/GlobalStyle";
import ForeignUserProfile from "./ForeignUserProfile";


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
                <Route exact  path="/profile" render={props => <Profile {...props} cookies={cookies}/>} />
                <Route path="/profile/:userId" render={props => <ForeignUserProfile {...props} cookies={cookies}/>}/>
                <Route path="/login" render={props => <Login {...props} cookies={cookies}/>} />
                <Route path="/signup" render={props => <Signup {...props} cookies={cookies}/>} />
              </Switch>
          </BrowserRouter>
          <GlobalStyle/>
        </Provider>
      </HelmetProvider>
    </CookiesProvider>
  );
};



export default withCookies(Root);