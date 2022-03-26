import React from 'react';
import { Route, Switch } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from 'auth/ProtectedRoute';
import Loading from 'components/common/loading/Loading';
import paths from './paths';

// SEE REACT OFFICIAL DOCUMENTATION - LAZY and SUSPENCE
const Home = React.lazy(() => import('pages/home/Home'));
const CodeEditor = React.lazy(() => import('pages/code-editor/CodeEditor'));

const Routes = () => {
  //
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  //
  return (
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <ProtectedRoute exact path={paths.codeEditor} component={CodeEditor} />
    </Switch>
  );
};

export default Routes;
