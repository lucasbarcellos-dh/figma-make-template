import { forwardRef } from 'react';
import type { DrawerFooterProps } from './type';
import { useDrawerFooter } from './hooks/use-drawer-footer';

/**
 * DrawerFooter is children component of DrawerContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useDrawerFooter({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

DrawerFooter.displayName = 'DrawerFooter';
