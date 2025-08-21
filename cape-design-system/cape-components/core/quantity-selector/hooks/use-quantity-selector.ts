import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { sanitizeCustomProperties } from '../../common/utils';
import styles from '../quantity-selector.module.scss';
import type { QuantitySelectorProps } from '../type';

interface UseQuantitySelectorReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: QuantitySelectorProps['size'];
  };
}

export const useQuantitySelector = ({
  className = '',
  style,
  size = 'medium',
  ...restProps
}: QuantitySelectorProps): UseQuantitySelectorReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    style: sanitizeCustomProperties({
      ...style,
    }),
    'data-size': size,
    ...restProps,
  },
});
