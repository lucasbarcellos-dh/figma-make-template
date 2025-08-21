import type { CSSProperties } from 'react';
import type { AlertHeaderProps } from '../type';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../alert.module.scss';

interface UseAlertHeaderReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useAlertHeader = ({
  className = '',
  ...restProps
}: AlertHeaderProps): UseAlertHeaderReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.header,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
