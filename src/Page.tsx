import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Page404 from "./pages/404/Page404";
import Login from "./components/login/Login";
import App from "./App";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/404" component={Page404} />
      <Route path="/login" component={Login} />
      <Route component={Page404} />
    </Switch>
  </Router>
);
