import type { CSSProperties } from 'react';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { useControllableState } from '../common/hooks/use-controllable-state';
import type { TabsProps } from './type';
import { useTabs } from './hooks/use-tabs';
import { TabsContext } from './context';

/**
 * The Tabs component is designed for organizing content into separate sections that are grouped under different tabs. It allows users to switch between different views of content without leaving the current page.
 *
 * @see Docs https://cape.deliveryhero.com/112952/p/87360b-tabs
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      size = 'medium',
      active,
      onChange,
      defaultValue,
      divider = true,
      ...restProps
    },
    ref,
  ) => {
    const rootProps = useTabs({
      divider,
      size,
      ...restProps,
    });
    const [activeTab, setActiveTab] = useControllableState({
      value: active,
      defaultValue,
      onChange,
    });
    const [indicatorPosition, setIndicatorPosition] = useState<
      CSSProperties | undefined
    >();
    const tabsRef = useRef<Map<string, HTMLDivElement>>(new Map());

    const contextValues = {
      active: activeTab,
      setActive: (newTab: string) => {
        setActiveTab(newTab);

        updateIndicator(newTab);
      },
      tabsRef,
    };

    const updateIndicator = (newTab: string): void => {
      const tab = tabsRef.current.get(newTab);

      if (!tab) return;

      setIndicatorPosition({
        '--indicator-left': `${tab.offsetLeft}px`,
        '--indicator-width': `${tab.offsetWidth}px`,
      } as CSSProperties);
    };

    /*
    Due to our current theme provider implementation, CSS variables may not be immediately available 
    during the initial page load. This occurs because the CSS files containing these variables are 
    loaded asynchronously, causing a brief delay before they are applied to the DOM.
    */
    useLayoutEffect(() => {
      if (!('ResizeObserver' in window)) {
        return;
      }

      const observer = new ResizeObserver(() => {
        updateIndicator(activeTab);
      });

      if (tabsRef.current.get(activeTab)) {
        observer.observe(tabsRef.current.get(activeTab) as Element);
      }

      return () => {
        observer.disconnect();
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps -- we only need this on first render
    }, []);

    return (
      <TabsContext.Provider value={contextValues}>
        <div
          ref={ref}
          {...rootProps}
          style={{ ...rootProps.style, ...indicatorPosition }}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

Tabs.displayName = 'Tabs';
