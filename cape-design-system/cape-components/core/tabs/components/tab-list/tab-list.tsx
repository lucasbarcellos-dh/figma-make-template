import { forwardRef } from 'react';
import type { TabListProps } from './type';
import { useTabList } from './hooks/use-tab-list';

/**
 * Used within the `<Tabs>` component to define a list of tab items.
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps, containerClassname, indicatorClassname } = useTabList({
      ...restProps,
    });

    return (
      <div className={containerClassname}>
        <div ref={ref} {...rootProps}>
          {children}
          <div className={indicatorClassname} />
        </div>
      </div>
    );
  },
);

TabList.displayName = 'TabList';
