import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "assets/css/style.css";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import NotFound from "pages/404";
import Unauthenticated from "pages/401";

import Login from "pages/Login";
import Register from "pages/Register";

import MyClass from "pages/MyClass";
import Joined from "pages/Joined";
import DetailsClass from "pages/DetailsClass";
import Settings from "pages/Settings";
import Producer from "pages/Producer";
import Transactions from "pages/Transactions";

import { setAuthorizationHeader } from "configs/axios";

import users from "constants/api/users";

import { populateProfile } from "store/actions/users";

function App() {
  const dispatch = useDispatch();
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("RAPMICRO:token")) {
      session = JSON.parse(localStorage.getItem("RAPMICRO:token"));
      setAuthorizationHeader(session.token);

      users.details().then((details) => {
        dispatch(populateProfile(details.data));
      });
    }
  }, [dispatch]);
  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute> */}

          <GuestRoute exact path="/" component={MyClass}></GuestRoute>
          {/* <GuestRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></GuestRoute>

          <GuestRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          ></GuestRoute>
          <GuestRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></GuestRoute> */}
          <GuestRoute path="/settings" component={Settings}></GuestRoute>
          <GuestRoute path="/producer" component={Producer}></GuestRoute>
          {/* <GuestRoute
            path="/transactions"
            component={Transactions}
          ></GuestRoute> */}

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
