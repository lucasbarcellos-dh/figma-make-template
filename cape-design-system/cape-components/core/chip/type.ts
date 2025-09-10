import type { ReactNode, ComponentPropsWithRef } from 'react';

export interface ChipProps
  extends Omit<
    ComponentPropsWithRef<'div'>,
    'color' | 'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   * An optional icon to be displayed at the start of the chip.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to be displayed at the end of the chip.
   */
  endIcon?: ReactNode;

  /**
   * A boolean indicating whether the chip is disabled.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The size of the chip. It can be one of 'xsmall', 'small', 'medium', or 'large'.
   * @defaultValue 'xsmall'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  /**
   * A callback function called when the chip's selection state changes.
   * @param selectedState - A boolean indicating the new selection state.
   */
  onSelectionChange?: (selectedState: boolean) => void;

  /**
   * A boolean indicating whether the chip is selected.
   * @defaultValue false
   */
  selected?: boolean;

  /**
   * A callback function called when the chip is deleted.
   */
  onDelete?: () => void;

  /**
   * The label or content of the chip.
   */
  label?: ReactNode;

  /**
   * The accessible label for the close button.
   */
  closeButtonLabel?: string;
}
