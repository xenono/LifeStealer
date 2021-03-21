import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// require('dotenv').config()

import { Provider } from "react-redux";
import store from "store/store";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Login from './Login'
import Signup from './Signup'

import GlobalStyle from "../theme/GlobalStyle";


const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
      <GlobalStyle/>
    </Provider>
  );
};



export default Root;