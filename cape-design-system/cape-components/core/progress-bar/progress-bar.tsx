import { forwardRef } from 'react';
import type { ProgressBarProps } from './type';
import { useProgressBar } from './hooks/use-progress-bar';
import { DEFAULT_MAX_VALUE } from './constants';

/**
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/47203e-progress-bar
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      size = 'medium',
      max = DEFAULT_MAX_VALUE,
      variant = 'default',
      ...restProps
    },
    ref,
  ) => {
    const { rootProps, progressValueProps } = useProgressBar({
      size,
      max,
      variant,
      ...restProps,
    });

    return (
      <div
        ref={ref}
        {...rootProps}
        aria-valuemax={rootProps.max}
        aria-valuenow={rootProps.value}
        role="progressbar"
      >
        <div {...progressValueProps} />
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
