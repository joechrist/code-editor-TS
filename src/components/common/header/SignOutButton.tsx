import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

// Styled component in MUI
const SIgnOutStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

/**
 * COMPONENT
 * @returns A Sign In Button
 */
const SignOutButton = () => {
  // Handle logout from Auth0
  const { logout } = useAuth0();
  const onSignOut = () => {
    logout({ returnTo: window.location.origin });
  };

  //
  return <SIgnOutStyledButton onClick={onSignOut}>Sign Out</SIgnOutStyledButton>;
};

export default SignOutButton;
