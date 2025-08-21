import type { ComponentPropsWithRef } from 'react';

export interface CardProps extends ComponentPropsWithRef<'div'> {
  /**
   *  Control the visual appearance of the Card
   *  @defaultValue 'outlined'
   */
  variant?: 'filled' | 'outlined' | 'elevated';

  /**
   * A callback function called when the Card's selection state changes.
   * @param isSelected - A boolean indicating the new selection state.
   */
  onSelectionChange?: (isSelected: boolean) => void;

  /**
   * A boolean indicating whether the chip is selected.
   */
  selected?: boolean;

  /**
   * A boolean indicating whether the Card is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
}
