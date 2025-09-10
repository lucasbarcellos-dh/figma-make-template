import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../text-area.module.scss';
import type { TextAreaSlotProps } from '../type';
import { useTextAreaContext } from '../../../hooks/use-text-area-context';

interface UseTextAreaSlotReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-disabled'?: boolean;
  };
}

export const useTextAreaSlot = ({
  className = '',
  ...restProps
}: TextAreaSlotProps): UseTextAreaSlotReturnType => {
  const { disabled } = useTextAreaContext();
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.slot,
        overrideClassName: className,
      }),
      ...restProps,
      'data-disabled': disabled,
    },
  };
};
