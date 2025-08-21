import { useContext } from 'react';
import { TabsContext } from '../context';

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      'Tabs context is not available, supplied component could be out of context provider!',
    );
  }

  return context;
};
