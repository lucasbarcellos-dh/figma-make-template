import type { useFloating, useInteractions } from '@floating-ui/react';
import { createContext, useContext, type MutableRefObject } from 'react';
import type { PopoverProps } from '../type';

export type PopoverContextType = Pick<
  PopoverProps,
  'zIndex' | 'onOpenChange' | 'disablePortal' | 'closeOnFocusOut'
> & {
  open: PopoverProps['open'];
  numberOfTriggers: MutableRefObject<number>;
} & ReturnType<typeof useFloating> &
  ReturnType<typeof useInteractions>;

export const PopoverContext = createContext<PopoverContextType | null>(null);

export const usePopoverContext = (): PopoverContextType => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};
