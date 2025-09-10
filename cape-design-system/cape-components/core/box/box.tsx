import { createElement, forwardRef } from 'react';
import type { BoxProps } from './type';
import { useBox } from './hooks/use-box';

/**
 * Basic box container component
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/302c6b-box/b/30ddfb
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ children, ...restProps }, ref) => {
    const { as, rootProps } = useBox(restProps);

    return createElement(
      as,
      {
        ref,
        ...rootProps,
      },
      children,
    );
  },
);

Box.displayName = 'Box';
