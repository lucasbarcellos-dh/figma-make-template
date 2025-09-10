import { createElement, forwardRef } from 'react';
import { Box } from '../box';
import type { StackProps } from './type';
import { useStack } from './hooks/use-stack';

/**
 * Stack component is basically a flex container that renders its children in row or column direction.
 * It can be used both for one-dimensional and two-dimensional layouts.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/9559d8-stack/b/83f025
 */
export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useStack(restProps);

    return createElement(
      Box,
      {
        ref,
        ...rootProps,
      },
      children,
    );
  },
);

Stack.displayName = 'Stack';
