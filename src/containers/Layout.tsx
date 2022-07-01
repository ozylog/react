import React from 'react';
import styled from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import { FiMenu, FiArrowLeft } from 'react-icons/fi';

import LayoutContext from './../contexts/LayoutContext';

const Header = styled.header`
  background: #ccc;
  text-align: center;
  padding: 20px;
  position: relative;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 23px;
  font-weight: 500;
`;

const MenuToggle = styled.div`
  position absolute;
  top: 25px;
  left: 15xp;
  font-size: 20px;
  cursor: pointer;
`;

interface Props {
  title: string;
}

function Layout({ title , children }: React.PropsWithChildren<Props>): React.ReactElement {
  const isMenuExpanded = useContextSelector(LayoutContext, (state) => state.isMenuExpanded);
  const setIsMenuExpanded = useContextSelector(LayoutContext, (state) => state.setIsMenuExpanded);

  const handleClick = () => {
    console.log(!isMenuExpanded);
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <>
      <Header>
        <MenuToggle onClick={handleClick}>
          {isMenuExpanded ? <FiArrowLeft /> : <FiMenu />}
        </MenuToggle>
        <Title>
          {title}
        </Title>
      </Header>
      <Content>
        {children}
      </Content>
    </>
  );
}

export default React.memo(Layout);

