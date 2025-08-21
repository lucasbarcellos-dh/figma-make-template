import { forwardRef } from 'react';
import type { CardHeaderProps } from './type';
import { useCardHeader } from './hooks/use-card-header';

/**
 * An optional wrapper for the Card header.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/3663f2-card
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useCardHeader(restProps);

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

CardHeader.displayName = 'CardHeader';
