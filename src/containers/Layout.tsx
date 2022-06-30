import React from 'react';
import styled from 'styled-components';

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
  children: React.ReactNode;
}

function Layout({ title , children }: Props): React.ReactElement {
  return (
    <>
      <Header>
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

