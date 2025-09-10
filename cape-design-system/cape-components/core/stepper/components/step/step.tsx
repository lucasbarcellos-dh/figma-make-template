import { forwardRef } from 'react';
import type { StepProps } from './type';
import { useStep } from './hooks/use-step';

/**
 * Step is used in `Stepper`.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/7898ad-stepper
 */
export const Step = forwardRef<HTMLLIElement, StepProps>(
  ({ children, ...restProps }, ref) => {
    const { textContainerClassname, rootProps } = useStep(restProps);

    return (
      <li ref={ref} {...rootProps}>
        <div className={textContainerClassname}>{children}</div>
      </li>
    );
  },
);

Step.displayName = 'Step';
