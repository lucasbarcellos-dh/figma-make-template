import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../segmented-control.module.scss';
import type { SegmentedControlItemSlotProps } from '../type';

interface UseSegmentedControlItemSlotReturnType {
  className?: string;
}

export const useSegmentedControlItemSlot = ({
  className = '',
  ...restProps
}: SegmentedControlItemSlotProps): UseSegmentedControlItemSlotReturnType => {
  return {
    className: useCombinedClassName({
      className: styles.slot,
      overrideClassName: className,
    }),
    ...restProps,
  };
};
