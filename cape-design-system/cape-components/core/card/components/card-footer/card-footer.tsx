import { forwardRef } from 'react';
import type { CardFooterProps } from './type';
import { useCardFooter } from './hooks/use-card-footer';

/**
 * An optional wrapper for the Card footer.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/3663f2-card
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useCardFooter(restProps);

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = 'CardFooter';
