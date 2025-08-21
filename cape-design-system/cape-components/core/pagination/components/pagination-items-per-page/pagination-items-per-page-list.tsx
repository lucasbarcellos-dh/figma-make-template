import type { ReactNode } from 'react';
import { List, ListItem } from '../../../list';
import { useDropdownContext } from '../../../dropdown';

interface PaginationItemsPerPageListProps {
  options: number[];
  onItemsPerPageChange?: (rowPerPage: number) => void;
}
export function PaginationItemsPerPageList({
  options,
  onItemsPerPageChange,
}: PaginationItemsPerPageListProps): ReactNode {
  const { closeDropdown } = useDropdownContext();
  return (
    <List>
      {options.map((item) => (
        <ListItem
          divider={false}
          key={item}
          onClick={() => {
            onItemsPerPageChange?.(item);
            closeDropdown();
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
}
