import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { beforeEach, expect, describe, it, afterEach, vi } from 'vitest';
import { PaginationItemsPerPageList } from '../pagination-items-per-page-list';
import { useDropdownContext } from '../../../../dropdown';

vi.mock('../../../../dropdown', () => ({
  useDropdownContext: vi.fn(),
}));

describe('paginationItemsPerPageList', () => {
  const options = [10, 20, 30];
  const onItemsPerPageChange = vi.fn();

  const closeDropdown = vi.fn();

  beforeEach(() => {
    (useDropdownContext as Mock).mockReturnValue({ closeDropdown });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the list items correctly', () => {
    render(
      <PaginationItemsPerPageList
        onItemsPerPageChange={onItemsPerPageChange}
        options={options}
      />,
    );

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('calls onItemsPerPageChange and closeDropdown when an item is clicked', async () => {
    render(
      <PaginationItemsPerPageList
        onItemsPerPageChange={onItemsPerPageChange}
        options={options}
      />,
    );

    const user = userEvent.setup();
    const listItem = screen.getByText(`${options[0]}`);

    await user.click(listItem);

    expect(onItemsPerPageChange).toHaveBeenCalledWith(options[0]);
    expect(closeDropdown).toHaveBeenCalled();
  });

  it('does not throw an error if onItemsPerPageChange is not provided', async () => {
    render(<PaginationItemsPerPageList options={options} />);

    const user = userEvent.setup();
    const listItem = screen.getByText(`${options[0]}`);

    await user.click(listItem);

    expect(closeDropdown).toHaveBeenCalled();
  });
});
