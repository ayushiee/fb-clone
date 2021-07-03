import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { useAuth } from '../../context/auth';

interface PrivateRouteProps extends RouteProps {
  component?: React.ComponentType<unknown>;
  children?: React.ReactNode;
}

export default function PrivateRoute({
  component: Component,
  children,
  ...rest
}: PrivateRouteProps): React.ReactElement {
  const { isAuthenticated } = useAuth();

  const render = (props: any) => {
    if (!isAuthenticated) {
      return <Redirect to={ROUTES.SIGNIN} />;
    } else {
      if (Component) {
        return <Component {...props} />;
      } else {
        return children;
      }
    }
  };

  return <Route {...rest} render={render} />;
}
