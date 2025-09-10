import { forwardRef, type ReactNode } from 'react';
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
import { Backdrop } from '../../../backdrop';
import type { DialogContentProps } from './type';
import { useDialogContent } from './hooks/use-dialog-content';

/**
 * The content of the Dialog. DialogContent component must be wrapped inside `<Dialog />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ children, ...props }, ref): ReactNode | null {
    const {
      floatingFocusManagerProps,
      rootProps,
      disablePortal,
      backdropProps,
    } = useDialogContent({ ref, ...props });
    const { open } = backdropProps;

    if (!open) return null;

    const floatingContent = (
      <FloatingFocusManager {...floatingFocusManagerProps}>
        <div ref={ref} {...rootProps}>
          {children}
        </div>
      </FloatingFocusManager>
    );

    return disablePortal ? (
      <Backdrop {...backdropProps}>{floatingContent}</Backdrop>
    ) : (
      <FloatingPortal>
        <Backdrop {...backdropProps}>{floatingContent}</Backdrop>
      </FloatingPortal>
    );
  },
);
