import { forwardRef } from 'react';
import type { SkeletonProps } from './type';
import { useSkeleton } from './hooks/use-skeleton';

/**
 * Skeleton provides a placeholder preview of the content before the data gets loaded.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8694b1-skeleton
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animated = true, variant = 'rounded', children, ...restProps }, ref) => {
    const { rootProps } = useSkeleton({
      animated,
      variant,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
