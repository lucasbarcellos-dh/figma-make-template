import type { ChangeEvent, ComponentPropsWithRef, ReactNode } from 'react';

export interface SwitchProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  /**
   * The label element of the Switch.
   */
  label?: ReactNode;
  /**
   * A boolean property indicating whether the Switch label is visible.
   * @defaultValue false
   */
  hideLabel?: boolean;
  /**
   * The size of the Switch.
   * @defaultValue medium
   */
  size?: 'medium' | 'large';
  /**
   * A boolean property indicating whether the Switch is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A boolean property indicating whether the Switch is checked. This property should be used only in controlled mode. For checking the Switch in uncontrolled mode use isDefaultChecked.
   */
  checked?: boolean;
  /**
   * If true, the Switch input will be read-only. This means the Switch value is not changeable, but it still has the focus and hover states.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * If true, the Switch input is marked as required, and required attribute will be added.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * The default checked state. Use when the component is in uncontrolled mode.
   */
  defaultChecked?: boolean;
  /**
   * The callback invoked when the checked state of the Switch changes.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
