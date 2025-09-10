import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AlertHeaderProps extends ComponentPropsWithRef<'div'> {
  /**
   * Text element to be rendered as the title of the Alert.
   */
  children?: ReactNode;
}
