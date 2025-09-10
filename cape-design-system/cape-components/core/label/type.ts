import type { ComponentPropsWithRef } from 'react';

export interface LabelProps extends ComponentPropsWithRef<'label'> {
  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string;

  /**
   * Controls size of the label text.
   * @defaultValue 'medium'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * Controls disabled state of the label.
   */
  disabled?: boolean;
}
