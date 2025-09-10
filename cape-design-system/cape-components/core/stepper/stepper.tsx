import { forwardRef } from 'react';
import type { StepperProps } from './type';
import { useStepper } from './hooks/use-stepper';

/**
 * Stepper component indicates multiple steps of a workflow or process followed by a description for each step.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/7898ad-stepper
 */
export const Stepper = forwardRef<HTMLOListElement, StepperProps>(
  ({ size = 'medium', ...restProps }, ref) => {
    const { rootProps } = useStepper({
      size,
      ...restProps,
    });

    return <ol ref={ref} {...rootProps} />;
  },
);

Stepper.displayName = 'Stepper';
