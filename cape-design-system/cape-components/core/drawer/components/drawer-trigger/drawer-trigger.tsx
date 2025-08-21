import {
  forwardRef,
  isValidElement,
  cloneElement,
  type ReactNode,
} from 'react';
import { Button } from '../../../button';
import type { DrawerTriggerProps } from './type';
import { useDrawerTrigger } from './hooks/use-drawer-trigger';

/**
 * Used to set the position of the Drawer. DrawerTrigger component must be wrapped inside `<Drawer />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerTrigger = forwardRef<HTMLDivElement, DrawerTriggerProps>(
  function DrawerTrigger({ children, ...restProps }, ref): ReactNode {
    const { rootProps } = useDrawerTrigger({
      ref,
      children,
      ...restProps,
    });

    if (isValidElement(children)) {
      return cloneElement(children, { ...rootProps });
    }

    return <Button {...rootProps}>{children}</Button>;
  },
);
