import type { ComponentPropsWithRef } from 'react';

export interface SelectProps
  extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  /**
   * The size of the Select.
   * @defaultValue medium
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * Marks the Select as invalid visually. When true, the border displays error colors.
   */
  error?: boolean;
}
