import { forwardRef } from 'react';
import {
  Dropdown,
  DropdownBody,
  DropdownSelect,
  DropdownSelectValue,
  DropdownTrigger,
} from '../../../dropdown';
import type { PaginationItemsPerPageProps } from './type';
import { PaginationItemsPerPageList } from './pagination-items-per-page-list';

/**
 * PaginationItemsPerPage is children of Pagination
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationItemsPerPage = forwardRef<
  HTMLDetailsElement,
  PaginationItemsPerPageProps
>(
  (
    { label, options, itemsPerPage, onItemsPerPageChange, ...restProps },
    ref,
  ) => (
    <Dropdown ref={ref} {...restProps}>
      <DropdownTrigger>
        <DropdownSelect size="xsmall">
          <DropdownSelectValue placeholder={label}>
            {itemsPerPage || null}
          </DropdownSelectValue>
        </DropdownSelect>
      </DropdownTrigger>
      <DropdownBody>
        <PaginationItemsPerPageList
          onItemsPerPageChange={onItemsPerPageChange}
          options={options}
        />
      </DropdownBody>
    </Dropdown>
  ),
);

PaginationItemsPerPage.displayName = 'PaginationItemsPerPage';
