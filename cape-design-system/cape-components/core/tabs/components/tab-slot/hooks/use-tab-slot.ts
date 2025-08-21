import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../tabs.module.scss';
import type { TabSlotProps } from '../type';

interface UseTabSlotReturnType {
  rootProps: {
    className?: string;
    tabIndex: number;
  };
}

export const useTabSlot = ({
  className = '',
  ...restProps
}: TabSlotProps): UseTabSlotReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.slot,
      overrideClassName: className,
    }),
    tabIndex: -1,
    ...restProps,
  },
});
