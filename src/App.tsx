import React from 'react';

import RegisterCard from './containers/RegisterCard';
import Menu from './containers/Menu';
import LayoutProvider from './contexts/LayoutProvider';

function App(): React.ReactElement {
  return (
    <LayoutProvider>
        <RegisterCard />
        <Menu />
    </LayoutProvider>
  );
}

export default App;
