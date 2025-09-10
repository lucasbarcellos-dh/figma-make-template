import { forwardRef, isValidElement, ReactNode } from 'react';
import { CloseMiniIcon } from '@deliveryhero/cape-icons';
import { IconButton } from '../../../icon-button';
import type { DialogHeaderProps } from './type';
import { useDialogHeader } from './hooks/use-dialog-header';

/**
 * DialogHeader children component of DialogContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, closeButton = true, ...restProps }, ref) => {
    const { rootProps, closeButtonProps } = useDialogHeader({
      ...restProps,
    });

    function renderCloseButton(): ReactNode {
      if (!closeButton) {
        return null;
      }
      if (isValidElement(closeButton)) {
        return closeButton;
      }

      return (
        <IconButton
          aria-label="Close Dialog"
          icon={<CloseMiniIcon />}
          size="small"
          {...closeButtonProps}
        />
      );
    }

    return (
      <div ref={ref} {...rootProps}>
        {children}
        {renderCloseButton()}
      </div>
    );
  },
);

DialogHeader.displayName = 'DialogHeader';
