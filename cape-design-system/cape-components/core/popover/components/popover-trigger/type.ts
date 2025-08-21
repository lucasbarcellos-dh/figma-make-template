import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PopoverTriggerProps extends ComponentPropsWithRef<'div'> {
  /**
   * Used to set the position of the popover.
   * Ensure the children passed to PopoverTrigger is focusable and has a forwarded ref.
   */
  children: ReactNode;
}
