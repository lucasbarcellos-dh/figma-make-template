import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { TextInputSlotProps } from '../type';
import styles from '../../../text-input.module.scss';

interface UseTextInputSlotReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useTextInputSlot = ({
  className = '',
  ...restProps
}: TextInputSlotProps): UseTextInputSlotReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.slot,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
