import React from 'react';
import { Route, Switch } from 'react-router';
import paths from './paths';

// SEE REACT OFFICIAL DOCUMENTATION - LAZY and SUSPENCE
const Home = React.lazy(() => import('pages/home/Home'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.home} component={Home} />
    </Switch>
  );
};

export default Routes;
