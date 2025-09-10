import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../pagination.module.scss';
import type { PaginationProps } from '../type';

type UsePaginationProps = Omit<
  PaginationProps,
  'count' | 'current' | 'onChange'
>;

interface UsePaginationReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const usePagination = ({
  className = '',
  ...restProps
}: UsePaginationProps): UsePaginationReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    ...restProps,
  },
});
