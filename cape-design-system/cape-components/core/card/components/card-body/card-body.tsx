import { forwardRef } from 'react';
import type { CardBodyProps } from './type';
import { useCardBody } from './hooks/use-card-body';

/**
 * An optional wrapper for the Card body.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/3663f2-card
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useCardBody(restProps);

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

CardBody.displayName = 'CardBody';
