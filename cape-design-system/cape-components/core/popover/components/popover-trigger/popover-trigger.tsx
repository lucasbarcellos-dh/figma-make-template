import { forwardRef, isValidElement, cloneElement } from 'react';
import type { PopoverTriggerProps } from './type';
import { usePopoverTrigger } from './hooks/use-popover-trigger';

/**
 * Used to set the position of the Popover. PopoverTrigger component must be wrapped inside `<Popover />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/892a6f-popover/b/6504bf
 */
export const PopoverTrigger = forwardRef<HTMLDivElement, PopoverTriggerProps>(
  function PopoverTrigger({ children, ...restProps }, ref): React.ReactNode {
    const { rootProps } = usePopoverTrigger({
      ref,
      children,
      ...restProps,
    });

    if (isValidElement(children)) {
      return cloneElement(children, { ...rootProps });
    }

    return <div {...rootProps}>{children}</div>;
  },
);
