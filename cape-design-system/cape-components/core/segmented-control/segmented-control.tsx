import { forwardRef } from 'react';
import type { SegmentedControlProps } from './type';
import { useSegmentedControl } from './hooks/use-segmented-control';
import { SegmentedControlContext } from './hooks/use-segmented-control-context';

/**
 * The SegmentedControl component is a horizontal control that allows users to select one option from a list.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/82842a-segmented-control
 */
export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(({ children, size = 'medium', ...restProps }, ref) => {
  const {
    rootProps,
    controlContextProps: { activeItem, setActiveItem },
  } = useSegmentedControl({
    size,
    ...restProps,
  });

  return (
    <SegmentedControlContext.Provider
      value={{
        activeItem,
        setActiveItem,
      }}
    >
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    </SegmentedControlContext.Provider>
  );
});

SegmentedControl.displayName = 'SegmentedControl';
