import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextInputProps extends ComponentPropsWithRef<'div'> {
  /**
   * The size of the TextInput.
   * @defaultValue medium
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /**
   * A boolean property indicating whether the TextInput is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * If true, the TextInput component will be read-only. This means the value of the TextInput is not changeable, but it still has the focus and hover states.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * If true, the TextInput is marked as required, and required attribute will be added to the input element.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * A boolean property to indicate if the value of the TextInput is invalid. If 'true' the TextInput border will be rendered with error colors.
   * @deprecated Use `validationState` instead.
   */
  error?: boolean;
  /**
   * For passing TextInputStartContent and TextInputEndContent components.
   */
  children?: ReactNode;
  /**
   * A enum property to indicate the validity state of the TextInput.
   */
  validationState?: 'error' | 'success';
}
