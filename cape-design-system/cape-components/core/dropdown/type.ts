import type { ComponentPropsWithRef } from 'react';

export interface DropdownProps extends ComponentPropsWithRef<'details'> {
  /**
   * The status of the dropdown.
   * @defaultValue false
   */
  open?: boolean;

  /**
   * Controls disabled state of the trigger.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Callback fired when the dropdown is toggled.
   */
  onToggle?: () => void;

  /**
   * Callback fired when the user clicks outside the dropdown.
   */
  onOutsideClick?: () => void;

  /**
   * Controls whether the dropdown should close when the user clicks outside.
   */
  closeOnOutsideClick?: boolean;
}
