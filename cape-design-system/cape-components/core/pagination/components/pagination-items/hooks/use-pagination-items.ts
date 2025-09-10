import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { PaginationItemProps, PaginationItemsProps } from '../type';
import { usePaginationContext } from '../../../hooks/use-pagination-context';
import styles from '../pagination-items.module.scss';

interface UsePaginationItemsReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
  };
  items: (PaginationItemProps & { key: string })[];
}

export const usePaginationItems = ({
  ellipsis = true,
  ellipsisRange = 1,
  setMaxItems = false,
  className = '',
  ...restProps
}: PaginationItemsProps): UsePaginationItemsReturnType => {
  const { current, count } = usePaginationContext();
  const rootProps = {
    ...restProps,
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
  };
  const paginationItems = useMemo(() => {
    let items = [];
    if (!ellipsis) {
      items = Array.from({ length: count }, (_, index) => ({
        value: index + 1,
        key: `pagination-item-${index + 1}`,
      }));
    } else {
      const safeEllipsisRange = Math.max(ellipsisRange, 1);
      items.push({ value: 1, key: `pagination-item-1` });
      let min = Math.max(current - safeEllipsisRange, 2);
      let max = Math.min(current + safeEllipsisRange, count);
      if (min > 2) {
        items.push({ ellipsis: true, key: `pagination-item-first-ellipsis` });
      } else if (setMaxItems) {
        const newMax = 1 + 2 * safeEllipsisRange + min;
        max = Math.min(newMax, count - 1);
      }
      const hasEndEllipsis = max < count - safeEllipsisRange;
      if (!hasEndEllipsis && setMaxItems) {
        const newMin = count - 2 * safeEllipsisRange - 2;
        min = Math.max(newMin, 2);
      }
      for (let i = min; i <= max; i++) {
        items.push({ value: i, key: `pagination-item-${i}` });
      }
      if (hasEndEllipsis) {
        items.push({
          ellipsis: true,
          key: `pagination-item-second-ellipsis`,
        });
      }
      if (max < count) {
        items.push({ value: count, key: `pagination-item-${count}` });
      }
    }
    return items;
  }, [current, count, ellipsis, ellipsisRange, setMaxItems]);
  return {
    rootProps,
    items: paginationItems,
  };
};
