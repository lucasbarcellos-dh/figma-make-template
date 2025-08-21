import type { ComponentPropsWithRef } from 'react';

export interface SkeletonProps extends ComponentPropsWithRef<'div'> {
  /**
   * Determines whether or not skeleton component has animation.
   * @defaultValue true
   */
  animated?: boolean;

  /**
   * Determines the layout of the component.
   * @defaultValue rounded
   */
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
}
