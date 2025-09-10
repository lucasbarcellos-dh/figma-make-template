import * as React from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';
import type { DrawerPlacement, DrawerProps } from '../type';

export type DrawerContextType = Pick<
  DrawerProps,
  'zIndex' | 'onOpenChange' | 'disablePortal' | 'placement'
> & {
  open: DrawerProps['open'];
  placement: DrawerPlacement;
  setOpen: (open: boolean) => void;
} & Omit<ReturnType<typeof useFloating>, 'placement'> &
  ReturnType<typeof useInteractions>;

export const DrawerContext = React.createContext<DrawerContextType | null>(
  null,
);

export const useDrawerContext = (): DrawerContextType => {
  const context = React.useContext(DrawerContext);

  if (!context) {
    throw new Error('Drawer components must be wrapped in <Drawer />');
  }

  return context;
};
