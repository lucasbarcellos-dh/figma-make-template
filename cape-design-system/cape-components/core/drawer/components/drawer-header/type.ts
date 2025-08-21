import type { ComponentPropsWithRef } from 'react';
import type { IconButtonProps } from '../../../icon-button';

export interface DrawerHeaderProps extends ComponentPropsWithRef<'div'> {
  /**
   * Use boolean to hide or show the close button.
   * @defaultValue true
   * @deprecated use `<DrawerCloseButton />` instead.
   */
  closeButton?: boolean;
}

export type DrawerCloseButtonProps = IconButtonProps;
