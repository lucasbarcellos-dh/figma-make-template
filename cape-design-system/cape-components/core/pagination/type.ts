import type { ComponentPropsWithRef } from 'react';

export interface PaginationProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /**
   * The total number of elements.
   */
  count: number;
  /**
   * The current page number.
   * @defaultValue 1
   */
  current: number;
  /**
   * Callback function that is triggered when the page is changed.
   * @param page - The new page number.
   */
  onChange?: (page: number) => void;
}
