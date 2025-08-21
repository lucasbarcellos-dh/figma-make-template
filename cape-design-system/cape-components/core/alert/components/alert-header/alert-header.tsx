import { forwardRef } from 'react';
import type { AlertHeaderProps } from './type';
import { useAlertHeader } from './hooks/use-alert-header';

/**
 * AlertHeader component should be used inside the Alert component.
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8245db-alert
 */
export const AlertHeader = forwardRef<HTMLDivElement, AlertHeaderProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useAlertHeader({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

AlertHeader.displayName = 'AlertHeader';
