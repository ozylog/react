import React from 'react';
import styled from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import { FiMenu } from 'react-icons/fi';

import LayoutContext from './../contexts/LayoutContext';

const Header = styled.header`
  background: #ccc;
  text-align: center;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 23px;
  font-weight: 500;
`;

interface Props {
  title: string;
}

function Layout({ title , children }: React.PropsWithChildren<Props>): React.ReactElement {
  const showMenu = useContextSelector(LayoutContext, (state) => state.showMenu);

  return (
    <>
      <Header>
        <FiMenu />
        <Title>
          {title}
        </Title>
      </Header>
      <Container>
        {children}
      </Container>
    </>
  );
}

export default React.memo(Layout);

