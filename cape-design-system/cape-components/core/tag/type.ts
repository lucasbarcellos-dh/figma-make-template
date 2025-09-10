import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TagProps extends ComponentPropsWithRef<'div'> {
  /**
   * An optional icon to be displayed at the start of the Tag.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to be displayed at the end of the Tag.
   */
  endIcon?: ReactNode;
  /**
   * The size of the Tag. It can be 'small' or 'medium'.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium';
  /**
   *  Used to control the visual presentation based on the current state
   *  @defaultValue 'branded'
   */
  status?:
    | 'branded'
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
    | 'inverse'
    | 'disabled'
    | 'neutral';
}
