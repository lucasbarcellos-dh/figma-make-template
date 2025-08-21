import type { ReactElement, ComponentPropsWithRef } from 'react';

export interface IconButtonProps
  extends Omit<
    ComponentPropsWithRef<'button'>,
    'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   * An optional ReactElement to be used as the icon.
   */
  icon?: ReactElement;

  /**
   * A boolean indicating whether the button has an outline style.
   * @deprecated - ⚠ use <code>variant="secondary"</code> prop instead.
   * @see  variant
   * @defaultValue false
   */
  outline?: boolean;

  /**
   * variant of the icon button
   * @defaultValue tertiary
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'elevated';

  /**
   * status of the icon button
   * @defaultValue branded
   */
  status?: 'branded' | 'inverse';

  /**
   * A boolean indicating whether the button is disabled.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The size of the icon button. It can be one of '2xsmall', 'xsmall', 'small', 'medium', or 'large'.
   * @defaultValue 'xsmall'
   */
  size?: '2xsmall' | 'xsmall' | 'small' | 'medium' | 'large';
}
