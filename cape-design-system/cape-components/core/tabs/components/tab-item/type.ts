import type { ComponentPropsWithRef } from 'react';

export interface TabItemProps extends ComponentPropsWithRef<'div'> {
  /**
   * A unique identifier for each tab. Used to reference and control the active tab.
   */
  value: string;

  /**
   * If true, the tab is disabled and cannot be clicked.
   * @defaultValue false
   */
  disabled?: boolean;
}
