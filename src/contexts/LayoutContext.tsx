
import { createContext } from 'use-context-selector';

const LayoutContext = createContext({
  showMenu: false,
  setShowMenu: (value: boolean) => {}
});

export default LayoutContext;
