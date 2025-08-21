import type { ComponentPropsWithRef } from 'react';

export interface PaginationItemsProps
  extends Omit<ComponentPropsWithRef<'ul'>, 'onChange'> {
  /**
   * if true, it will show ellipsis
   * @defaultValue true
   */
  ellipsis?: boolean;
  /**
   * The number of elements before and after the current page
   * @defaultValue 1
   */
  ellipsisRange?: number;
  /**
   * If true, it will show a fixed amount of items
   * @defaultValue false
   */
  setMaxItems?: boolean;
  /**
   * Callback function that is triggered when the page changed.
   * @param page - The selected page.
   */
  onChange?: (page: number) => void;
}

export interface PaginationItemProps extends ComponentPropsWithRef<'li'> {
  ellipsis?: boolean;
  value?: number;
}
