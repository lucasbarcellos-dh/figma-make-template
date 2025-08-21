import type { ComponentPropsWithRef } from 'react';

export interface ProgressBarProps extends ComponentPropsWithRef<'div'> {
  /**
   * The thickness of the progress bar.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the progress bar.
   * @defaultValue 'default'
   */
  variant?: 'default' | 'inverse';
  /**
   * The value of filled progress to be shown.
   * eg: 10, 15, 50
   * If not specified then progress bar will be indeterminate and the bar will be animated
   */
  value?: number;
  /**
   * The max value possible in the progress bar
   * @defaultValue 100
   */
  max?: number;
}
