import type { ComponentPropsWithRef } from 'react';

export interface DropdownSelectProps extends ComponentPropsWithRef<'div'> {
  /**
   * The size of the DropdownSelect.
   * @defaultValue medium
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * A boolean property to indicate whether the DropdownSelect has error or not.
   * @defaultValue false
   * @deprecated Use `validationState` instead.
   */
  error?: boolean;

  /**
   * A enum property to indicate the validity state of the DropdownSelect.
   */
  validationState?: 'error' | 'success';
}

export interface DropdownSelectValueProps extends ComponentPropsWithRef<'div'> {
  /**
   * Placeholder for Select component.
   */
  placeholder?: string;
}

export type DropdownSelectSlotProps = ComponentPropsWithRef<'div'>;
