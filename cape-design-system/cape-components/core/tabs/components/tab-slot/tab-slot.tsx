import { forwardRef } from 'react';
import type { TabSlotProps } from './type';
import { useTabSlot } from './hooks/use-tab-slot';

/**
 * Used within the `<Tabs>` component to define the slot for the tab item.
 */
export const TabSlot = forwardRef<HTMLDivElement, TabSlotProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTabSlot({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

TabSlot.displayName = 'TabSlot';
