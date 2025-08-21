import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { PaginationItemProps } from '../type';
import { usePaginationContext } from '../../../hooks/use-pagination-context';
import styles from '../pagination-item.module.scss';

interface UsePaginationItemReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  contentProps: {
    onClick?: () => void;
    'data-selected': boolean;
  };
}

export const usePaginationItem = ({
  value,
  className = '',
  ...restProps
}: PaginationItemProps): UsePaginationItemReturnType => {
  const { onChange, current } = usePaginationContext();

  return {
    rootProps: {
      ...restProps,
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
    },
    contentProps: {
      'data-selected': value === current,
      onClick: () => {
        value && onChange && onChange(value);
      },
    },
  };
};
