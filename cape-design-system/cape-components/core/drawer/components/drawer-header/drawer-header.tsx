import { forwardRef } from 'react';
import type { DrawerHeaderProps } from './type';
import { useDrawerHeader } from './hooks/use-drawer-header';
import { DrawerCloseButton } from './drawer-close-button';

/**
 * DrawerHeader children component of DrawerContent
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, closeButton = true, ...restProps }, ref) => {
    const { rootProps } = useDrawerHeader({
      ...restProps,
    });

    return (
      <div {...rootProps} ref={ref}>
        {children}
        {/* TODO: remove this in v2 - deprecated */}
        {closeButton ? <DrawerCloseButton /> : null}
      </div>
    );
  },
);

DrawerHeader.displayName = 'DrawerHeader';
