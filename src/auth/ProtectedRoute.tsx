import { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

// Type for props
type ProtectedRouteprops = {
  component: ComponentType;
  [key: string]: any;
};

// COMPONENT
const ProtectedRoute = ({ component, ...args }: ProtectedRouteprops) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
