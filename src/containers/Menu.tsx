import React from 'react';
import { useContextSelector } from 'use-context-selector';
import styled from 'styled-components';

import Layout from './Layout';

import LayoutContext from './../contexts/LayoutContext';

const MenuContainer = styled.div`
  max-width: 500px;
  min-width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 1px solid #999;
  background: #fff;
`;

function Menu(): React.ReactElement | null {
  const isMenuExpanded = useContextSelector(LayoutContext, (state) => state.isMenuExpanded);

  if (isMenuExpanded) {
    return (
      <MenuContainer>
        <Layout title='Menu'>
          Menu
        </Layout>
      </MenuContainer>

    );
  }

  return null;

}

export default React.memo(Menu);
