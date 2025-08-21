import type { DropdownProps } from '../../../dropdown';

export type PaginationItemsPerPageProps = DropdownProps & {
  /**
   * The page size options.
   */
  options: number[];
  /**
   * The placeholder of the dropdown.
   */
  label?: string;
  /**
   * The current page size.
   */
  itemsPerPage?: number;
  /**
   * Callback function that is triggered when the page size is changed.
   * @param rowPerPage - The number of rows per page.
   */
  onItemsPerPageChange?: (rowPerPage: number) => void;
};
