import type { DialogProps } from './type';
import { useDialog } from './hooks/use-dialog';
import { DialogContext } from './hooks/use-dialog-context';

/**
 * Dialog are used to focus on one particular task and they appear on top of every other content.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export function Dialog({
  zIndex = 100,
  disablePortal = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  children,
  ...restProps
}: DialogProps): JSX.Element {
  const { contextValues } = useDialog({
    zIndex,
    disablePortal,
    closeOnOutsideClick,
    closeOnEsc,
    ...restProps,
  });

  return (
    <DialogContext.Provider value={contextValues}>
      {children}
    </DialogContext.Provider>
  );
}

Dialog.displayName = 'Dialog';
