import { forwardRef } from 'react';
import { CloseMiniIcon } from '@deliveryhero/cape-icons';
import { IconButton } from '../../../icon-button';
import type { DrawerCloseButtonProps } from './type';
import { useDrawerCloseButton } from './hooks/use-drawer-header';

/**
 * The DrawerCloseButton component should be used within the DrawerHeader.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/51b1c8-drawer
 */
export const DrawerCloseButton = forwardRef<
  HTMLButtonElement,
  DrawerCloseButtonProps
>((props, ref) => {
  const closeButtonProps = useDrawerCloseButton({
    ...props,
  });

  return (
    <IconButton
      aria-label="Close drawer"
      icon={<CloseMiniIcon />}
      ref={ref}
      size="small"
      {...closeButtonProps}
    />
  );
});

DrawerCloseButton.displayName = 'DrawerCloseButton';
