import type { ReactNode } from 'react';

export interface TooltipTriggerProps extends React.HTMLProps<HTMLElement> {
  /**
   * Used to set the position of the tooltip. The component must be wrapped in forwardRef() to allow passing ref.
   */
  children: ReactNode;
}
