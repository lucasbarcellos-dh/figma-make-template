import { forwardRef } from 'react';
import { Box } from '../../../box';
import type { GridItemProps } from './type';
import { useGridItem } from './hooks/use-grid-item';
/**
 * Grid Item component which is used as children of Grid component
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/31f91f-grid/b/868790
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ xs, sm, md, lg, xl, xxl, children, ...restProps }, ref) => {
    const { rootProps } = useGridItem({
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      ...restProps,
    });

    return (
      <Box ref={ref} {...rootProps}>
        {children}
      </Box>
    );
  },
);

GridItem.displayName = 'GridItem';
