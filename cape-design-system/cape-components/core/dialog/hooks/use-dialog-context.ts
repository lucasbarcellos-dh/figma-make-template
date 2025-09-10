import * as React from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';
import type { DialogProps } from '../type';

export type DialogContextType = Pick<
  DialogProps,
  'zIndex' | 'onOpenChange' | 'disablePortal'
> & {
  open: DialogProps['open'];
  setOpen: (open: boolean) => void;
} & ReturnType<typeof useFloating> &
  ReturnType<typeof useInteractions>;

export const DialogContext = React.createContext<DialogContextType | null>(
  null,
);

export const useDialogContext = (): DialogContextType => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error('Dialog components must be wrapped in <Dialog />');
  }

  return context;
};
