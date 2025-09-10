import type { ComponentPropsWithRef } from 'react';

export interface SegmentedControlProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * The size of the SegmentedControl and SegmentedControlItem.
   * @defaultValue 'medium'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * The value of the active SegmentedControlItem. This helps set the active SegmentedControlItem programmatically.
   */
  value?: string;

  /**
   * The default value of the active SegmentedControlItem on load.
   */
  defaultValue?: string;

  /**
   * Callback triggered when the active SegmentedControlItem changes.
   */
  onChange?: (value: SegmentedControlProps['value']) => void;
}
