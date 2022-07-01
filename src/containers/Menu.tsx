import React, { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import styled from 'styled-components';

import Layout from './Layout';

import LayoutContext from './../contexts/LayoutContext';

const MenuContainer = styled.div`
  width: 400px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 1px solid #999;
  background: #fff;
`;

function Menu(): React.ReactElement | null {
  const [isMobile, setIsMobile] = useState(false);
  const isMenuExpanded = useContextSelector(LayoutContext, (state) => state.isMenuExpanded);

  const handleResize = () => {
    if (window.innerWidth < 800 ) {
      if (!isMobile) setIsMobile(!isMobile);
    } else {
      if (isMobile) setIsMobile(!isMobile);
    }
  };


  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = isMobile ? { width: '100%', borderRight: 0 } : undefined;

  if (isMenuExpanded) {
    return (
      <MenuContainer style={style}>
        <Layout title='Menu'>
          Menu
        </Layout>
      </MenuContainer>

    );
  }

  return null;

}

export default React.memo(Menu);
