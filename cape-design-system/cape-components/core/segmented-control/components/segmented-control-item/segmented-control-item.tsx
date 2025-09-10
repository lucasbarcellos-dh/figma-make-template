import { forwardRef, isValidElement, type ReactNode } from 'react';
import {
  useSegmentedControlItem,
  UseSegmentedControlItemReturnType,
} from './hooks/use-segmented-control-item';
import type { SegmentedControlItemProps } from './type';

const renderChildren = (
  children: ReactNode,
  contentProps: UseSegmentedControlItemReturnType['contentProps'],
): ReactNode[] => {
  if (Array.isArray(children)) {
    return children.map((child: ReactNode) => {
      if (!isValidElement(child)) {
        return (
          <span
            key={`segmented-control-item-content-${String(child)}`}
            {...contentProps}
          >
            {child}
          </span>
        );
      }
      return child;
    });
  }

  return [
    <span key="segmented-control-item-content" {...contentProps}>
      {children}
    </span>,
  ];
};

/**
 * Used within the `<SegmentedControl>` component to represent an item in the SegmentedControl component.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/82842a-segmented-control
 */
export const SegmentedControlItem = forwardRef<
  HTMLButtonElement,
  SegmentedControlItemProps
>(({ children, ...restProps }, ref) => {
  const { rootProps, contentProps } = useSegmentedControlItem({
    ...restProps,
  });
  const { ...restRootProps } = rootProps;

  return (
    <button ref={ref} {...restRootProps}>
      {renderChildren(children, contentProps)}
    </button>
  );
});

SegmentedControlItem.displayName = 'SegmentedControlItem';
