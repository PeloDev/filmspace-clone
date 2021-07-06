import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import Main from "../containers/Main";
import Inbox from "../containers/Main/Inbox";
import Message from "../containers/Main/Message";

export default function () {
  const routes = [
    {
      layout: Main,
      subRoutes: [
        {
          exact: false,
          path: "/inbox",
          component: Message
        },
        {
          exact: false,
          path: "/archived",
          component: Inbox
        },
        {
          exact: true,
          path: "/",
          component: Message
        }
      ]
    },
    {
      layout: Login,
      subRoutes: [
        {
          exact: true,
          path: "/login",
          component: Login
        }
      ]
    }
  ];
  {
    /*return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );*/
  }
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.subRoutes.some((r) => r.exact)}
            path={route.subRoutes.map((r) => r.path)}
          >
            <route.layout>
              {route.subRoutes.map((subRoute, i) => (
                <Route key={i} {...subRoute} />
              ))}
            </route.layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
