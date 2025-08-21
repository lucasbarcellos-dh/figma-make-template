import { createContext, useContext } from 'react';
import type { ListProps } from './type';

export interface ListContextProps {
  size?: ListProps['size'];
  divider?: ListProps['divider'];
}

export const ListContext = createContext<ListContextProps>({});

export const useListContext = (): ListContextProps => useContext(ListContext);
