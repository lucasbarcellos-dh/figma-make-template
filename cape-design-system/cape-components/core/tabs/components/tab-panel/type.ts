import type { ComponentPropsWithRef } from 'react';

export interface TabPanelProps extends ComponentPropsWithRef<'div'> {
  /**
   * A unique identifier for each tab. Used to reference and control the active tab.
   */
  value: string;
}
