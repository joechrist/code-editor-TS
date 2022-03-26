import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import paths from 'routes/paths';

// Styled component in MUI
const SIgnInStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

/**
 * COMPONENT
 * @returns A Sign In Button
 */
const SignInButton = () => {
  // Handle login with Auth0
  const { loginWithRedirect } = useAuth0();
  const onSignIn = () => {
    loginWithRedirect({ appState: { returnTo: paths.codeEditor } });
  };

  //
  return <SIgnInStyledButton onClick={onSignIn}>Sign In</SIgnInStyledButton>;
};

export default SignInButton;
