import { forwardRef } from 'react';
import { Box } from '../box';
import type { GridProps } from './type';
import { useGrid } from './hooks/use-grid';

/**
 * Grid layout component
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/31f91f-grid/b/868790
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      gap = {
        xs: 'wide',
        sm: 'wide',
        md: 'wide',
        lg: 'wide',
        xl: 'wide',
        xxl: 'wide',
      },
      children,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps } = useGrid({ gap, ...restProps });

    return (
      <Box ref={ref} {...rootProps}>
        {children}
      </Box>
    );
  },
);

Grid.displayName = 'Grid';
