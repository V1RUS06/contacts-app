import React from "react";
import {privateRoutes, publicRoutes} from "./index";
import {Redirect, Switch, Route} from "react-router-dom"
import {useTypedSelector} from "../hooks/useTypedSelector";

export const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  console.log('auth', isAuth)

  return (
    isAuth
      ? <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/contacts"/>
      </Switch>
      : <Switch>
        {publicRoutes.map(route =>
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/login"/>
      </Switch>

  )
}
