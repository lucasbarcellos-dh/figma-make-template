import { forwardRef } from 'react';
import type { IndicatorProps } from './type';
import { useIndicator } from './hooks/use-indicator';

/**
 * Indicator component is used to signal unchecked notifications, item counts, or other important information relating to the item it's next to.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/871c9b-indicator/b/2382be
 */
export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      role = 'status',
      status = 'branded',
      size = 'medium',
      children,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps } = useIndicator({
      role,
      status,
      size,
      children,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

Indicator.displayName = 'Indicator';
