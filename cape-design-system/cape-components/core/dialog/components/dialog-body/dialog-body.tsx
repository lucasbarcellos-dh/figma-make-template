import { forwardRef } from 'react';
import type { DialogBodyProps } from './type';
import { useDialogBody } from './hooks/use-dialog-body';

/**
 * DialogBody is children of DialogContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useDialogBody({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

DialogBody.displayName = 'DialogBody';
