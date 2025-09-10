import type { ChangeEvent, ComponentPropsWithRef, ReactNode } from 'react';

export interface RadioProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  /**
   * The label element of the Radio.
   */
  label?: ReactNode;
  /**
   * A boolean property indicating whether the Radio label is visible.
   * @defaultValue false
   */
  hideLabel?: boolean;
  /**
   * The size of the Radio.
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * A boolean property indicating whether the Radio is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A boolean property indicating whether the Radio is checked. This property should be used only in controlled mode. For checking the Radio in uncontrolled mode use isDefaultChecked.
   */
  checked?: boolean;
  /**
   * If true, the radio input will be read-only. This means the radio value is not changeable, but it still has the focus and hover states.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * If true, the radio input is marked as required, and required attribute will be added.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * The default checked state. Use when the component is in uncontrolled mode.
   */
  defaultChecked?: boolean;
  /**
   * A boolean property for showing the error state of a radio.
   * @defaultValue false
   */
  error?: boolean;
  /**
   * The callback invoked when the checked state of the Radio changes.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
