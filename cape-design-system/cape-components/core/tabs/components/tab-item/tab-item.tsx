import { Children, forwardRef, isValidElement } from 'react';
import { TabSlot } from '../tab-slot';
import { TabButton } from '../tab-button';
import { useTabsContext } from '../../hooks/use-tabs-context';
import type { TabItemProps } from './type';
import { useTabItem } from './hooks/use-tab-item';

/**
 * Used within the `<Tabs>` component to define content inside eact tab item.
 */
export const TabItem = forwardRef<HTMLDivElement, TabItemProps>(
  ({ children, value, ...props }, ref) => {
    const { rootProps } = useTabItem({
      value,
      ...props,
    });
    const { tabsRef } = useTabsContext();

    return (
      <div
        {...rootProps}
        /*
        We are using a ref callback here to add rendered tab to the `tabsRef` array
        so we can keep track of the rendered tabs. We'll use it to calculate the
        indicator's position. We are also checking whether we get a `ref` prop and using it.
        */
        ref={(el) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(el);
            } else {
              ref.current = el;
            }
          }
          if (!el) return;
          tabsRef.current.set(value, el);

          return el;
        }}
        role="presentation"
      >
        {Children.map(children, (child) =>
          isValidElement(child) && child.type === TabSlot ? (
            child
          ) : (
            <TabButton disabled={rootProps.disabled} value={value}>
              {child}
            </TabButton>
          ),
        )}
      </div>
    );
  },
);

TabItem.displayName = 'TabItem';
