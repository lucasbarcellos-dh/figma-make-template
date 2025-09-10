import type { DrawerProps } from './type';
import { useDrawer } from './hooks/use-drawer';
import { DrawerContext } from './hooks/use-drawer-context';

/**
 * Drawer are used to focus on one particular task and they appear on top of every other content.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export function Drawer({
  placement = 'end',
  zIndex = 100,
  disablePortal = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  children,
  ...restProps
}: DrawerProps): JSX.Element {
  const { contextValues } = useDrawer({
    placement,
    zIndex,
    disablePortal,
    closeOnOutsideClick,
    closeOnEsc,
    ...restProps,
  });

  return (
    <DrawerContext.Provider value={contextValues}>
      {children}
    </DrawerContext.Provider>
  );
}

Drawer.displayName = 'Drawer';
