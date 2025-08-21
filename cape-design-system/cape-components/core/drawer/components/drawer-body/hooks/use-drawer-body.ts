import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../drawer.module.scss';
import type { DrawerBodyProps } from '../type';

interface UseDrawerBodyReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useDrawerBody = ({
  className = '',
  ...restProps
}: DrawerBodyProps): UseDrawerBodyReturnType => {
  return {
    rootProps: {
      ...restProps,
      className: useCombinedClassName({
        className: styles.body,
        overrideClassName: className,
      }),
    },
  };
};
