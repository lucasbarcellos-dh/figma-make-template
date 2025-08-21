import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import { sanitizeCustomProperties } from '../../../../common/utils';
import styles from '../../../table.module.scss';
import type { TableCellProps } from '../../table-cell/type';

interface UseTableHeadReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useTableHead = ({
  className = '',
  style,
  align = 'left',
  verticalAlign = 'top',
  ...restProps
}: TableCellProps): UseTableHeadReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.thead,
      overrideClassName: className,
    }),
    style: sanitizeCustomProperties({
      ...style,
      // Don't add an inline style property for text-align and vertical-align, if align is left or top. Those are default values.
      textAlign: align !== 'left' ? align : undefined,
      verticalAlign: verticalAlign !== 'top' ? verticalAlign : undefined,
    }),
    ...restProps,
  },
});
