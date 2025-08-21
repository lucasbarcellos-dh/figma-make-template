import { forwardRef } from 'react';
import type { SegmentedControlItemSlotProps } from './type';
import { useSegmentedControlItemSlot } from './hooks/use-segmented-control-item-slot';

/**
 * SegmentedControlItemSlot is a child component of SegmentedControlItem and renders a slot before or after the SegmentedControlItem.
 */
export const SegmentedControlItemSlot = forwardRef<
  HTMLSpanElement,
  SegmentedControlItemSlotProps
>(({ children, ...restProps }, ref) => {
  const rootProps = useSegmentedControlItemSlot({
    ...restProps,
  });

  return (
    <span ref={ref} {...rootProps}>
      {children}
    </span>
  );
});

SegmentedControlItemSlot.displayName = 'SegmentedControlItemSlot';
