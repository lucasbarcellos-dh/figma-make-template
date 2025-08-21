import { forwardRef } from 'react';
import type { TabPanelProps } from './type';
import { useTabPanel } from './hooks/use-tab-panel';

/**
 * Used within the `<Tabs>` component to define the Panel for each tab item.
 */
export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTabPanel({
      ...restProps,
    });

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- intentional for 'tabpanel' role
      <div ref={ref} {...rootProps} tabIndex={0}>
        {children}
      </div>
    );
  },
);

TabPanel.displayName = 'TabPanel';
