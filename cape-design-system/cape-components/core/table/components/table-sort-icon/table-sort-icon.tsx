import React, { forwardRef } from 'react';
import type { SVGComponentCustomProps } from '@deliveryhero/cape-icons';
import { SwapIcon } from '@deliveryhero/cape-icons';
import type { TableSortIconProps } from './type';

/**
 * Used within the `<Table>` component to get the sort icon.
 */

const NAME = 'TableSortIcon';

// TODO: Add other type icons once they are available.
const icons = {
  asc: {
    alphabetical: SwapIcon,
    numeric: SwapIcon,
    default: SwapIcon,
  },
  desc: {
    alphabetical: SwapIcon,
    numeric: SwapIcon,
    default: SwapIcon,
  },
} as const;

type IconType = React.FC<SVGComponentCustomProps> | null;

function getIcon(
  type: TableSortIconProps['type'],
  order: 'asc' | 'desc',
): IconType {
  if (!type) return null;

  return icons[order][type] as IconType;
}

export const TableSortIcon = forwardRef<SVGSVGElement, TableSortIconProps>(
  ({ type = 'default', order = 'asc', size = 'small', ...restProps }, ref) => {
    const SortIcon = getIcon(type, order);
    if (!SortIcon) return null;

    return <SortIcon ref={ref} size={size} {...restProps} />;
  },
);

TableSortIcon.displayName = NAME;
