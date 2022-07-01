import React from 'react';

import LayoutContext from './LayoutContext';

function LayoutProvider({ children }: React.PropsWithChildren) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <LayoutContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default React.memo(LayoutProvider);

