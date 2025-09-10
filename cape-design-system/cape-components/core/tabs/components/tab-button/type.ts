import type { ComponentPropsWithRef } from 'react';

export interface TabButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'value'> {
  /**
   * A unique identifier for each tab. Used to reference and control the active tab.
   */
  value: string;
}
