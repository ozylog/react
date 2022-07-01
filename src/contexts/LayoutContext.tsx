
import { createContext } from 'use-context-selector';

const LayoutContext = createContext({
  isMenuExpanded: false,
  setIsMenuExpanded: (value: boolean) => {}
});

export default LayoutContext;
