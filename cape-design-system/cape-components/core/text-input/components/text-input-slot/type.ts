import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextInputSlotProps extends ComponentPropsWithRef<'div'> {
  /**
   * Element to be rendered at the end of the TextInput.
   */
  children?: ReactNode;
}
