import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { sanitizeCustomProperties } from '../../common/utils';
import styles from '../quantity-selector.module.scss';
import type { QuantitySelectorValueProps } from '../components/quantity-selector-value';

interface UseQuantitySelectorValueReturnType {
  valueProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useQuantitySelectorValue = ({
  className = '',
  style,
  ...restProps
}: QuantitySelectorValueProps): UseQuantitySelectorValueReturnType => ({
  valueProps: {
    className: useCombinedClassName({
      className: styles.value,
      overrideClassName: className,
    }),
    style: sanitizeCustomProperties({
      ...style,
    }),
    ...restProps,
  },
});
