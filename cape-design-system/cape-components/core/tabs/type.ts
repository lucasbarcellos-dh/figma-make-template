import type { ComponentPropsWithRef } from 'react';

export interface TabsProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * The size of the Tabs and TabItem.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If true, a divider line will be displayed below the tabs.
   * @defaultValue true
   */
  divider?: boolean;

  /**
   * The ID or index of the currently active tab. This helps set the active tab programmatically.
   */
  active?: string;

  /**
   * Callback triggered when the active tab changes.
   */
  onChange?: (tabId: string) => void;

  /**
   * Signifying the tab that should be active onload.
   */
  defaultValue?: string;
}
