import { type CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../stepper.module.scss';
import type { StepProps } from '../type';

type UseStepProps = StepProps;

interface UseStepReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  textContainerClassname?: string;
}

export const useStep = ({
  className = '',
  ...restProps
}: UseStepProps): UseStepReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.step,
        overrideClassName: className,
      }),
      ...restProps,
    },
    textContainerClassname: styles.text,
  };
};
