import type { AccordionProps } from '../type';

/**
 * Properties for the Accordion context.
 */
export interface AccordionContextProps {
  /**
   * Callback function triggered when the value changes.
   * @param value - The value of the accordion item
   * @param open - Indicates if the accordion item is open
   */
  onToggleItem: (value: string, open: boolean) => void;
  /**
   * The current value of the accordion.
   */
  openedItems: string[];

  /**
   * The size of the accordion.
   */
  size: AccordionProps['size'];

  /**
   * Indicates if the accordion is standalone.
   */
  standalone?: boolean;
}
