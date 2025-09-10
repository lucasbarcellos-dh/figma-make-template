import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { BoxProps } from '../box';

export interface LinkProps extends ComponentPropsWithRef<'a'> {
  /**
   * href of the link
   */
  href?: string;

  /**
   *  Render the passed component instead of the default link.
   */
  asChild?: boolean;
}

export interface LinkIconProps extends Omit<BoxProps, 'as' | 'alt'> {
  /**
   * Element to be rendered at the end of the TextInput.
   */
  children?: ReactNode;
}
