import type { ComponentPropsWithRef } from 'react';

export interface SpinnerProps
  extends Omit<
    ComponentPropsWithRef<'div'>,
    'color' | 'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   *  The size of the Spinner
   *  @defaultValue 'small'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /**
   *  Control the visual appearance of the Spinner
   *  @defaultValue 'branded'
   */
  variant?: 'branded' | 'inverse';
}
