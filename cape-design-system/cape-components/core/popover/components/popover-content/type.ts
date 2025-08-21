import type { ReactNode, MutableRefObject } from 'react';
import type { StackProps } from '../../../stack';

export interface PopoverContentProps extends StackProps {
  /**
   * Used to set the position of the popover. The component must be wrapped in forwardRef() to allow passing ref.
   */
  children: ReactNode;
  /**
   * For accessibility best practices, in case the popover element has no close or dismiss button, the initial focus must be set to -1.
   * @defaultValue 0
   */
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}
