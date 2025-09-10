import { forwardRef } from 'react';
import { Box } from '../box';
import type { SpinnerProps } from './type';
import { useSpinner } from './hooks/use-spinner';

/**
 * Spinner offers a visual indication that an action is in progress, anticipating a change or awaiting a result.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/62ceac-spinner
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    { size = 'small', variant = 'branded', role = 'status', ...restProps },
    ref,
  ) => {
    const { rootProps, svgProps } = useSpinner({
      size,
      variant,
      role,
      ...restProps,
    });

    return (
      <Box ref={ref} {...rootProps}>
        <svg viewBox="0 0 48 48" {...svgProps.container}>
          <circle cx="50%" cy="50%" r="20" {...svgProps.circle} />
          <circle cx="50%" cy="50%" r="20" {...svgProps.line} />
        </svg>
      </Box>
    );
  },
);

Spinner.displayName = 'Spinner';
