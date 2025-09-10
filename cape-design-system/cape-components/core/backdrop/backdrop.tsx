import { forwardRef } from 'react';
import type { BackdropProps } from './type';
import { useBackdrop } from './hooks/use-backdrop';

/**
 * Backdrop narrows the user's focus to a particular element on the screen.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/62d184-backdrop
 */
export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  // INFO: The default z-index value was chosen based on the component and z-index mapping table in the ticket (https://jira.deliveryhero.com/browse/LD-1612/)
  ({ zIndex = 1, disablePortal = false, children, ...restProps }, ref) => {
    const { rootProps, renderBackdrop } = useBackdrop({
      zIndex,
      disablePortal,
      ...restProps,
    });

    const backdropContent = (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );

    return renderBackdrop(backdropContent);
  },
);

Backdrop.displayName = 'Backdrop';
