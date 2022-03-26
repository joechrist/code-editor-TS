import { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import Header from 'components/common/header/Header';

// style
const LayoutContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

// stle
const Page = styled('div')({
  height: '100%',
});

/**
 *
 * @param props
 * @returns Styled Layout container
 */
const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <LayoutContainer>
      <Header />
      <Page>{props.children}</Page>
    </LayoutContainer>
  );
};

export default Layout;
