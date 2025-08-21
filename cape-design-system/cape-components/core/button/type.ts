import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  /**
   * Use to render a JSX Element other than HTML <button> with the same Button styles.
   * When true, the direct child element will be rendered as the root element.
   * @defaultValue false
   */
  asChild?: boolean;
  /**
   * A boolean indicating whether the button is disabled.
   * If loading is true then disabled will be true as well.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The size of the icon button.
   * @defaultValue 'medium'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * Variant of button
   * @defaultValue 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Status of button
   * @defaultValue 'branded'
   */
  status?: 'branded' | 'error' | 'success' | 'inverse';

  /**
   * An optional icon to be displayed at the start of the button.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to be displayed at the end of the button.
   */
  endIcon?: ReactNode;

  /**
   * A boolean indicating loading state.
   * If loading is true then disabled will be true as well.
   * @defaultValue false
   */
  loading?: boolean;
}
