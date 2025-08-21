import type { ComponentPropsWithRef } from 'react';

export interface QuantitySelectorProps extends ComponentPropsWithRef<'div'> {
  /**
   * Size of the Quantity Selector.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The value prop shows the selected quantity amount between the buttons.
   * @defaultValue 0
   */
  value?: number;

  /**
   * The minimum number of available quantity.
   * - When the quantity reaches <code>min + 1</code>, a delete icon will be rendered for the decrement button.
   * - When the quantity reaches <code>min</code>, there won't be any decrement button by default.
   * @defaultValue 0
   */
  min?: number;

  /**
   * The maximum number of available quantity.
   * - When the quantity reaches <code>max</code>, the increment button will be disabled by default.
   */
  max?: number;

  /**
   * Callback function to handle the increment functionality.
   */
  onIncrement?: () => void;

  /**
   * Callback function to handle the decrement functionality.
   */
  onDecrement?: () => void;

  /**
   * Callback function to handle the delete functionality.
   */
  onDelete?: () => void;

  /**
   * ARIA labels for screen readers:
   * - increment: Label for the "increase" button.
   * - decrement: Label for the "decrease" button.
   * - delete: Label for the "delete" button.
   * - quantity: Prefix label announced before the current value.
   */
  labels?: Partial<Record<QuantitySelectorLabels, string>>;
}

type QuantitySelectorLabels = 'increment' | 'decrement' | 'delete' | 'quantity';
