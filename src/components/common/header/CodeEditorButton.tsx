import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import paths from 'routes/paths';

// Styled component in MUI
const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

/**
 * COMPONENT
 * @returns A Sign In Button
 */
const CodeEditorButton = () => {
  // Handle logout from Auth0
  const history = useHistory();

  //
  const onClick = () => {
    history.push(paths.codeEditor);
  };

  //
  return <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>;
};

export default CodeEditorButton;
