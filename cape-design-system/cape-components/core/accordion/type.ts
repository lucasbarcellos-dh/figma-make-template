import type { ComponentPropsWithRef } from 'react';

/**
 * Represents the value of an accordion item.
 * Can be a single string or an array of strings.
 */
export type ItemValue = string | string[];

/**
 * Props for the Accordion component.
 */
export interface AccordionProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * Size of the accordion. Can be 'small' or 'medium'.
   */
  size?: 'small' | 'medium';

  /**
   * Type of the accordion. Can be 'single' or 'multiple'.
   */
  type?: 'single' | 'multiple';

  /**
   * Value of the accordion. Can be a string or an array of strings.
   */
  value?: ItemValue;

  /**
   * Removes the styling from the accordion items that make it look like a card
   */
  standalone?: boolean;

  /**
   * Callback function that is called when the value changes.
   * @param expandedKey - The new value of the accordion.
   */
  onValueChange?: (expandedKey: ItemValue) => void;
}
