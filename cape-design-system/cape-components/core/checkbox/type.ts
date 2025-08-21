import type { ChangeEvent, ComponentPropsWithRef, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  /**
   * The label element of the Checkbox.
   */
  label?: ReactNode;
  /**
   * A boolean property indicating whether the Checkbox label is visible.
   * @defaultValue false
   */
  hideLabel?: boolean;
  /**
   * The size of the Checkbox.
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * A boolean property indicating whether the Checkbox is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A boolean property indicating whether the Checkbox is checked. This property should be used only in controlled mode. For checking the Checkbox in uncontrolled mode use isDefaultChecked.
   */
  checked?: boolean;
  /**
   * If true, the checkbox will be indeterminate. This only affects the icon shown inside checkbox and does not modify the isChecked property.
   * @defaultValue false
   */
  indeterminate?: boolean;
  /**
   * If true, the checkbox input will be read-only. This means the checkbox value is not changeable, but it still has the focus and hover states.
   * @defaultValue false
   */
  readonly?: boolean;
  /**
   * If true, the checkbox input is marked as required, and required attribute will be added.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * The default checked state. Use when the component is in uncontrolled mode.
   */
  defaultChecked?: boolean;
  /**
   * A boolean property for showing the error state of a checkbox.
   * @defaultValue false
   */
  error?: boolean;
  /**
   * The callback invoked when the checked state of the Checkbox changes.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
