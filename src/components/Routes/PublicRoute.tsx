import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { useAuth } from '../../context/auth';

interface PublicRouteProps extends RouteProps {
  restricted?: boolean;
  component: React.ComponentType<unknown>;
  children?: React.ReactNode;
}

export default function PublicRoute({
  component: Component,
  restricted = false,
  children,
  ...rest
}: PublicRouteProps): React.ReactElement {
  const { isAuthenticated } = useAuth();

  const render = (props: any) => {
    if (isAuthenticated && restricted) {
      return <Redirect to={ROUTES.HOME} />;
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
