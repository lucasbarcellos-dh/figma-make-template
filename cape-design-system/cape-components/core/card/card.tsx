import { forwardRef } from 'react';
import type { CardProps } from './type';
import { useCard } from './hooks/use-card';

/**
 * Cards are surfaces that display content and actions on a single topic.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/3663f2-card
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'outlined', disabled = false, children, ...restProps }, ref) => {
    const { rootProps } = useCard({
      variant,
      disabled,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
