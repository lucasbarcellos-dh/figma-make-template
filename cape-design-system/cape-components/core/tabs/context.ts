import type { MutableRefObject } from 'react';
import { createContext } from 'react';

export interface TabsContextProps {
  active: string;
  setActive: (active: string) => void;
  onChange?: (tabId: string) => void;
  tabsRef: MutableRefObject<Map<string, HTMLDivElement>>;
}

export const TabsContext = createContext<TabsContextProps | null>(null);
