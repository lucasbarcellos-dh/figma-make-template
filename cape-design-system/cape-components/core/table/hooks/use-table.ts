import type { CSSProperties, HTMLAttributes } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../table.module.scss';
import type { TableProps } from '../type';

type UseTableProps = TableProps;

interface UseTableReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: TableProps['size'];
    'data-border'?: TableProps['border'];
  };
}

export const useTable = ({
  className = '',
  size = 'medium',
  border = false,
  ...restProps
}: UseTableProps & HTMLAttributes<HTMLTableElement>): UseTableReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    'data-border': border || undefined,
    ...restProps,
  },
});
