import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../drawer.module.scss';
import type { DrawerFooterProps } from '../type';

interface UseDrawerFooterReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useDrawerFooter = ({
  className = '',
  ...restProps
}: DrawerFooterProps): UseDrawerFooterReturnType => {
  return {
    rootProps: {
      ...restProps,
      className: useCombinedClassName({
        className: styles.footer,
        overrideClassName: className,
      }),
    },
  };
};
