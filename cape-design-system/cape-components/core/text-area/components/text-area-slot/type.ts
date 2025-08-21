import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextAreaSlotProps extends ComponentPropsWithRef<'div'> {
  /**
   * Element to be rendered at the start/end of the TextArea.
   */
  children?: ReactNode;
}
