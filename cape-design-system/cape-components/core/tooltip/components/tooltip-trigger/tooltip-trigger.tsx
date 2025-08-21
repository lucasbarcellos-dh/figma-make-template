import { forwardRef, isValidElement, cloneElement } from 'react';
import type { TooltipTriggerProps } from './type';
import { useTooltipTrigger } from './hooks/use-tooltip-trigger';

const NAME = 'TooltipTrigger';

/**
 *  TooltipTrigger is used inside <Tooltip /> component, as a trigger to display content of the tooltip.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/80fd67-tooltip
 */
export const TooltipTrigger = forwardRef<HTMLElement, TooltipTriggerProps>(
  ({ children, ...props }, ref) => {
    const { rootProps } = useTooltipTrigger({
      ref,
      children,
      ...props,
    });

    if (isValidElement(children)) {
      return cloneElement(children, { ...rootProps });
    }

    return (
      <button type="button" {...rootProps}>
        {children}
      </button>
    );
  },
);

TooltipTrigger.displayName = NAME;
