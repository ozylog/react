import React from 'react';

import LayoutContext from './LayoutContext';

function LayoutProvider({ children }: React.PropsWithChildren) {
  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false);

  return (
    <LayoutContext.Provider value={{ isMenuExpanded, setIsMenuExpanded }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default React.memo(LayoutProvider);

