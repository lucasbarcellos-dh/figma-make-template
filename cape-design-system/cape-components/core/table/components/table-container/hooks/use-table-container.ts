import { type CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../table.module.scss';
import type { TableContainerProps } from '../type';

interface UseTableContainerReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useTableContainer = ({
  className = '',
  ...restProps
}: TableContainerProps): UseTableContainerReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.container,
      overrideClassName: className,
    }),
    ...restProps,
  },
});
