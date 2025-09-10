import { type CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../stepper.module.scss';
import type { StepperProps } from '../type';

type UseStepperProps = StepperProps;

interface UseStepperReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: string;
  };
}

export const useStepper = ({
  className = '',
  size,
  ...restProps
}: UseStepperProps): UseStepperReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    ...restProps,
  },
});
