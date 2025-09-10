import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PaginationItems } from '../pagination-items';

vi.mock('../../../hooks/use-pagination-context', () => ({
  usePaginationContext: vi.fn().mockReturnValue({
    current: 1,
    count: 10,
    isFirst: true,
    isLast: false,
  }),
}));

vi.mock('../hooks/use-pagination-items', () => ({
  usePaginationItems: vi.fn().mockReturnValue({
    rootProps: {
      className: 'test-class',
    },
    items: [
      {
        value: 1,
        key: 'pagination-item-1',
      },
      {
        value: 2,
        key: 'pagination-item-2',
      },
      {
        value: 3,
        key: 'pagination-item-3',
      },
      {
        value: 4,
        key: 'pagination-item-4',
      },
      {
        value: 5,
        key: 'pagination-item-5',
      },
      {
        value: 6,
        key: 'pagination-item-6',
      },
    ],
  }),
}));

describe('PaginationItems', () => {
  const renderComponent = () => {
    return render(<PaginationItems />);
  };

  it('renders without error', () => {
    renderComponent();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
