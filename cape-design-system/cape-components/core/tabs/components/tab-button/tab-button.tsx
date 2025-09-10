import { forwardRef } from 'react';
import type { TabButtonProps } from './type';
import { useTabButton } from './hooks/use-tab-button';

/**
 * Used within the `<TabItem>` component to define the label for the tab item.
 */
export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ children, ...props }, ref) => {
    const { rootProps } = useTabButton({
      ...props,
    });

    return (
      <button {...rootProps} ref={ref} type="button">
        {children}
      </button>
    );
  },
);

TabButton.displayName = 'TabButton';
