import { forwardRef } from 'react';
import type { DialogFooterProps } from './type';
import { useDialogFooter } from './hooks/use-dialog-footer';

/**
 * DialogFooter is children component of DialogContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useDialogFooter({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

DialogFooter.displayName = 'DialogFooter';
