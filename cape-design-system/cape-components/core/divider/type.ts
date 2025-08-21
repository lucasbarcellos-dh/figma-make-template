import type { ComponentPropsWithRef } from 'react';

export interface DividerProps
  extends Omit<
    ComponentPropsWithRef<'hr'>,
    'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   *  Control the orientation type of divider
   *  @defaultValue 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   *  Control the size of the divider line
   *  @defaultValue 'small'
   */
  size?: 'small' | 'medium';
  /**
   * Control the color variant of the divider line
   * @defaultValue 'normal'
   */
  variant?: 'normal' | 'dark' | 'inverse';
}
