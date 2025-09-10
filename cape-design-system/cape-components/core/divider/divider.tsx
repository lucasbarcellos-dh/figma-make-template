import { forwardRef } from 'react';
import type { DividerProps } from './type';
import { useDivider } from './hooks/use-divider';

/**
 * Divider create separation between UI elements.
 * It displays a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/07fae2-divider/b/0535f7
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      size = 'small',
      variant = 'normal',
      ...restProps
    },
    ref,
  ) => {
    const { rootProps } = useDivider({
      orientation,
      size,
      variant,
      ...restProps,
    });

    return <hr ref={ref} {...rootProps} />;
  },
);

Divider.displayName = 'Divider';
