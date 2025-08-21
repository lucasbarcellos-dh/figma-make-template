import { forwardRef, type ReactNode } from 'react';
import {
  FloatingPortal,
  FloatingFocusManager,
  useFloating,
} from '@floating-ui/react';
import { Backdrop } from '../../../backdrop';
import type { DrawerContentProps } from './type';
import { useDrawerContent } from './hooks/use-drawer-content';

/**
 * The content of the Drawer. DrawerContent component must be wrapped inside `<Drawer />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent({ children, ...props }, ref): ReactNode | null {
    const {
      floatingFocusManagerProps,
      rootProps,
      disablePortal,
      backdropProps,
    } = useDrawerContent({ ref, ...props });
    const { open } = backdropProps;
    const { refs } = useFloating();

    if (!open) return null;

    const floatingContent = (
      <FloatingFocusManager {...floatingFocusManagerProps}>
        <div ref={refs.setReference} {...rootProps}>
          {children}
        </div>
      </FloatingFocusManager>
    );

    return disablePortal ? (
      <Backdrop {...backdropProps}>{floatingContent}</Backdrop>
    ) : (
      <FloatingPortal>
        <Backdrop {...backdropProps}>{floatingContent}</Backdrop>
      </FloatingPortal>
    );
  },
);
