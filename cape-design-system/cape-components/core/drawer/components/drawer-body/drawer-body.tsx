import { forwardRef } from 'react';
import type { DrawerBodyProps } from './type';
import { useDrawerBody } from './hooks/use-drawer-body';

/**
 * DrawerBody is children of DrawerContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useDrawerBody({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

DrawerBody.displayName = 'DrawerBody';
