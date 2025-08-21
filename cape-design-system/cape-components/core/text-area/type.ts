import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextAreaProps extends ComponentPropsWithRef<'div'> {
  /**
   * The size of the TextArea.
   * @defaultValue medium
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /**
   * A boolean property indicating whether the TextArea is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * If true, the TextArea component will be read-only. This means the value of the TextArea is not changeable, but it still has the focus and hover states.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * If true, the TextArea is marked as required, and required attribute will be added to the Area element.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * A boolean property to indicate if the value of the TextInput is invalid. If 'true' the TextArea border will be rendered with error colors.
   * @deprecated Use `validationState` instead.
   */
  error?: boolean;
  /**
   * For passing TextAreaStartContent and TextAreaEndContent components.
   */
  children?: ReactNode;
  /**
   * A enum property to indicate the validity state of the TextArea.
   */
  validationState?: 'error' | 'success';
}
